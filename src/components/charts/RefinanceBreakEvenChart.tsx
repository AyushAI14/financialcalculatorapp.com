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
  ReferenceLine
} from 'recharts';
import type { RefinanceTrajectoryEntry } from '../../lib/math/loan';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface RefinanceBreakEvenChartProps {
  initialTrajectory?: RefinanceTrajectoryEntry[];
  initialBreakEvenMonths?: number | null;
  initialMonthlySavings?: number;
  initialLifetimeSavings?: number;
}

export default function RefinanceBreakEvenChart({
  initialTrajectory = [],
  initialBreakEvenMonths = null,
  initialMonthlySavings = 0,
  initialLifetimeSavings = 0
}: RefinanceBreakEvenChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trajectory, setTrajectory] = useState<RefinanceTrajectoryEntry[]>(initialTrajectory);
  const [breakEvenMonths, setBreakEvenMonths] = useState<number | null>(initialBreakEvenMonths);
  const [monthlySavings, setMonthlySavings] = useState<number>(initialMonthlySavings);
  const [lifetimeSavings, setLifetimeSavings] = useState<number>(initialLifetimeSavings);
  const [viewMode, setViewMode] = useState<'breakeven' | 'balance'>('breakeven');
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
      filename: `refinance-breakeven-chart.png`
    });
    setIsDownloading(false);
  };

  // Sync theme
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

  // Listen for calculation updates
  useEffect(() => {
    const handleUpdate = (
      e: CustomEvent<{
        trajectory: RefinanceTrajectoryEntry[];
        breakEvenMonths: number | null;
        monthlySavings: number;
        lifetimeSavings: number;
      }>
    ) => {
      if (e.detail?.trajectory) {
        setTrajectory(e.detail.trajectory);
      }
      if (e.detail?.breakEvenMonths !== undefined) {
        setBreakEvenMonths(e.detail.breakEvenMonths);
      }
      if (e.detail?.monthlySavings !== undefined) {
        setMonthlySavings(e.detail.monthlySavings);
      }
      if (e.detail?.lifetimeSavings !== undefined) {
        setLifetimeSavings(e.detail.lifetimeSavings);
      }
    };

    window.addEventListener('refinance-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('refinance-data-updated' as any, handleUpdate);
    };
  }, []);

  const breakEvenYear = useMemo(() => {
    return breakEvenMonths !== null && breakEvenMonths > 0 ? parseFloat((breakEvenMonths / 12).toFixed(1)) : null;
  }, [breakEvenMonths]);

  const hasSavings = monthlySavings > 0;
  const isBreakEvenFinite = breakEvenMonths !== null && isFinite(breakEvenMonths) && breakEvenMonths > 0;

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading refinance break-even chart...
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
          : 'bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full space-y-4'
      }
    >
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline pb-3">
        <div>
          <h4 className="text-xs font-mono text-mute uppercase tracking-wider font-semibold">
            {viewMode === 'breakeven' ? 'Break-Even & Cumulative Cost Trajectory' : 'Loan Balance Payoff Comparison'}
          </h4>
          <p className="text-[11px] text-body mt-0.5">
            {viewMode === 'breakeven'
              ? 'Cumulative out-of-pocket spend on current loan vs. new refinance loan with closing costs'
              : 'Principal balance amortization schedules over the respective loan terms'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Status Badge */}
          {isBreakEvenFinite ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Break-Even: {breakEvenMonths.toFixed(1)} mos
            </span>
          ) : breakEvenMonths === 0 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Immediate (No Closing Costs)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              No Savings
            </span>
          )}

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-md p-0.5 bg-canvas-soft border border-hairline">
            <button
              type="button"
              onClick={() => setViewMode('breakeven')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'breakeven'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Break-Even
            </button>
            <button
              type="button"
              onClick={() => setViewMode('balance')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'balance'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Loan Balance
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
              <linearGradient id="refinanceGreenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="currentAmberGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="newBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
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
                const d = payload[0].payload as RefinanceTrajectoryEntry;

                if (viewMode === 'breakeven') {
                  return (
                    <div className="bg-paper border border-hairline rounded-lg shadow-xl p-3 text-xs font-mono min-w-[220px]">
                      <div className="font-semibold text-ink border-b border-hairline pb-1.5 mb-2 flex items-center justify-between">
                        <span>Month {d.month}</span>
                        <span className="text-[10px] text-mute">{d.label}</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                            Current Loan Spent:
                          </span>
                          <span className="font-semibold text-ink">
                            {formatCurrency(d.currentCumulativeCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                            Refinanced Spent:
                          </span>
                          <span className="font-semibold text-ink">
                            {formatCurrency(d.newCumulativeCost)}
                          </span>
                        </div>
                        <div className="pt-1.5 border-t border-hairline flex items-center justify-between font-semibold">
                          <span className="text-body">Cumulative Net:</span>
                          <span className={d.netCumulativeSavings >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}>
                            {d.netCumulativeSavings >= 0 ? '+' : ''}{formatCurrency(d.netCumulativeSavings)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="bg-paper border border-hairline rounded-lg shadow-xl p-3 text-xs font-mono min-w-[220px]">
                    <div className="font-semibold text-ink border-b border-hairline pb-1.5 mb-2 flex items-center justify-between">
                      <span>Month {d.month}</span>
                      <span className="text-[10px] text-mute">{d.label}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                          Current Balance:
                        </span>
                        <span className="font-semibold text-ink">
                          {formatCurrency(d.currentBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                          Refinanced Balance:
                        </span>
                        <span className="font-semibold text-ink">
                          {formatCurrency(d.newBalance)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            {/* Break-even marker in breakeven view */}
            {viewMode === 'breakeven' && isBreakEvenFinite && breakEvenYear !== null && (
              <ReferenceLine
                x={`Yr ${breakEvenYear}`}
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="4 4"
                label={{
                  value: `★ Break-Even (${breakEvenMonths.toFixed(1)} mo)`,
                  position: 'insideTopRight',
                  fill: isDark ? '#34d399' : '#059669',
                  fontSize: 10,
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}
              />
            )}

            {viewMode === 'breakeven' ? (
              <>
                <Area
                  type="monotone"
                  dataKey="newCumulativeCost"
                  name="Refinanced Loan Spent"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fill="url(#refinanceGreenGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="currentCumulativeCost"
                  name="Current Loan Spent"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 5, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
                />
              </>
            ) : (
              <>
                <Area
                  type="monotone"
                  dataKey="newBalance"
                  name="Refinanced Balance"
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  fill="url(#newBlueGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="currentBalance"
                  name="Current Balance"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 5, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
                />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Legend & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-2 border-t border-hairline text-mute">
        <div className="flex items-center gap-4">
          {viewMode === 'breakeven' ? (
            <>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-amber-500 inline-block" />
                Current Loan Spent
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-emerald-500 inline-block" />
                Refinanced Loan Spent
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-amber-500 inline-block" />
                Current Balance
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-blue-500 inline-block" />
                Refinanced Balance
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span>Monthly: <strong className={hasSavings ? 'text-emerald-600 dark:text-emerald-400' : 'text-ink'}>{formatCurrency(monthlySavings)}/mo</strong></span>
          <span>Lifetime: <strong className={lifetimeSavings >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}>{formatCurrency(lifetimeSavings)}</strong></span>
        </div>
      </div>
    </div>
  );
}
