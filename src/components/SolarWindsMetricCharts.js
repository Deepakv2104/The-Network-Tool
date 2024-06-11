// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// function SolarWindsMetricChart({ data }) {
//   const chartContainer = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     // Destroy the previous chart instance
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const ctx = chartContainer.current.getContext('2d');
//     chartInstance.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: data.labels,
//         datasets: [
//           {
//             label: 'Latency (ms)',
//             data: data.latency,
//             borderColor: 'blue',
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             type: 'category',
//             title: {
//               display: true,
//               text: 'Time',
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Value',
//             },
//           },
//         },
//       },
//     });
//   }, [data]);

//   return <canvas ref={chartContainer} />;
// }

// export default SolarWindsMetricChart;
