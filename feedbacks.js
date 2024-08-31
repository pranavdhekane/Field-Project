const barOne = document.getElementById('barOne').getContext('2d');
const barTwo = document.getElementById('barTwo').getContext('2d');
const line = document.getElementById('line').getContext('2d');
const doughnutOne = document.getElementById('doughnutOne').getContext('2d');
const doughnutTwo = document.getElementById('doughnutTwo').getContext('2d');
const doughnutThree = document.getElementById('doughnutThree').getContext('2d');
const doughnutFour = document.getElementById('doughnutFour').getContext('2d');


// BAR ONE
new Chart(barOne, {
    type: 'bar', // Chart type
    data: {
        labels: ['Morning Rush Hour', 'Midday', 'Evening Rush Hour', 'Night'], 
        datasets: [{
            label: 'Prime Timinigs', 
            data: [12, 19, 3, 5], // Data points
            backgroundColor: [ // Bar colors
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ // Bar border colors
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 // Border width of the bars
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Start the Y-axis at 0
            }
        }
    }
});

// BAR TWO

// LINE

// DOUGHNUT ONE
new Chart(doughnutOne, {
  type: 'doughnut', // Chart type
  data: {
      labels: ['Morning Rush Hour', 'Midday', 'Evening Rush Hour', 'Night'], 
      datasets: [{
          label: 'Prime Timinigs', 
          data: [12, 19, 3, 5], // Data points
          backgroundColor: [ // Bar colors
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [ // Bar border colors
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1 // Border width of the bars
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true // Start the Y-axis at 0
          }
      }
  }
});
