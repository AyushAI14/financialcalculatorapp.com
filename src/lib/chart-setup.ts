import { Chart, registerables } from 'chart.js';
import type { ChartType, TooltipPositionerFunction } from 'chart.js';

declare module 'chart.js' {
  interface TooltipPositionerMap {
    fixedTop: TooltipPositionerFunction<ChartType>;
  }
}

// Standard high-contrast, accessible semantic financial color palette
export const CHART_PALETTE = {
  emerald: '#10b981',     // Growth, wealth, accumulation, net worth assets
  emeraldDark: '#059669',
  blue: '#3b82f6',        // Contributions, principal, base amounts
  sky: '#0ea5e9',         // Secondary metrics, balance curves
  indigo: '#6366f1',      // Out-of-pocket deposits, benchmark comparisons
  purple: '#8b5cf6',      // Employer match, DRIP, tax-free accounts
  amber: '#f59e0b',       // Interest accrued, dividend income, taxes
  rose: '#f43f5e',        // Debts, balances owed, high fees, liabilities
  cyan: '#06b6d4',        // Pre-tax deductions, supplementary series
  pink: '#ec4899',        // Post-tax deductions
} as const;

export function hexToRgba(hexOrRgb: string, alpha = 1): string {
  if (hexOrRgb.startsWith('#')) {
    let hex = hexOrRgb.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (hexOrRgb.startsWith('rgb')) {
    const parts = hexOrRgb
      .replace(/rgba?\(|\)/g, '')
      .split(',')
      .map(p => p.trim());
    return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
  }
  return hexOrRgb;
}

export function isDarkMode(): boolean {
  if (typeof document === 'undefined') return false;
  return (
    document.documentElement.dataset.theme === 'dark' ||
    document.documentElement.classList.contains('dark')
  );
}

// Register all standard Chart.js components (auto registration)
Chart.register(...registerables);

// Register custom fixedTop tooltip positioner for mobile-friendly graphs
try {
  const tooltipPlugin = Chart.registry.getPlugin('tooltip') as any;
  if (tooltipPlugin && tooltipPlugin.positioners) {
    tooltipPlugin.positioners.fixedTop = function(elements: any) {
      if (!elements || !elements.length) return undefined;
      const activePoint = elements[0];
      const x = activePoint.element.x;
      const chart = this.chart;
      
      // Skip custom tooltip positioning for non-cartesian charts
      if (chart.config.type !== 'line' && chart.config.type !== 'bar') {
        return {
          x: activePoint.element.x,
          y: activePoint.element.y
        };
      }
      
      // Fixed top on mobile to avoid thumb occlusion
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        const { top } = chart.chartArea;
        this.options.yAlign = 'top';
        return {
          x: x,
          y: top + 4
        };
      }
      
      // Default nearest behavior for desktop
      this.options.yAlign = undefined;
      return {
        x: x,
        y: activePoint.element.y
      };
    };
  }
} catch (e) {
  console.warn("Could not register fixedTop positioner on Chart registry:", e);
}

// Register global plugins and defaults on client side
if (typeof window !== 'undefined') {
  // 1. Configure crisp, high-contrast global defaults
  
  // Line Chart styling
  if (!Chart.defaults.datasets.line) {
    Chart.defaults.datasets.line = {} as any;
  }
  Chart.defaults.datasets.line.tension = 0.35;
  Chart.defaults.datasets.line.borderWidth = 2.5;
  Chart.defaults.datasets.line.fill = true;
  Chart.defaults.datasets.line.pointRadius = 0;
  Chart.defaults.datasets.line.pointHoverRadius = 6;
  Chart.defaults.datasets.line.pointHoverBackgroundColor = '#10b981';
  Chart.defaults.datasets.line.pointHoverBorderColor = '#ffffff';
  Chart.defaults.datasets.line.pointHoverBorderWidth = 2;
  
  // Dynamic gradient generator with rich, visible fill that does NOT fade away
  Chart.defaults.datasets.line.backgroundColor = (context: any) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) return 'rgba(16, 185, 129, 0.12)';
    
    let borderColor = context.dataset.borderColor || '#10b981';
    let baseColor = '#10b981';
    
    if (typeof borderColor === 'string') {
      baseColor = borderColor;
    } else if (Array.isArray(borderColor) && borderColor.length > 0) {
      baseColor = borderColor[0];
    }
    
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    const bottomAlpha = isDarkMode() ? 0.05 : 0.04;
    const topAlpha = isDarkMode() ? 0.38 : 0.28;
    
    gradient.addColorStop(0, hexToRgba(baseColor, bottomAlpha));
    gradient.addColorStop(1, hexToRgba(baseColor, topAlpha));
    
    return gradient;
  };

  // Bar Chart styling
  if (!Chart.defaults.datasets.bar) {
    Chart.defaults.datasets.bar = {} as any;
  }
  Chart.defaults.datasets.bar.borderRadius = 6;
  Chart.defaults.datasets.bar.maxBarThickness = 48;
  
  // Doughnut Chart styling
  if (!Chart.defaults.datasets.doughnut) {
    Chart.defaults.datasets.doughnut = {} as any;
  }
  Chart.defaults.datasets.doughnut.borderColor = () => isDarkMode() ? '#171717' : '#ffffff';
  Chart.defaults.datasets.doughnut.borderWidth = 2.5;

  // Pie Chart styling
  if (!Chart.defaults.datasets.pie) {
    Chart.defaults.datasets.pie = {} as any;
  }
  Chart.defaults.datasets.pie.borderColor = () => isDarkMode() ? '#171717' : '#ffffff';
  Chart.defaults.datasets.pie.borderWidth = 2.5;

  // Theme-adaptive gridlines and axis labels
  if (Chart.defaults.scale) {
    if (!Chart.defaults.scale.grid) {
      Chart.defaults.scale.grid = {} as any;
    }
    Chart.defaults.scale.grid.color = () => isDarkMode() ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.07)';
    Chart.defaults.scale.grid.tickColor = () => isDarkMode() ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.07)';
    
    if (!Chart.defaults.scale.ticks) {
      Chart.defaults.scale.ticks = {} as any;
    }
    Chart.defaults.scale.ticks.color = () => isDarkMode() ? '#9ca3af' : '#4b5563';
    Chart.defaults.scale.ticks.font = {
      family: 'Geist Mono, monospace',
      size: 10
    };
  }

  // Premium typography & Legend styling
  if (!Chart.defaults.plugins.legend) {
    Chart.defaults.plugins.legend = {} as any;
  }
  if (!Chart.defaults.plugins.legend.labels) {
    Chart.defaults.plugins.legend.labels = {} as any;
  }
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  (Chart.defaults.plugins.legend.labels as any).color = () => isDarkMode() ? '#f2f2ee' : '#151515';
  Chart.defaults.plugins.legend.labels.font = {
    family: 'Geist, sans-serif',
    size: 11,
    weight: 'normal'
  };

  // High contrast tooltip style
  if (!Chart.defaults.plugins.tooltip) {
    Chart.defaults.plugins.tooltip = {} as any;
  }
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(20, 20, 20, 0.95)';
  Chart.defaults.plugins.tooltip.titleColor = '#ffffff';
  Chart.defaults.plugins.tooltip.bodyColor = '#f3f4f6';
  Chart.defaults.plugins.tooltip.titleFont = { family: 'Geist Mono, monospace', size: 11, weight: 'bold' };
  Chart.defaults.plugins.tooltip.bodyFont = { family: 'Geist, sans-serif', size: 11 };
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.15)';

  // 2. Configure interaction defaults for smooth horizontal scrubbing
  Chart.defaults.interaction = {
    mode: 'index',
    intersect: false,
    axis: 'x',
    includeInvisible: false,
  };
  if (Chart.overrides?.line) {
    Chart.overrides.line.interaction = { mode: 'index', intersect: false, axis: 'x', includeInvisible: false };
  }
  if (Chart.overrides?.bar) {
    Chart.overrides.bar.interaction = { mode: 'index', intersect: false, axis: 'x', includeInvisible: false };
  }
  if (Chart.overrides?.doughnut) {
    Chart.overrides.doughnut.interaction = { mode: 'nearest', intersect: true, axis: 'xy', includeInvisible: false };
  }
  if (Chart.overrides?.pie) {
    Chart.overrides.pie.interaction = { mode: 'nearest', intersect: true, axis: 'xy', includeInvisible: false };
  }

  // 3. Register responsive vertical line scrubber plugin
  Chart.register({
    id: 'verticalLineScrubber',
    beforeInit: (chart: any) => {
      if (chart.canvas) {
        chart.canvas.style.touchAction = 'pan-y';

        chart._onTouchStart = () => {
          chart._isInteracting = true;
        };
        chart._onMouseLeave = () => {
          chart._isInteracting = false;
          chart.draw();
        };

        chart.canvas.addEventListener('touchstart', chart._onTouchStart, { passive: true });
        chart.canvas.addEventListener('mouseleave', chart._onMouseLeave, { passive: true });
      }
    },
    beforeDestroy: (chart: any) => {
      if (chart.canvas) {
        if (chart._onTouchStart) {
          chart.canvas.removeEventListener('touchstart', chart._onTouchStart);
        }
        if (chart._onMouseLeave) {
          chart.canvas.removeEventListener('mouseleave', chart._onMouseLeave);
        }
      }
    },
    afterDatasetsDraw: (chart: any) => {
      if (chart.config.type !== 'line' && chart.config.type !== 'bar') {
        return;
      }

      try {
        const activeElements = chart.getActiveElements();
        let targetIndex: number | null = null;

        if (activeElements && activeElements.length > 0) {
          targetIndex = activeElements[0].index;
          chart._lastActiveIndex = targetIndex;
          chart._isInteracting = true;
        } else if (chart._isInteracting && chart._lastActiveIndex !== undefined && chart._lastActiveIndex !== null) {
          targetIndex = chart._lastActiveIndex;
        }

        if (targetIndex === null || targetIndex === undefined) {
          return;
        }

        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data[targetIndex]) {
          return;
        }

        const targetEl = meta.data[targetIndex];
        const x = targetEl.x;
        if (typeof x !== 'number' || isNaN(x)) {
          return;
        }

        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const { top, bottom, left, right } = chartArea;

        ctx.save();
        const dark = isDarkMode();

        // 1. Draw vertical scrubber guideline
        ctx.beginPath();
        ctx.setLineDash([4, 3]);
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(15, 23, 42, 0.35)';
        ctx.stroke();

        // 2. Draw Top Pill Badge with Label (e.g. "Year 15")
        const label = chart.data?.labels?.[targetIndex];
        if (label !== undefined && label !== null) {
          const labelText = String(label);
          ctx.font = '600 10px "Geist Mono", monospace';
          const textMetrics = ctx.measureText(labelText);
          const textWidth = textMetrics.width;
          const badgeWidth = Math.max(textWidth + 14, 40);
          const badgeHeight = 18;
          const badgeY = top - 11;

          // Clamp pill inside chart horizontal bounds
          const badgeX = Math.max(left, Math.min(right - badgeWidth, x - (badgeWidth / 2)));

          ctx.setLineDash([]);
          ctx.fillStyle = dark ? '#0f172a' : '#1e293b';
          ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.15)';
          ctx.lineWidth = 1;

          if (typeof ctx.roundRect === 'function') {
            ctx.beginPath();
            ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 9);
            ctx.fill();
            ctx.stroke();
          } else {
            ctx.fillRect(badgeX, badgeY, badgeWidth, badgeHeight);
            ctx.strokeRect(badgeX, badgeY, badgeWidth, badgeHeight);
          }

          ctx.fillStyle = '#f8fafc';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(labelText, badgeX + (badgeWidth / 2), badgeY + (badgeHeight / 2) + 0.5);
        }

        // 3. Draw Concentric Target Disc Markers on each visible dataset point
        if (chart.data && chart.data.datasets) {
          ctx.setLineDash([]);
          chart.data.datasets.forEach((dataset: any, dsIndex: number) => {
            const dsMeta = chart.getDatasetMeta(dsIndex);
            if (!dsMeta || dsMeta.hidden) return;
            const pt = dsMeta.data[targetIndex];
            if (!pt) return;
            const ptY = pt.y;
            if (typeof ptY !== 'number' || isNaN(ptY)) return;

            const colorRaw = dataset.borderColor || dataset.backgroundColor || '#10b981';
            const color = typeof colorRaw === 'string' ? colorRaw : (Array.isArray(colorRaw) ? colorRaw[0] : '#10b981');

            // Outer protective halo ring
            ctx.beginPath();
            ctx.arc(x, ptY, 6.5, 0, Math.PI * 2);
            ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)';
            ctx.fill();

            // Dataset primary color disc
            ctx.beginPath();
            ctx.arc(x, ptY, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Crisp inner white center dot
            ctx.beginPath();
            ctx.arc(x, ptY, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
          });
        }

        ctx.restore();
      } catch (err) {
        console.error("Error in verticalLineScrubber plugin afterDatasetsDraw:", err);
      }
    }
  });

  // 3. Dynamic theme switcher: smoothly update active charts on dark/light mode toggle
  window.addEventListener('theme-change', () => {
    if (Chart.instances) {
      Object.values(Chart.instances).forEach((instance: any) => {
        if (instance && typeof instance.update === 'function') {
          instance.update('none');
        }
      });
    }
  });

  // Set defaults globally
  Chart.defaults.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
  Chart.defaults.plugins.tooltip.position = 'fixedTop';
}

export default Chart;
