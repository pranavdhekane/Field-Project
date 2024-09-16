let barColor = [
    'rgba(255, 128, 0, 0.2)', 
    'rgba(0, 128, 255, 0.2)', 
    'rgba(128, 255, 0, 0.2)', 
    'rgba(255, 0, 128, 0.2)', 
    'rgba(128, 128, 128, 0.2)', 
];

let barBorder = [
    'rgba(255, 128, 0, 1)', 
    'rgba(0, 128, 255, 1)', 
    'rgba(128, 255, 0, 1)', 
    'rgba(255, 0, 128, 1)', 
    'rgba(128, 128, 128, 1)', 
];

//chart1
const chart1 = document.getElementById('chart1').getContext('2d');
let pcmc = [13671, 15308, 12117, 10523, 12519, 12749, 12682, 13601, 14374, 13108, 13175, 12955, 13248, 13429, 14043, 15491, 13084];
let vanaz = [6638, 6683, 6218, 5440, 6391, 6382, 6297, 6280, 6323, 6876, 6670, 6543, 6414, 6328, 6662, 6832, 6603];
let pmc = [6604, 8190, 5195, 4098, 4731, 4816, 4929, 7934, 8806, 5079, 5187, 4811, 5125, 4555, 6485, 9253, 5598];
let puneRailway = [8282, 8807, 9919, 8789, 8537, 8558, 8674, 9437, 10326, 10737, 8758, 9025, 8533, 8889, 9135, 9760, 10323];
let ramwadi = [8741, 8784, 8181, 9407, 9059, 8945, 9012, 10132, 8666, 9502, 9705, 9478, 9283, 9470, 9605, 9687, 8792];
let dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];

new Chart(chart1, {
    type: 'line',
    data: {
        labels : dates,
        datasets: [
            {
                label: 'PCMC',
                data: pcmc, 
                backgroundColor: barColor[0], 
                borderColor: barBorder[0], 
                borderWidth: 1
            },
            {
                label: 'Vanaz',
                data: vanaz, 
                backgroundColor: barColor[1], 
                borderColor: barBorder[1], 
                borderWidth: 1
            },
            {
                label: 'PMC',
                data: pmc, 
                backgroundColor: barColor[2], 
                borderColor: barBorder[2], 
                borderWidth: 1
            },
            {
                label: 'Pune Railway Station',
                data: puneRailway, 
                backgroundColor: barColor[3], 
                borderColor: barBorder[3], 
                borderWidth: 1
            },
            {
                label: 'Ramwadi',
                data: ramwadi, 
                backgroundColor: barColor[4], 
                borderColor: barBorder[4], 
                borderWidth: 1
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x : {
                beginAtZero : true,
                title : {
                    display : true,
                    text : 'Date'
                }
            },
            y: {
                beginAtZero: false,
                title : {
                    display : true,
                    text : 'Passengers'
                }
            }
        },
        plugins: {
            legend: {
                display: true 
            }
        }
    }
});

//chart2 
barColor = [
    'rgba(128, 0, 128, 0.2)',  
    'rgba(0, 255, 255, 0.2)',  
];

barBorder = [
    'rgba(128, 0, 128, 1)',  
    'rgba(0, 255, 255, 1)',  
];

const chart2 = document.getElementById('chart2').getContext('2d');

let months = ['Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23'];
let totalLine1Ridership = [21105, 16019, 15806, 16489, 21197, 18963, 14804, 887760, 846391, 685731, 596954, 672677];
let totalLine2Ridership = [51665, 49210, 48640, 53003, 65455, 54543, 52026, 1159241, 1185401, 986875, 826543, 956390];

let totalLine1Revenue = [305026, 231010, 225709, 241348, 343076, 273870, 211439, 14304871, 13092801, 10702912, 9817484, 10808797];
let totalLine2Revenue = [758296, 718123, 693559, 763655, 935042, 809440, 754150, 16434893, 16784395, 14150686, 12286879, 13948793];

new Chart(chart2, {
    type: 'line',
    data: {
        labels : months,
        datasets: [
            {
                label: 'Purple Line (Line 1)',
                data: totalLine1Ridership, 
                backgroundColor: barColor[0], 
                borderColor: barBorder[0], 
                borderWidth: 1,
                tension : 0.4
            },
            {
                label: 'Aqua Line (Line 2)',
                data: totalLine2Ridership, 
                backgroundColor: barColor[1], 
                borderColor: barBorder[1], 
                borderWidth: 1,
                tension : 0.3
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x : {
                beginAtZero : true,
                title : {
                    display : true,
                    text : 'Months'
                }
            },
            y: {
                beginAtZero: false,
                title : {
                    display : true,
                    text : 'Passengers'
                }
            }
        },
        plugins: {
            legend: {
                display: true 
            }
        }
    }
});
new Chart(chart3, {
    type: 'line',
    data: {
        labels : months,
        datasets: [
            {
                label: 'Purple Line (Line 1)',
                data: totalLine1Revenue, 
                backgroundColor: barColor[0], 
                borderColor: barBorder[0], 
                borderWidth: 1,
                tension : 0.4
            },
            {
                label: 'Aqua Line (Line 2)',
                data: totalLine2Revenue, 
                backgroundColor: barColor[1], 
                borderColor: barBorder[1], 
                borderWidth: 1,
                tension : 0.3
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x : {
                beginAtZero : true,
                title : {
                    display : true,
                    text : 'Months'
                }
            },
            y: {
                beginAtZero: false,
                title : {
                    display : true,
                    text : 'Revenue'
                }
            }
        },
        plugins: {
            legend: {
                display: true 
            }
        }
    }
});

// Expand Chart

//og height

let chart = ['50vh', '35vh', '35vh'];
function expand(button) {
    const body = document.querySelector('body');
    const parent = button.parentElement;
    const canvas = parent.querySelector('div');
    const icon = button.querySelector('i');  
    
    if (!parent.classList.contains('expanded')) {
        // Add blur background
        const blurDiv = document.createElement('div');
        blurDiv.classList.add('blur-background');
        body.appendChild(blurDiv);

        // Expand the chart
        parent.classList.add('expanded');
        canvas.style.height = '100%';
        body.style.overflow = 'hidden';
        
        // Update the icon to resize (or collapse)
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
        
    } else {
        // Remove blur background
        document.querySelector('.blur-background').remove();
        
        // Revert the chart size to original
        parent.classList.remove('expanded');
        body.style.overflow = 'scroll';
        
        const canvasID = canvas.querySelector('canvas').id;
        switch(canvasID){
            case 'chart1' : {
                og = chart[0];
                break;
            }
            case 'chart2' : {
                og = chart[1];
                break;
            }
            case 'chart3' : {
                og = chart[2];
                break;
            }
            default : 
                og = '100%';
        }
        canvas.style.height = og;

        // Update the icon back to expand
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    }
}

