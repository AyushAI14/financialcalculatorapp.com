import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import type { CompoundInterestEntry, CompoundingComparisonEntry } from '../../lib/math/finance';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface CompoundInterestChartProps {
  initialSchedule?: CompoundInterestEntry[];
  initialComparison?: CompoundingComparisonEntry[];
  initialCompoundingFrequency?: number;
  title?: string;
  subtitle?: string;
}

export default function CompoundInterestChart({
  initialSchedule = [],
  initialComparison = [],
  initialCompoundingFrequency = 12,
  title = "Compound Interest Growth Chart",
  subtitle = "Cumulative deposits vs. exponential compound returns over your investment horizon"
}: CompoundInterestChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [schedule, setSchedule] = useState<CompoundInterestEntry[]>(initialSchedule);
  const [comparison, setComparison] = useState<CompoundingComparisonEntry[]>(initialComparison);
  const [activeFrequency, setActiveFrequency] = useState<number>(initialCompoundingFrequency);
  const [viewMode, setViewMode] = useState<'breakdown' | 'comparison'>('breakdown');
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
      filename: `compound-interest-growth-chart.png`
    });
    setIsDownloading(false);
  };

  // Theme observer for light/dark mode
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

  // Listen for calculation updates from input/slider changes
  useEffect(() => {
    const handleUpdate = (
      e: CustomEvent<{
        schedule: CompoundInterestEntry[];
        comparison: CompoundingComparisonEntry[];
        compoundingFrequency: number;
      }>
    ) => {
      if (e.detail?.schedule) {
        setSchedule(e.detail.schedule);
      }
      if (e.detail?.comparison) {
        setComparison(e.detail.comparison);
      }
      if (e.detail?.compoundingFrequency !== undefined) {
        setActiveFrequency(e.detail.compoundingFrequency);
      }
    };

    window.addEventListener('compound-interest-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('compound-interest-data-updated' as any, handleUpdate);
    };
  }, []);

  // Frequency change handler: notifies parent page to update select & recalculate
  const handleFrequencyChange = (freq: number) => {
    setActiveFrequency(freq);
    window.dispatchEvent(
      new CustomEvent('compound-frequency-changed', {
        detail: { frequency: freq }
      })
    );
  };

  const currentYear = new Date().getFullYear();

  // Mapped breakdown data with date labels
  const breakdownData = useMemo(() => {
    return schedule.map((item) => {
      const yearNum = item.year;
      const dateLabel = yearNum === 0 ? 'Today' : `${currentYear + yearNum} (Yr ${yearNum})`;
      return {
        ...item,
        dateLabel,
        axisLabel: yearNum === 0 ? 'Yr 0' : `Yr ${yearNum}`,
        // For stacked areas: bottom is totalContributions, top is totalInterest
        deposits: Math.round(item.totalContributions * 100) / 100,
        interest: Math.round(item.totalInterest * 100) / 100,
        totalBalance: Math.round(item.endingBalance * 100) / 100
      };
    });
  }, [schedule, currentYear]);

  // Mapped comparison data
  const comparisonData = useMemo(() => {
    return comparison.map((item) => ({
      ...item,
      axisLabel: item.year === 0 ? 'Yr 0' : `Yr ${item.year}`
    }));
  }, [comparison]);

  // Summary statistics for display in header
  const latestEntry = breakdownData[breakdownData.length - 1];
  const latestComparison = comparisonData[comparisonData.length - 1];

  const totalBalanceDisplay = latestEntry ? formatCurrency(latestEntry.totalBalance) : '--';
  const totalInterestDisplay = latestEntry ? formatCurrency(latestEntry.interest) : '--';
  const interestPercentage =
    latestEntry && latestEntry.totalBalance > 0
      ? ((latestEntry.interest / latestEntry.totalBalance) * 100).toFixed(1)
      : '0.0';

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h4 className="text-xs font-mono text-mute uppercase tracking-wider">
            {title}
          </h4>
        </div>
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading growth projection...
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
      {/* Top Header: Title, Quick View Switcher & Compounding Pill Toggles */}
      <div className="flex flex-col gap-3 mb-4 border-b border-hairline pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-xs font-mono text-mute uppercase tracking-wider">
              {title}
            </h4>
            <p className="text-[11px] text-body mt-0.5">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            {/* View Mode Toggle: Breakdown vs Compounding Comparison */}
            <div className="flex items-center gap-1 bg-canvas-soft p-1 rounded-full border border-hairline no-print">
              <button
                type="button"
                onClick={() => setViewMode('breakdown')}
                className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-full transition-all cursor-pointer ${
                  viewMode === 'breakdown'
                    ? 'bg-ink text-canvas shadow-xs'
                    : 'text-muted hover:text-ink'
                }`}
              >
                Deposits vs Interest
              </button>
              <button
                type="button"
                onClick={() => setViewMode('comparison')}
                className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-full transition-all cursor-pointer ${
                  viewMode === 'comparison'
                    ? 'bg-ink text-canvas shadow-xs'
                    : 'text-muted hover:text-ink'
                }`}
              >
                Compare Compounding
              </button>
            </div>

            {/* Zoom Fullscreen & Download Actions */}
            <ChartHeaderActions
              isFullscreen={isFullscreen}
              onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
              onDownload={handleDownload}
              isDownloading={isDownloading}
            />
          </div>
        </div>

        {/* Compounding Convention Selector Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5 no-print">
            <span className="text-[10px] font-mono text-muted uppercase">Compounding:</span>
            <button
              type="button"
              onClick={() => handleFrequencyChange(365)}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                activeFrequency === 365
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'bg-canvas-soft hover:bg-canvas-soft-2 text-muted border-hairline'
              }`}
              title="365-day exact daily compounding"
            >
              Daily (365d)
            </button>
            <button
              type="button"
              onClick={() => handleFrequencyChange(12)}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                activeFrequency === 12
                  ? 'bg-blue-500/15 border-blue-500 text-blue-600 dark:text-blue-400 font-bold'
                  : 'bg-canvas-soft hover:bg-canvas-soft-2 text-muted border-hairline'
              }`}
              title="12 monthly compounding periods per year"
            >
              Monthly (12x)
            </button>
            <button
              type="button"
              onClick={() => handleFrequencyChange(1)}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                activeFrequency === 1
                  ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'bg-canvas-soft hover:bg-canvas-soft-2 text-muted border-hairline'
              }`}
              title="1 annual compounding period per year"
            >
              Annual (1x)
            </button>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-2 text-[11px] font-mono">
            {viewMode === 'breakdown' ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="font-bold">{interestPercentage}%</span> from Interest
              </span>
            ) : latestComparison ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-ink/10 text-ink border border-hairline">
                Daily Edge: +{formatCurrency(Math.max(0, latestComparison.dailyBalance - latestComparison.annualBalance))}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Recharts Canvas */}
      <div className={isFullscreen ? 'flex-1 w-full min-h-[480px] sm:min-h-[580px] my-2 relative' : 'h-80 w-full relative'}>
        <ResponsiveContainer width="100%" height="100%">
          {viewMode === 'breakdown' ? (
            /* 1. Stacked Breakdown View: Principal vs Interest */
            <ComposedChart
              data={breakdownData}
              margin={{ top: 12, right: 12, left: -10, bottom: 5 }}
            >
              <defs>
                {/* Interest Green Gradient */}
                <linearGradient id="interestGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.08} />
                </linearGradient>

                {/* Principal Blue Gradient */}
                <linearGradient id="principalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
                vertical={false}
              />

              <XAxis
                dataKey="axisLabel"
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
                content={<BreakdownTooltip />}
                cursor={{
                  stroke: isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(15, 23, 42, 0.35)',
                  strokeDasharray: '4 3',
                  strokeWidth: 1.5
                }}
              />

              {/* Stacked Area: Deposits / Principal (Bottom) */}
              <Area
                type="monotone"
                dataKey="deposits"
                name="Total Principal"
                stackId="growthStack"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#principalGradient)"
                activeDot={{
                  r: 5,
                  stroke: '#ffffff',
                  strokeWidth: 2,
                  fill: '#3b82f6'
                }}
              />

              {/* Stacked Area: Compound Interest Earned (Top) */}
              <Area
                type="monotone"
                dataKey="interest"
                name="Compound Interest"
                stackId="growthStack"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#interestGradient)"
                activeDot={{
                  r: 5,
                  stroke: '#ffffff',
                  strokeWidth: 2,
                  fill: '#10b981'
                }}
              />

              {/* Total Balance Crisp Curve */}
              <Line
                type="monotone"
                dataKey="totalBalance"
                name="Total Portfolio Balance"
                stroke={isDark ? '#f2f2ee' : '#151515'}
                strokeWidth={2.5}
                dot={false}
                activeDot={{
                  r: 6,
                  stroke: '#ffffff',
                  strokeWidth: 2,
                  fill: isDark ? '#f2f2ee' : '#151515'
                }}
              />
            </ComposedChart>
          ) : (
            /* 2. Frequency Comparison View: Daily vs Monthly vs Annual */
            <ComposedChart
              data={comparisonData}
              margin={{ top: 12, right: 12, left: -10, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
                vertical={false}
              />

              <XAxis
                dataKey="axisLabel"
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
                content={<ComparisonTooltip />}
                cursor={{
                  stroke: isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(15, 23, 42, 0.35)',
                  strokeDasharray: '4 3',
                  strokeWidth: 1.5
                }}
              />

              {/* Baseline Deposits Line */}
              <Line
                type="monotone"
                dataKey="totalContributions"
                name="Total Deposits"
                stroke={isDark ? '#6b7280' : '#9ca3af'}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />

              {/* Annual Compounding (Amber) */}
              <Line
                type="monotone"
                dataKey="annualBalance"
                name="Annual Compounding"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 2, fill: '#f59e0b' }}
              />

              {/* Monthly Compounding (Blue) */}
              <Line
                type="monotone"
                dataKey="monthlyBalance"
                name="Monthly Compounding"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 2, fill: '#3b82f6' }}
              />

              {/* Daily Compounding (Emerald) */}
              <Line
                type="monotone"
                dataKey="dailyBalance"
                name="Daily (365d) Compounding"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5.5, stroke: '#ffffff', strokeWidth: 2, fill: '#10b981' }}
              />
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Legend & Summary Info */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-3 mt-2 border-t border-hairline/80 text-[11px] font-mono">
        {viewMode === 'breakdown' ? (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
              <span className="text-ink">Principal / Deposits</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <span className="text-ink">Compound Interest</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-3 border-t-2 border-ink inline-block" />
              <span className="text-ink font-semibold">Total Balance</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <span className="text-ink">Daily (365d)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
              <span className="text-ink">Monthly (12x)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="text-ink">Annual (1x)</span>
            </div>

            <div className="flex items-center gap-1.5 text-muted">
              <span className="w-3 border-t border-dashed border-gray-400 inline-block" />
              <span>Deposits</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 text-muted">
          <span>Interest: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{totalInterestDisplay}</strong></span>
          <span>Balance: <strong className="text-ink font-bold">{totalBalanceDisplay}</strong></span>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Tooltip: Breakdown Mode ───
function BreakdownTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  if (!data) return null;

  const total = data.totalBalance || 0;
  const deposits = data.deposits || 0;
  const interest = data.interest || 0;
  const interestShare = total > 0 ? ((interest / total) * 100).toFixed(1) : '0.0';

  return (
    <div className="bg-[#141414]/95 text-white p-3.5 rounded-lg shadow-xl border border-white/15 text-xs font-sans min-w-[220px] space-y-2.5 pointer-events-none z-50">
      <div className="border-b border-white/10 pb-1.5 flex items-center justify-between">
        <span className="font-mono font-bold text-white text-[11px]">{data.dateLabel}</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
          {interestShare}% Interest
        </span>
      </div>

      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-white inline-block" />
            Total Balance:
          </span>
          <span className="font-mono font-bold text-white text-[11px]">
            {formatCurrency(total)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] inline-block" />
            Total Principal:
          </span>
          <span className="font-mono text-zinc-200 text-[11px]">
            {formatCurrency(deposits)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
            Interest Earned:
          </span>
          <span className="font-mono font-bold text-emerald-400 text-[11px]">
            {formatCurrency(interest)}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Tooltip: Comparison Mode ───
function ComparisonTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload as CompoundingComparisonEntry;
  if (!data) return null;

  const diffDailyVsAnnual = data.dailyBalance - data.annualBalance;

  return (
    <div className="bg-[#141414]/95 text-white p-3.5 rounded-lg shadow-xl border border-white/15 text-xs font-sans min-w-[240px] space-y-2.5 pointer-events-none z-50">
      <div className="border-b border-white/10 pb-1.5 flex items-center justify-between">
        <span className="font-mono font-bold text-white text-[11px]">{data.dateLabel}</span>
        {diffDailyVsAnnual > 0 && (
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
            +{formatCurrency(diffDailyVsAnnual)} Daily Edge
          </span>
        )}
      </div>

      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
            Daily (365d):
          </span>
          <span className="font-mono font-bold text-emerald-400 text-[11px]">
            {formatCurrency(data.dailyBalance)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] inline-block" />
            Monthly (12x):
          </span>
          <span className="font-mono text-zinc-200 text-[11px]">
            {formatCurrency(data.monthlyBalance)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] inline-block" />
            Annual (1x):
          </span>
          <span className="font-mono text-zinc-200 text-[11px]">
            {formatCurrency(data.annualBalance)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 pt-1 border-t border-white/10">
          <span className="text-zinc-400 text-[10px]">
            Total Deposits:
          </span>
          <span className="font-mono text-zinc-300 text-[10px]">
            {formatCurrency(data.totalContributions)}
          </span>
        </div>
      </div>
    </div>
  );
}
