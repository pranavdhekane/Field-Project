const barOne = document.getElementById('barOne').getContext('2d');
const barTwo = document.getElementById('barTwo').getContext('2d');
const line = document.getElementById('line').getContext('2d');
const doughnutOne = document.getElementById('doughnutOne').getContext('2d');
const doughnutTwo = document.getElementById('doughnutTwo').getContext('2d');
const doughnutThree = document.getElementById('doughnutThree').getContext('2d');
const doughnutFour = document.getElementById('doughnutFour').getContext('2d');

let bar1Graph = [5, 12, 4, 3];
let bar2Graph = [6, 16, 2, 0];
let lineGraph = [12, 10, 1, 1];
let doughnutOneGraph = [3, 6, 15];
let doughnutTwoGraph = [8, 11, 3, 1];
let doughnutThreeGraph = [14, 8, 1, 1];
let doughnutFourGraph = [10, 13, 1, 0];

const sheetUrl = 'https://script.google.com/macros/s/AKfycbxT7Yqq1LjoxyN2V6xnmNU4YCs3gdsAhtZwjsg9OkaRRmbqlftVDuA-dE8IayUcY1GW/exec';

let barColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
];

let barBorder = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
];

// barColor = ['rgb(255, 30, 50, 0.7)', 'rgb(19, 255, 0, 0.7)', 'rgb(0, 114, 255, 0.7)', 'rgb(255, 255, 0, 0.7)'];
barColor = ['rgb(255 30, 50, 0.6)', 'rgb(19, 255, 0, 0.6)', 'rgb(0, 114, 255, 0.6)', 'rgb(255, 255, 0, 0.6)'];
// barBorder = ['red', 'green', 'blue', 'yellow'];
// barColor = ['#101010', '#202020', '#303030', '#404040'];
barBorder = ['#000'];

function createCharts() {
    // BAR ONE
    new Chart(barOne, {
        type: 'bar',
        data: {
            labels: ['Morning', 'Midday', 'Evening', 'Night'],
            datasets: [{
                label: 'Prime Timinigs',
                data: bar1Graph,
                backgroundColor: barColor,
                borderColor: barBorder,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
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
                label: 'cost',
                data: bar2Graph,
                backgroundColor: barColor,
                borderColor: barBorder,
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
                data: lineGraph,
                backgroundColor: barColor,
                borderColor: barBorder,
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

    // DOUGHNUT ONE
    new Chart(doughnutOne, {
        type: 'doughnut',
        data: {
            labels: ['Daily', 'Weekly', 'Rarely'],
            datasets: [{
                label: 'How often use metro',
                data: doughnutOneGraph,
                backgroundColor: barColor,
                borderColor: barBorder,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            // responsive: false,
            scales: {
                y: {
                    display: false
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
                data: doughnutTwoGraph,
                backgroundColor: barColor,
                borderColor: barBorder,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            // responsive : false,
            scales: {
                y: {
                    display: false
                }
            }
        }
    });

    // DOUGHNUT THREE
    new Chart(doughnutThree, {
        type: 'doughnut',
        data: {
            labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
            datasets: [{
                label: 'Cleanliness',
                data: doughnutThreeGraph,
                backgroundColor: barColor,
                borderColor: barBorder,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            // responsive : false,
            scales: {
                y: {
                    display: false
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
                data: doughnutFourGraph,
                backgroundColor: barColor,
                borderColor: barBorder,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            // responsive : false,
            scales: {
                y: {
                    display: false
                }
            }
        }
    });
}

// Initialize charts with dummy data
createCharts();

// Fetch real data and update charts
fetch(sheetUrl)
    .then(response => response.json())
    .then(data => {
        bar1Graph = data.array1;
        bar2Graph = data.array2;
        lineGraph = data.array3;
        doughnutOneGraph = data.array4;
        doughnutTwoGraph = data.array5;
        doughnutThreeGraph = data.array6;
        doughnutFourGraph = data.array7;

        // Destroy existing charts
        Chart.getChart(barOne).destroy();
        Chart.getChart(barTwo).destroy();
        Chart.getChart(line).destroy();
        Chart.getChart(doughnutOne).destroy();
        Chart.getChart(doughnutTwo).destroy();
        Chart.getChart(doughnutThree).destroy();
        Chart.getChart(doughnutFour).destroy();

        // Reinitialize charts with new data
        createCharts();
    })
    .catch(error => console.error('Error fetching data:', error));

// Expand Chart
function expand(button) {
    const body = document.querySelector('body');
    const parent = button.parentElement;
    const icon = button.querySelector('i');  // Get the <i> tag inside the button

    if (!parent.classList.contains('expanded')) {
        // Add blur background
        const blurDiv = document.createElement('div');
        blurDiv.classList.add('blur-background');
        body.appendChild(blurDiv);

        // Expand the chart
        parent.classList.add('expanded');

        // Update the icon to resize (or collapse)
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');

    } else {
        // Remove blur background
        document.querySelector('.blur-background').remove();

        // Revert the chart size to original
        parent.classList.remove('expanded');

        // Update the icon back to expand
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    }
}

