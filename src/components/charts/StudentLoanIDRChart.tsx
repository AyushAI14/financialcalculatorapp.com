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
import type { StudentLoanTrajectoryEntry } from '../../lib/math/loan';
import { formatCurrency, formatCurrencyTick } from '../../lib/utils';
import { downloadChartAsPng } from '../../lib/chart-export';
import ChartHeaderActions from './ChartHeaderActions';

interface StudentLoanIDRChartProps {
  initialTrajectory?: StudentLoanTrajectoryEntry[];
  initialForgivenessYears?: number;
  initialTotalIdrPaid?: number;
  initialTotalStandardPaid?: number;
  initialForgivenAmount?: number;
  initialSavingsVsStandard?: number;
  initialPlan?: string;
}

export default function StudentLoanIDRChart({
  initialTrajectory = [],
  initialForgivenessYears = 20,
  initialTotalIdrPaid = 0,
  initialTotalStandardPaid = 0,
  initialForgivenAmount = 0,
  initialSavingsVsStandard = 0,
  initialPlan = 'SAVE'
}: StudentLoanIDRChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trajectory, setTrajectory] = useState<StudentLoanTrajectoryEntry[]>(initialTrajectory);
  const [forgivenessYears, setForgivenessYears] = useState<number>(initialForgivenessYears);
  const [totalIdrPaid, setTotalIdrPaid] = useState<number>(initialTotalIdrPaid);
  const [totalStandardPaid, setTotalStandardPaid] = useState<number>(initialTotalStandardPaid);
  const [forgivenAmount, setForgivenAmount] = useState<number>(initialForgivenAmount);
  const [savingsVsStandard, setSavingsVsStandard] = useState<number>(initialSavingsVsStandard);
  const [plan, setPlan] = useState<string>(initialPlan);
  const [viewMode, setViewMode] = useState<'balance' | 'cumulative'>('balance');
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
      filename: `student-loan-idr-${plan.toLowerCase()}-chart.png`
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
        trajectory: StudentLoanTrajectoryEntry[];
        forgivenessYears: number;
        totalIdrPaid: number;
        totalStandardPaid: number;
        forgivenAmount: number;
        savingsVsStandard: number;
        plan?: string;
      }>
    ) => {
      if (e.detail?.trajectory) {
        setTrajectory(e.detail.trajectory);
      }
      if (e.detail?.forgivenessYears !== undefined) {
        setForgivenessYears(e.detail.forgivenessYears);
      }
      if (e.detail?.totalIdrPaid !== undefined) {
        setTotalIdrPaid(e.detail.totalIdrPaid);
      }
      if (e.detail?.totalStandardPaid !== undefined) {
        setTotalStandardPaid(e.detail.totalStandardPaid);
      }
      if (e.detail?.forgivenAmount !== undefined) {
        setForgivenAmount(e.detail.forgivenAmount);
      }
      if (e.detail?.savingsVsStandard !== undefined) {
        setSavingsVsStandard(e.detail.savingsVsStandard);
      }
      if (e.detail?.plan !== undefined) {
        setPlan(e.detail.plan);
      }
    };

    window.addEventListener('student-loan-data-updated' as any, handleUpdate);
    return () => {
      window.removeEventListener('student-loan-data-updated' as any, handleUpdate);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-canvas border border-hairline rounded-lg p-5 shadow-sm w-full">
        <div className="h-80 w-full animate-pulse bg-canvas-soft rounded flex items-center justify-center text-xs font-mono text-mute">
          Loading student loan trajectory chart...
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
            {viewMode === 'balance'
              ? `${plan} Repayment & Loan Forgiveness Timeline`
              : 'Cumulative Out-of-Pocket Payments'}
          </h4>
          <p className="text-[11px] text-body mt-0.5">
            {viewMode === 'balance'
              ? `Projected balance path over ${forgivenessYears} years until tax-free federal forgiveness`
              : 'Total cash paid over time under IDR vs. standard 10-year repayment'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Forgiveness Badge */}
          {forgivenAmount > 0 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Est. Forgiven: {formatCurrency(forgivenAmount)}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Paid Off Before Forgiveness
            </span>
          )}

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-md p-0.5 bg-canvas-soft border border-hairline">
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
            <button
              type="button"
              onClick={() => setViewMode('cumulative')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                viewMode === 'cumulative'
                  ? 'bg-paper text-ink shadow-xs'
                  : 'text-mute hover:text-ink'
              }`}
            >
              Total Paid
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
              <linearGradient id="idrIndigoGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="idrEmeraldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
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
                const d = payload[0].payload as StudentLoanTrajectoryEntry;

                return (
                  <div className="bg-paper border border-hairline rounded-lg shadow-xl p-3 text-xs font-mono min-w-[220px]">
                    <div className="font-semibold text-ink border-b border-hairline pb-1.5 mb-2 flex items-center justify-between">
                      <span>{d.year === 0 ? 'Initial Loan' : `Year ${d.year}`}</span>
                      {d.isForgiven && (
                        <span className="text-[10px] text-indigo-500 font-bold uppercase">Forgiven</span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                          {plan} Balance:
                        </span>
                        <span className="font-semibold text-ink">
                          {formatCurrency(d.idrBalance)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                          Cumulative Paid:
                        </span>
                        <span className="font-semibold text-ink">
                          {formatCurrency(d.idrCumulativePaid)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-mute">
                        <span>Monthly PMT:</span>
                        <span>{formatCurrency(d.idrMonthlyPayment)}/mo</span>
                      </div>
                      <div className="pt-1.5 border-t border-hairline flex items-center justify-between">
                        <span className="text-amber-600 dark:text-amber-400">Standard 10-Yr Balance:</span>
                        <span className="font-semibold text-ink">{formatCurrency(d.standardBalance)}</span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            {/* Standard 10-Year marker */}
            <ReferenceLine
              x="Yr 10"
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              label={{
                value: '10y Standard Payoff',
                position: 'insideTopLeft',
                fill: isDark ? '#fbbf24' : '#d97706',
                fontSize: 10,
                fontFamily: 'monospace'
              }}
            />

            {/* Forgiveness Reference Line */}
            <ReferenceLine
              x={`Yr ${forgivenessYears}`}
              stroke="#6366f1"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                value: `★ ${forgivenessYears}y Forgiveness`,
                position: 'insideTopRight',
                fill: isDark ? '#818cf8' : '#4f46e5',
                fontSize: 10,
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            />

            {viewMode === 'balance' ? (
              <>
                <Area
                  type="monotone"
                  dataKey="idrBalance"
                  name={`${plan} Balance`}
                  stroke="#6366f1"
                  strokeWidth={2.5}
                  fill="url(#idrIndigoGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="standardBalance"
                  name="Standard 10-Yr Balance"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 5, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
                />
              </>
            ) : (
              <>
                <Area
                  type="monotone"
                  dataKey="idrCumulativePaid"
                  name="Total IDR Paid"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fill="url(#idrEmeraldGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="standardCumulativePaid"
                  name="Standard 10-Yr Total Paid"
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
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-indigo-500 inline-block" />
            {viewMode === 'balance' ? `${plan} Balance` : 'IDR Total Paid'}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-amber-500 inline-block" />
            Standard 10-Yr
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>Total IDR Paid: <strong className="text-ink">{formatCurrency(totalIdrPaid)}</strong></span>
          <span>Std 10y Paid: <strong className="text-ink">{formatCurrency(totalStandardPaid)}</strong></span>
          {savingsVsStandard > 0 && (
            <span>IDR Savings: <strong className="text-emerald-600 dark:text-emerald-400">{formatCurrency(savingsVsStandard)}</strong></span>
          )}
        </div>
      </div>
    </div>
  );
}
