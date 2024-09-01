const barOne = document.getElementById('barOne').getContext('2d');
const barTwo = document.getElementById('barTwo').getContext('2d');
const line = document.getElementById('line').getContext('2d');
const doughnutOne = document.getElementById('doughnutOne').getContext('2d');
const doughnutTwo = document.getElementById('doughnutTwo').getContext('2d');
const doughnutThree = document.getElementById('doughnutThree').getContext('2d');
const doughnutFour = document.getElementById('doughnutFour').getContext('2d');


// BAR ONE
new Chart(barOne, {
    type: 'bar', 
    data: {
        labels: ['Morning', 'Midday', 'Evening', 'Night'],
        datasets: [{
            // label: 'Prime Timinigs', 
            data: [5, 12, 4, 3], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true 
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// BAR TWO
new Chart(barTwo, {
    type: 'bar', 
    data: {
        labels: ['Very Affordable', 'Affordable', 'Expensive', 'Very Expensive'],
        datasets: [{
            label : 'cost',
            data: [6, 16, 2, 0], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true 
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// LINE
new Chart(line, {
    type: 'line', 
    data: {
        labels: ['0-15 min', '15-30 min', '30-60 min', 'more than hour'],
        datasets: [{
            label: 'Time that you travel using metro',
            data: [12, 10, 1, 1], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true 
            }
        }, 
        plugins : {
            legend : {
                display : false
            }
        }
    }
});


// DOUGHNUT ONE
new Chart(doughnutOne, {
    type: 'doughnut', 
    data: {
        labels: ['Daily', 'Weekly', 'Rarely'],
        datasets: [{
            label: 'How often use metro',
            data: [3, 6, 15], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display : false
            }
        }
    }
});

// DOUGHNUT TWO
new Chart(doughnutTwo, {
    type: 'doughnut', 
    data: {
        labels: ['Never', 'Rarely', 'Sometimes', 'Often'],
        datasets: [{
            label: 'Delays and Disruptions',
            data: [8, 11, 3, 1], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display : false
            }
        }
    }
});


// DOUGHNUT THREE
new Chart(doughnutThree, {
    type: 'doughnut', 
    data: {
        labels: ['Very Sattisfied', 'Sattisfied', 'Neutral', 'Dissatisfied'],
        datasets: [{
            label: 'Cleanliness',
            data: [14, 8, 1, 1], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display : false
            }
        }
    }
});


// DOUGHNUT FOUR
new Chart(doughnutFour, {
    type: 'doughnut', 
    data: {
        labels: ['Excellent', 'Good', 'Poor', 'Fair'],
        datasets: [{
            label: 'People With Disability',
            data: [10, 13, 1, 0], 
            backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ // 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 // Border width of the bars
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display : false
            }
        }
    }
});


