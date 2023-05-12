

// charts
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: '$',
      data: [50, 30, 20],
      borderWidth: 2
    }]
  },
});