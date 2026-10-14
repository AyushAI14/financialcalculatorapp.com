import React, { useState, useEffect, useRef } from 'react';
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
import type { FireTrajectoryEntry } from '../../lib/math/retirement';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface FireProjectionChartProps {
  initialTrajectory?: FireTrajectoryEntry[];
  initialFireGoal?: number;
  initialLeanGoal?: number;
  initialFatGoal?: number;
  initialYearsToFire?: number;
  initialFireAge?: number;
  initialFundedPct?: number;
}

export default function FireProjectionChart({
  initialTrajectory = [],
  initialFireGoal = 0,
  initialLeanGoal = 0,
  initialFatGoal = 0,
  initialYearsToFire = 0,
  initialFireAge = 0,
  initialFundedPct = 0
}: FireProjectionChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trajectory, setTrajectory] = useState<FireTrajectoryEntry[]>(initialTrajectory);
  const [fireGoal, setFireGoal] = useState<number>(initialFireGoal);
  const [leanGoal, setLeanGoal] = useState<number>(initialLeanGoal);
  const [fatGoal, setFatGoal] = useState<number>(initialFatGoal);
  const [yearsToFire, setYearsToFire] = useState<number>(initialYearsToFire);
  const [fireAge, setFireAge] = useState<number>(initialFireAge);
  const [fundedPct, setFundedPct] = useState<number>(initialFundedPct);
  const [viewMode, setViewMode] = useState<'networth' | 'passiveIncome'>('networth');
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
      filename: `fire-projection-chart.png`
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
        trajectory: FireTrajectoryEntry[];
        fireGoal: number;
        leanGoal: number;
        fatGoal: number;
        yearsToFire: number;
        fireAge: number;
        fundedPct: number;
      }>
    ) => {
      if (e.detail?.trajectory) {
        setTrajectory(e.detail.trajectory);
      }
      if (e.detail?.fireGoal !== undefined) {
        setFireGoal(e.detail.fireGoal);
      }
      if (e.detail?.leanGoal !== undefined) {
        setLeanGoal(e.detail.leanGoal);
      }
      if (e.detail?.fatGoal !== undefined) {
        setFatGoal(e.detail.fatGoal);
      }
      if (e.detail?.yearsToFire !== undefined) {
        setYearsToFire(e.detail.yearsToFire);
      }
      if (e.detail?.fireAge !== undefined) {
        setFireAge(e.detail.fireAge);
      }
      if (e.detail?.fundedPct !== undefined) {
        setFundedPct(e.detail.fundedPct);
      }
    };

    window.addEventListener('fire-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('fire-data-updated' as any, handleUpdate);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading FIRE projection chart...
        </div>
      </div>
    );
  }

  const fireAgeRounded = Math.round(fireAge);

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
            {viewMode === 'networth'
              ? 'FIRE Net Worth Accumulation & Milestone Journey'
              : 'Safe Withdrawal Passive Income Runway'}
          </h4>
          <p className="text-[11px] text-body mt-0.5">
            {viewMode === 'networth'
              ? 'Portfolio accumulation curve crossing Lean FIRE, Standard FIRE, and Fat FIRE thresholds'
              : 'Annual sustainable passive income generated under selected safe withdrawal rate'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Milestone Badge */}
          {yearsToFire <= 0 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              FIRE Achieved! (100% Funded)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              FIRE at Age {fireAge.toFixed(1)} ({yearsToFire.toFixed(1)} yrs)
            </span>
          )}

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-md p-0.5 bg-canvas-soft border border-hairline">
            <button
              type="button"
              onClick={() => setViewMode('networth')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'networth'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Net Worth
            </button>
            <button
              type="button"
              onClick={() => setViewMode('passiveIncome')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'passiveIncome'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Passive Income
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
              <linearGradient id="fireEmeraldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="fireBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
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
                const d = payload[0].payload as FireTrajectoryEntry;
                const goalPct = fireGoal > 0 ? ((d.netWorth / fireGoal) * 100).toFixed(1) : '0';

                return (
                  <div className="bg-paper border border-hairline rounded-lg shadow-xl p-3 text-xs font-mono min-w-[220px]">
                    <div className="font-semibold text-ink border-b border-hairline pb-1.5 mb-2 flex items-center justify-between">
                      <span>Age {d.age}</span>
                      <span className="text-[10px] text-mute">{d.year === 0 ? 'Current' : `+${d.year} yrs`}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                          Invested Net Worth:
                        </span>
                        <span className="font-semibold text-ink">
                          {formatCurrency(d.netWorth)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-mute">
                        <span>FIRE Goal Progress:</span>
                        <span className="font-semibold text-ink">{goalPct}%</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-blue-600 dark:text-blue-400">Passive Income:</span>
                        <span className="font-semibold text-ink">{formatCurrency(d.passiveIncome)}/yr</span>
                      </div>
                      <div className="pt-1.5 border-t border-hairline flex items-center justify-between text-[10px] text-mute">
                        <span>Standard Target:</span>
                        <span>{formatCurrency(d.fireTarget)}</span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            {/* Target lines in net worth mode */}
            {viewMode === 'networth' && fireGoal > 0 && (
              <>
                <ReferenceLine
                  y={fireGoal}
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  label={{
                    value: `FIRE: ${formatCurrency(fireGoal)}`,
                    position: 'insideTopLeft',
                    fill: isDark ? '#34d399' : '#059669',
                    fontSize: 10,
                    fontFamily: 'monospace',
                    fontWeight: 600
                  }}
                />
                <ReferenceLine
                  y={leanGoal}
                  stroke="#f59e0b"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  label={{
                    value: `Lean: ${formatCurrency(leanGoal)}`,
                    position: 'insideBottomLeft',
                    fill: isDark ? '#fbbf24' : '#d97706',
                    fontSize: 9,
                    fontFamily: 'monospace'
                  }}
                />
                <ReferenceLine
                  y={fatGoal}
                  stroke="#8b5cf6"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  label={{
                    value: `Fat: ${formatCurrency(fatGoal)}`,
                    position: 'insideTopRight',
                    fill: isDark ? '#a78bfa' : '#7c3aed',
                    fontSize: 9,
                    fontFamily: 'monospace'
                  }}
                />
              </>
            )}

            {/* Vertical milestone line at FIRE Age */}
            {yearsToFire > 0 && fireAgeRounded > 0 && (
              <ReferenceLine
                x={`Age ${fireAgeRounded}`}
                stroke="#10b981"
                strokeWidth={2}
                label={{
                  value: `★ FIRE (Age ${fireAge.toFixed(1)})`,
                  position: 'insideTopRight',
                  fill: isDark ? '#34d399' : '#059669',
                  fontSize: 10,
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}
              />
            )}

            {viewMode === 'networth' ? (
              <Area
                type="monotone"
                dataKey="netWorth"
                name="Invested Net Worth"
                stroke="#10b981"
                strokeWidth={2.5}
                fill="url(#fireEmeraldGradient)"
                dot={false}
                activeDot={{ r: 5, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
              />
            ) : (
              <Area
                type="monotone"
                dataKey="passiveIncome"
                name="Annual Passive Income"
                stroke="#3b82f6"
                strokeWidth={2.5}
                fill="url(#fireBlueGradient)"
                dot={false}
                activeDot={{ r: 5, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-2 border-t border-hairline text-mute">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-emerald-500 inline-block" />
            Standard FIRE
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-amber-500 inline-block" />
            Lean FIRE (80%)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-purple-500 inline-block" />
            Fat FIRE (150%)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>Target: <strong className="text-ink">{formatCurrency(fireGoal)}</strong></span>
          <span>Funded: <strong className="text-emerald-600 dark:text-emerald-400">{fundedPct.toFixed(1)}%</strong></span>
        </div>
      </div>
    </div>
  );
}
