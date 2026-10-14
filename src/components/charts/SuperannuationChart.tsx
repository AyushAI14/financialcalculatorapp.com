import React, { useState, useEffect, useRef } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from 'recharts';
import type { SuperTrajectoryEntry } from '../../lib/math/retirement';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface SuperannuationChartProps {
  initialTrajectory?: SuperTrajectoryEntry[];
  initialFinalBalance?: number;
  initialBaselineBalance?: number;
  initialSacrificeBonus?: number;
  initialTotalEmployerPaid?: number;
  initialRetireAge?: number;
}

export default function SuperannuationChart({
  initialTrajectory = [],
  initialFinalBalance = 0,
  initialBaselineBalance = 0,
  initialSacrificeBonus = 0,
  initialTotalEmployerPaid = 0,
  initialRetireAge = 67
}: SuperannuationChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trajectory, setTrajectory] = useState<SuperTrajectoryEntry[]>(initialTrajectory);
  const [finalBalance, setFinalBalance] = useState<number>(initialFinalBalance);
  const [baselineBalance, setBaselineBalance] = useState<number>(initialBaselineBalance);
  const [sacrificeBonus, setSacrificeBonus] = useState<number>(initialSacrificeBonus);
  const [totalEmployerPaid, setTotalEmployerPaid] = useState<number>(initialTotalEmployerPaid);
  const [retireAge, setRetireAge] = useState<number>(initialRetireAge);
  const [viewMode, setViewMode] = useState<'breakdown' | 'sacrifice'>('breakdown');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

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
      filename: `superannuation-projection-chart.png`
    });
    setIsDownloading(false);
  };

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

  useEffect(() => {
    const handleUpdate = (
      e: CustomEvent<{
        trajectory: SuperTrajectoryEntry[];
        finalBalance: number;
        baselineBalance: number;
        sacrificeBonus: number;
        totalEmployerPaid: number;
        retireAge: number;
      }>
    ) => {
      if (e.detail?.trajectory) {
        setTrajectory(e.detail.trajectory);
      }
      if (e.detail?.finalBalance !== undefined) {
        setFinalBalance(e.detail.finalBalance);
      }
      if (e.detail?.baselineBalance !== undefined) {
        setBaselineBalance(e.detail.baselineBalance);
      }
      if (e.detail?.sacrificeBonus !== undefined) {
        setSacrificeBonus(e.detail.sacrificeBonus);
      }
      if (e.detail?.totalEmployerPaid !== undefined) {
        setTotalEmployerPaid(e.detail.totalEmployerPaid);
      }
      if (e.detail?.retireAge !== undefined) {
        setRetireAge(e.detail.retireAge);
      }
    };

    window.addEventListener('super-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('super-data-updated' as any, handleUpdate);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading superannuation projection chart...
        </div>
      </div>
    );
  }

  const asfaSingle = 595000;
  const asfaCouple = 690000;

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? 'fixed inset-0 z-50 bg-canvas/98 backdrop-blur-md p-4 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto'
          : 'bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full space-y-4'
      }
    >
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline pb-3">
        <div>
          <h4 className="text-xs font-mono text-mute uppercase tracking-wider font-semibold">
            {viewMode === 'breakdown'
              ? 'Super Balance Accumulation & Breakdown'
              : 'Salary Sacrifice Boost Comparison'}
          </h4>
          <p className="text-[11px] text-body mt-0.5">
            {viewMode === 'breakdown'
              ? 'Starting principal, employer SG, voluntary salary sacrifice, and compound investment earnings'
              : 'Growth path with salary sacrifice vs. standard employer contributions only'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* ASFA Badge */}
          {finalBalance >= asfaCouple ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ASFA Couple Goal Met!
            </span>
          ) : finalBalance >= asfaSingle ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ASFA Single Goal Met!
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              Below ASFA Comfortable
            </span>
          )}

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-md p-0.5 bg-canvas-soft border border-hairline">
            <button
              type="button"
              onClick={() => setViewMode('breakdown')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'breakdown'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Breakdown
            </button>
            <button
              type="button"
              onClick={() => setViewMode('sacrifice')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'sacrifice'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Sacrifice Impact
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

      {/* Chart Canvas */}
      <div className={isFullscreen ? 'flex-1 w-full min-h-[480px] sm:min-h-[580px] my-2 relative' : 'h-80 w-full relative'}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={trajectory}
            margin={{ top: 15, right: 12, left: -10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="superEmeraldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="superPurpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="superBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="superSlateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64748b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#64748b" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? '#334155' : '#e2e8f0'}
              vertical={false}
            />

            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={{ stroke: isDark ? '#334155' : '#cbd5e1' }}
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11, fontFamily: 'monospace' }}
            />

            <YAxis
              tickLine={false}
              axisLine={{ stroke: isDark ? '#334155' : '#cbd5e1' }}
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11, fontFamily: 'monospace' }}
              tickFormatter={formatCurrencyTick}
              domain={['auto', 'auto']}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload.length) return null;
                const d = payload[0].payload as SuperTrajectoryEntry;

                return (
                  <div className="bg-paper border border-hairline rounded-lg shadow-xl p-3 text-xs font-mono min-w-[230px]">
                    <div className="font-semibold text-ink border-b border-hairline pb-1.5 mb-2 flex items-center justify-between">
                      <span>Age {d.age}</span>
                      <span className="text-[10px] text-mute">{d.year === 0 ? 'Starting' : `+${d.year} yrs`}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-ink">Total Balance:</span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                          {formatCurrency(d.totalBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                          Compound Earnings:
                        </span>
                        <span className="text-ink">{formatCurrency(d.compoundGrowth)}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
                          <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                          Salary Sacrifice:
                        </span>
                        <span className="text-ink">{formatCurrency(d.cumSacrificeContrib)}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                          Employer SG (Net):
                        </span>
                        <span className="text-ink">{formatCurrency(d.cumEmployerContrib)}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-slate-500 inline-block" />
                          Starting Principal:
                        </span>
                        <span className="text-ink">{formatCurrency(d.startingBalance)}</span>
                      </div>
                      <div className="pt-1.5 border-t border-hairline flex items-center justify-between text-[10px] text-mute">
                        <span>Without Sacrifice:</span>
                        <span>{formatCurrency(d.baselineBalance)}</span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            {/* ASFA Benchmark Reference Lines */}
            <ReferenceLine
              y={asfaSingle}
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              label={{
                value: `ASFA Single: ${formatCurrency(asfaSingle)}`,
                position: 'insideBottomLeft',
                fill: isDark ? '#fbbf24' : '#d97706',
                fontSize: 9,
                fontFamily: 'monospace'
              }}
            />
            <ReferenceLine
              y={asfaCouple}
              stroke="#10b981"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              label={{
                value: `ASFA Couple: ${formatCurrency(asfaCouple)}`,
                position: 'insideTopLeft',
                fill: isDark ? '#34d399' : '#059669',
                fontSize: 9,
                fontFamily: 'monospace'
              }}
            />

            {/* Retirement Age Reference Line */}
            <ReferenceLine
              x={`Age ${retireAge}`}
              stroke="#3b82f6"
              strokeWidth={2}
              label={{
                value: `Retirement (Age ${retireAge})`,
                position: 'insideTopRight',
                fill: isDark ? '#60a5fa' : '#2563eb',
                fontSize: 10,
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            />

            {viewMode === 'breakdown' ? (
              <>
                <Area
                  type="monotone"
                  dataKey="startingBalance"
                  stackId="superStack"
                  name="Starting Balance"
                  stroke="#64748b"
                  fill="url(#superSlateGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="cumEmployerContrib"
                  stackId="superStack"
                  name="Employer SG"
                  stroke="#3b82f6"
                  fill="url(#superBlueGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="cumSacrificeContrib"
                  stackId="superStack"
                  name="Salary Sacrifice"
                  stroke="#8b5cf6"
                  fill="url(#superPurpleGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="compoundGrowth"
                  stackId="superStack"
                  name="Compound Earnings"
                  stroke="#10b981"
                  fill="url(#superEmeraldGradient)"
                />
              </>
            ) : (
              <>
                <Area
                  type="monotone"
                  dataKey="totalBalance"
                  name="With Salary Sacrifice"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fill="url(#superEmeraldGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="baselineBalance"
                  name="Employer Contributions Only"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 5, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
                />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-2 border-t border-hairline text-mute">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" />
            Compound Earnings
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-purple-500 inline-block" />
            Salary Sacrifice
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
            Employer SG
          </span>
        </div>

        <div className="flex items-center gap-3">
          {viewMode === 'sacrifice' ? (
            <span>Base: <strong className="text-ink">{formatCurrency(baselineBalance)}</strong></span>
          ) : (
            <span>Employer Paid: <strong className="text-ink">{formatCurrency(totalEmployerPaid)}</strong></span>
          )}
          <span>End Balance: <strong className="text-ink">{formatCurrency(finalBalance)}</strong></span>
          {sacrificeBonus > 0 && (
            <span>Sacrifice Boost: <strong className="text-emerald-600 dark:text-emerald-400">+{formatCurrency(sacrificeBonus)}</strong></span>
          )}
        </div>
      </div>
    </div>
  );
}
