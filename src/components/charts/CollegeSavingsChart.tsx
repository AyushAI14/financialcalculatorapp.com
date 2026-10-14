import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from 'recharts';
import type { CollegeSavingsScheduleEntry } from '../../lib/math/finance';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface CollegeSavingsChartProps {
  initialSchedule?: CollegeSavingsScheduleEntry[];
  initialEnrollmentAge?: number;
  title?: string;
  subtitle?: string;
}

export default function CollegeSavingsChart({
  initialSchedule,
  initialEnrollmentAge = 18,
  title = "College Savings Projection",
  subtitle = "529 portfolio accumulation vs. 4-year tuition target over child's timeline"
}: CollegeSavingsChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [schedule, setSchedule] = useState<CollegeSavingsScheduleEntry[]>(initialSchedule || []);
  const [enrollmentAge, setEnrollmentAge] = useState<number>(initialEnrollmentAge);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Mount detection for client rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle escape key and body overflow when in fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  const handleDownload = async () => {
    setIsDownloading(true);
    await downloadChartAsPng(containerRef.current, {
      filename: `college-savings-projection-chart.png`
    });
    setIsDownloading(false);
  };

  // Sync with document theme (light/dark mode)
  useEffect(() => {
    const updateTheme = () => {
      if (typeof document === 'undefined') return;
      const dark =
        document.documentElement.dataset.theme === 'dark' ||
        document.documentElement.classList.contains('dark');
      setIsDark(dark);
    };

    updateTheme();
    window.addEventListener('theme-change', updateTheme);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });

    return () => {
      window.removeEventListener('theme-change', updateTheme);
      observer.disconnect();
    };
  }, []);

  // Listen for calculation updates from the form inputs
  useEffect(() => {
    const handleUpdate = (
      e: CustomEvent<{ schedule: CollegeSavingsScheduleEntry[]; enrollmentAge: number }>
    ) => {
      if (e.detail?.schedule) {
        setSchedule(e.detail.schedule);
      }
      if (e.detail?.enrollmentAge !== undefined) {
        setEnrollmentAge(e.detail.enrollmentAge);
      }
    };

    window.addEventListener('college-savings-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('college-savings-data-updated' as any, handleUpdate);
    };
  }, []);

  // Map raw schedule into formatted Recharts series
  const chartData = useMemo(() => {
    return schedule.map((item) => ({
      ...item,
      label: `Age ${item.age}`
    }));
  }, [schedule]);

  // Reference line marker label
  const enrollmentLabel = `Age ${enrollmentAge}`;

  // Current shortfall at enrollment age
  const enrollmentItem = useMemo(() => {
    return chartData.find((d) => d.age === enrollmentAge) || chartData[chartData.length - 1];
  }, [chartData, enrollmentAge]);

  const hasShortfall = enrollmentItem ? enrollmentItem.shortfall > 0 : false;
  const currentShortfallAmount = enrollmentItem ? enrollmentItem.shortfall : 0;

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h4 className="text-xs font-mono text-mute uppercase tracking-wider">
            {title}
          </h4>
        </div>
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading chart projection...
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? 'fixed inset-0 z-50 bg-canvas/98 backdrop-blur-md p-4 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto'
          : 'bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full'
      }
    >
      {/* Header & Status Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-hairline pb-3">
        <div>
          <h4 className="text-xs font-mono text-mute uppercase tracking-wider">
            {title}
          </h4>
          <p className="text-[11px] text-body mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Shortfall / Fully Funded Badge & Header Actions */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {hasShortfall ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Shortfall: {formatCurrency(currentShortfallAmount)}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Fully Funded
            </span>
          )}

          {/* Zoom Fullscreen & Download Actions */}
          <ChartHeaderActions
            isFullscreen={isFullscreen}
            onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
            onDownload={handleDownload}
            isDownloading={isDownloading}
          />
        </div>
      </div>

      {/* Chart Canvas */}
      <div className={isFullscreen ? 'flex-1 w-full min-h-[480px] sm:min-h-[580px] my-2 relative' : 'h-80 w-full relative'}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 15, right: 12, left: -10, bottom: 5 }}
          >
            <defs>
              {/* Shortfall Red Translucent Gradient */}
              <linearGradient id="shortfallGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.06} />
              </linearGradient>

              {/* Balance Green Gradient */}
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.32} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
              vertical={false}
            />

            <XAxis
              dataKey="label"
              stroke={isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'}
              tick={{
                fill: isDark ? '#aaa9a3' : '#696966',
                fontSize: 10,
                fontFamily: 'var(--mono)'
              }}
              tickLine={false}
              interval="preserveStartEnd"
              minTickGap={20}
            />

            <YAxis
              stroke={isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'}
              tick={{
                fill: isDark ? '#aaa9a3' : '#696966',
                fontSize: 10,
                fontFamily: 'var(--mono)'
              }}
              tickLine={false}
              tickFormatter={(val) => formatCurrencyTick(val)}
              width={64}
            />

            <Tooltip
              content={<CustomTooltip isDark={isDark} />}
              cursor={{
                stroke: isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(15, 23, 42, 0.35)',
                strokeDasharray: '4 3',
                strokeWidth: 1.5
              }}
            />

            {/* Clear marker for College Start Age */}
            <ReferenceLine
              x={enrollmentLabel}
              stroke="#c4553d"
              strokeDasharray="4 4"
              strokeWidth={2}
              label={{
                value: `College Start (Age ${enrollmentAge})`,
                position: 'insideTopRight',
                fill: isDark ? '#f2f2ee' : '#151515',
                fontSize: 10,
                fontFamily: 'var(--mono)',
                fontWeight: 600,
                offset: 8
              }}
            />

            {/* Future College Costs (Red line + shaded shortfall area) */}
            <Area
              type="monotone"
              dataKey="collegeCost"
              name="Future College Costs"
              stroke="#ef4444"
              strokeWidth={2.5}
              fill="url(#shortfallGradient)"
              activeDot={{
                r: 5.5,
                stroke: '#ffffff',
                strokeWidth: 2,
                fill: '#ef4444'
              }}
            />

            {/* Projected 529 Balance (Green line + green fill below) */}
            <Area
              type="monotone"
              dataKey="balance"
              name="Projected 529 Balance"
              stroke="#10b981"
              strokeWidth={2.5}
              fill="url(#balanceGradient)"
              activeDot={{
                r: 5.5,
                stroke: '#ffffff',
                strokeWidth: 2,
                fill: '#10b981'
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Milestone Legend Indicators */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-3 mt-2 border-t border-hairline/80 text-[11px] font-mono">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <span className="text-ink">Projected 529 Balance</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="text-ink">Future College Costs</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 rounded bg-rose-500/25 border border-rose-500/40 inline-block" />
            <span className="text-muted">Funding Shortfall</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-muted">
          <span className="w-3 border-t-2 border-dashed border-[#c4553d] inline-block" />
          <span>Start Age: {enrollmentAge}</span>
        </div>
      </div>
    </div>
  );
}

// Custom High-Contrast Tooltip
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  isDark?: boolean;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload as CollegeSavingsScheduleEntry & { label: string };
  if (!data) return null;

  const isShortfall = data.shortfall > 0;

  return (
    <div className="bg-[#141414]/95 text-white p-3.5 rounded-lg shadow-xl border border-white/15 text-xs font-sans min-w-[220px] space-y-2.5 pointer-events-none z-50">
      {/* Header */}
      <div className="border-b border-white/10 pb-1.5 flex items-center justify-between">
        <span className="font-mono font-bold text-white text-[11px]">
          Year {data.year} • {data.label}
        </span>
        {data.isEnrollmentYear && (
          <span className="px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-300 text-[10px] font-mono font-semibold">
            College Start
          </span>
        )}
        {data.isCollegeYear && (
          <span className="px-1.5 py-0.5 rounded bg-blue-500/25 text-blue-300 text-[10px] font-mono">
            College Year {data.collegeYearNumber}
          </span>
        )}
      </div>

      {/* Metric Breakdown */}
      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
            529 Balance:
          </span>
          <span className="font-mono font-bold text-white text-[11px]">
            {formatCurrency(data.balance)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#ef4444] inline-block" />
            {data.isCollegeYear ? 'Target 4-Yr Cost:' : 'Projected 4-Yr Cost:'}
          </span>
          <span className="font-mono font-bold text-white text-[11px]">
            {formatCurrency(data.collegeCost)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-400 text-[10px] pl-3.5">
            College Expenses:
          </span>
          <span className="font-mono text-zinc-300 text-[10px]">
            {data.annualExpense > 0
              ? `${formatCurrency(data.annualExpense)} / yr`
              : '$0 (Pre-College)'}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 pt-1.5 border-t border-white/10">
          <span className="text-zinc-300 text-[11px] font-medium">
            Funding Gap:
          </span>
          <span
            className={`font-mono font-bold text-[11px] ${
              isShortfall ? 'text-red-400' : 'text-emerald-400'
            }`}
          >
            {isShortfall ? formatCurrency(data.shortfall) : 'Fully Funded ($0)'}
          </span>
        </div>
      </div>
    </div>
  );
}
