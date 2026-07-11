import { Chart, registerables } from 'chart.js';

// Register all standard Chart.js components (auto registration)
Chart.register(...registerables);

// Register custom fixedTop tooltip positioner
try {
  const tooltipPlugin = Chart.registry.getPlugin('tooltip') as any;
  if (tooltipPlugin && tooltipPlugin.positioners) {
    tooltipPlugin.positioners.fixedTop = function(elements: any, eventPosition: any) {
      if (!elements || !elements.length) return false;
      const activePoint = elements[0];
      const x = activePoint.element.x;
      const chart = this.chart;
      
      // Skip custom tooltip positioning for non-cartesian charts (like doughnut, pie, radar)
      if (chart.config.type !== 'line' && chart.config.type !== 'bar') {
        return {
          x: activePoint.element.x,
          y: activePoint.element.y
        };
      }
      
      // Check screen width dynamically in browser
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
  // 1. Configure global futuristic and smooth defaults
  
  // Line Chart styling
  if (!Chart.defaults.datasets.line) {
    Chart.defaults.datasets.line = {} as any;
  }
  Chart.defaults.datasets.line.tension = 0.4; // Cubic line smoothing
  Chart.defaults.datasets.line.borderWidth = 2.5; // Slightly thicker lines for visibility
  Chart.defaults.datasets.line.fill = true; // Area gradient filling
  Chart.defaults.datasets.line.pointRadius = 0; // Hide points by default
  Chart.defaults.datasets.line.pointHoverRadius = 6; // Show hover points
  Chart.defaults.datasets.line.pointHoverBackgroundColor = '#00f0ff'; // Neon blue active point
  Chart.defaults.datasets.line.pointHoverBorderColor = '#ffffff';
  Chart.defaults.datasets.line.pointHoverBorderWidth = 2;
  
  // Dynamic gradient generator based on dataset border color
  Chart.defaults.datasets.line.backgroundColor = (context: any) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) return 'rgba(0, 112, 243, 0.05)';
    
    let borderColor = context.dataset.borderColor || '#0070f3';
    let baseColor = '#0070f3';
    
    if (typeof borderColor === 'string') {
      baseColor = borderColor;
    } else if (Array.isArray(borderColor) && borderColor.length > 0) {
      baseColor = borderColor[0];
    }
    
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)'); // Fade to transparent
    
    // Parse color to apply alpha transparency
    if (baseColor.startsWith('#')) {
      const hex = baseColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.2)`);
    } else if (baseColor.startsWith('rgb')) {
      const clean = baseColor.replace('rgba(', '').replace('rgb(', '').replace(')', '').split(',');
      gradient.addColorStop(1, `rgba(${clean[0].trim()}, ${clean[1].trim()}, ${clean[2].trim()}, 0.2)`);
    } else {
      gradient.addColorStop(1, 'rgba(0, 112, 243, 0.2)');
    }
    
    return gradient;
  };

  // Bar Chart styling
  if (!Chart.defaults.datasets.bar) {
    Chart.defaults.datasets.bar = {} as any;
  }
  Chart.defaults.datasets.bar.borderRadius = 6; // Beautiful rounded bars
  Chart.defaults.datasets.bar.maxBarThickness = 48; // Prevent overly wide bars
  
  // Doughnut Chart styling
  if (!Chart.defaults.datasets.doughnut) {
    Chart.defaults.datasets.doughnut = {} as any;
  }
  Chart.defaults.datasets.doughnut.borderColor = (context: any) => {
    if (typeof document !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? '#171717' : '#ffffff';
    }
    return '#171717';
  };
  Chart.defaults.datasets.doughnut.borderWidth = 2.5; // Beautiful outline separation gap

  // Pie Chart styling
  if (!Chart.defaults.datasets.pie) {
    Chart.defaults.datasets.pie = {} as any;
  }
  Chart.defaults.datasets.pie.borderColor = (context: any) => {
    if (typeof document !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? '#171717' : '#ffffff';
    }
    return '#171717';
  };
  Chart.defaults.datasets.pie.borderWidth = 2.5;

  // Faint clean gridlines safely without replacing the defaults.scale object descriptor
  if (Chart.defaults.scale) {
    if (!Chart.defaults.scale.grid) {
      Chart.defaults.scale.grid = {} as any;
    }
    Chart.defaults.scale.grid.color = 'rgba(128, 128, 128, 0.08)';
    Chart.defaults.scale.grid.tickColor = 'rgba(128, 128, 128, 0.08)';
  }

  // Premium typography & Legend styling
  if (!Chart.defaults.plugins.legend) {
    Chart.defaults.plugins.legend = {} as any;
  }
  if (!Chart.defaults.plugins.legend.labels) {
    Chart.defaults.plugins.legend.labels = {} as any;
  }
  Chart.defaults.plugins.legend.labels.usePointStyle = true; // Circular legend bullets
  Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
  Chart.defaults.plugins.legend.labels.font = {
    family: 'Geist, sans-serif',
    size: 10,
    weight: 'normal'
  };

  // Premium dark glassmorphism tooltip style
  if (!Chart.defaults.plugins.tooltip) {
    Chart.defaults.plugins.tooltip = {} as any;
  }
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(23, 23, 23, 0.95)';
  Chart.defaults.plugins.tooltip.titleFont = { family: 'Geist Mono, monospace', size: 11, weight: 'bold' };
  Chart.defaults.plugins.tooltip.bodyFont = { family: 'Geist, sans-serif', size: 11 };
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.1)';

  // 2. Register the dotted vertical line cursor plugin globally
  Chart.register({
    id: 'verticalLine',
    afterDraw: (chart: any) => {
      // Skip vertical line drawing for non-cartesian charts (like doughnut, pie, radar)
      if (chart.config.type !== 'line' && chart.config.type !== 'bar') {
        return;
      }
      
      try {
        let x = null;
        
        // If there is active hovering/touching, use it and update the selected index
        if (chart.tooltip?.getActiveElements()?.length) {
          const activePoint = chart.tooltip.getActiveElements()[0];
          x = activePoint.element.x;
          chart.selectedIndex = activePoint.index;
        } else if (chart.selectedIndex !== undefined) {
          // Otherwise, draw the line at the last selected/tapped position
          const scaleX = chart.scales.x;
          if (scaleX && chart.data?.labels) {
            const label = chart.data.labels[chart.selectedIndex];
            if (label !== undefined) {
              x = scaleX.getPixelForValue(label);
            }
          }
        } else {
          // Default to the last index of the dataset on initial draw
          const meta = chart.getDatasetMeta(0);
          if (meta && meta.data && meta.data.length > 0) {
            chart.selectedIndex = meta.data.length - 1;
            const lastEl = meta.data[chart.selectedIndex];
            if (lastEl) {
              x = lastEl.x;
            }
          }
        }

        if (x !== null && typeof x === 'number' && !isNaN(x)) {
          const { ctx } = chart;
          const { top, bottom } = chart.chartArea;

          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([4, 4]); // Dotted line pattern
          ctx.moveTo(x, top);
          ctx.lineTo(x, bottom);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'rgba(128, 128, 128, 0.7)'; // Clear grey dotted line
          ctx.stroke();
          ctx.restore();
        }
      } catch (err) {
        console.error("Error in verticalLine plugin afterDraw:", err);
      }
    }
  });

  // 3. Register the neon global shadow/glow plugin for all chart types (line, bar, doughnut, pie)
  Chart.register({
    id: 'globalGlow',
    beforeDatasetsDraw: (chart: any) => {
      const { ctx } = chart;
      const originalStroke = ctx.stroke;
      const originalFill = ctx.fill;

      ctx.stroke = function () {
        ctx.save();
        const strokeStyle = ctx.strokeStyle;
        
        // Only apply glow to elements that are colored lines (not gridlines or transparent borders)
        if (
          typeof strokeStyle === 'string' && 
          !strokeStyle.includes('rgba(128, 128, 128') && 
          !strokeStyle.includes('rgba(0, 0, 0, 0')
        ) {
          ctx.shadowColor = strokeStyle;
          ctx.shadowBlur = 10; // Neon glow blur radius
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        }
        
        const res = originalStroke.apply(this, arguments);
        ctx.restore();
        return res;
      };

      ctx.fill = function () {
        ctx.save();
        const fillStyle = ctx.fillStyle;

        // Apply glow to colored fills (bars, pie/doughnut segments)
        if (
          typeof fillStyle === 'string' &&
          !fillStyle.includes('rgba(128, 128, 128') &&
          !fillStyle.includes('rgba(0, 0, 0, 0')
        ) {
          ctx.shadowColor = fillStyle;
          ctx.shadowBlur = 12; // High neon glow for fills
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        }

        const res = originalFill.apply(this, arguments);
        ctx.restore();
        return res;
      };
    },
    afterDatasetsDraw: (chart: any) => {
      chart.ctx.stroke = CanvasRenderingContext2D.prototype.stroke;
      chart.ctx.fill = CanvasRenderingContext2D.prototype.fill;
    }
  });

  // Set defaults globally
  Chart.defaults.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
  Chart.defaults.plugins.tooltip.position = 'fixedTop';
}

export default Chart;
