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
      
      // Check screen width dynamically in browser
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        const chart = this.chart;
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
  // Register the dotted vertical line cursor plugin globally
  Chart.register({
    id: 'verticalLine',
    afterDraw: (chart: any) => {
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

  // Set defaults globally
  Chart.defaults.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
  Chart.defaults.plugins.tooltip.position = 'fixedTop';
}

export default Chart;
