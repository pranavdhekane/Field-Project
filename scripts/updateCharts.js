document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('metroForm');

    form.addEventListener('submit', function (event) {
        // event.preventDefault(); // Prevent default form submission

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxT7Yqq1LjoxyN2V6xnmNU4YCs3gdsAhtZwjsg9OkaRRmbqlftVDuA-dE8IayUcY1GW/exec';

        fetch(scriptURL)
            .then(response => response.json())
            .then(data => {
                let bar1Graph = data.array1;
                let bar2Graph = data.array2;
                let lineGraph = data.array3;
                let doughnutOneGraph = data.array4;
                let doughnutTwoGraph = data.array5;
                let doughnutThreeGraph = data.array6;
                let doughnutFourGraph = data.array7;

                // Collect specific data from the form fields
                const updates = {
                    bar1: getSelectedOptionIndex('timeOfDay'),
                    bar2: getSelectedOptionIndex('cost'),
                    line: getSelectedOptionIndex('journeyTime'),
                    doughnut1: getSelectedOptionIndex('frequency'),
                    doughnut2: getSelectedOptionIndex('delays'),
                    doughnut3: getSelectedOptionIndex('cleanliness'),
                    doughnut4: getSelectedOptionIndex('accessibility'),
                };

                // Update the graphs
                bar1Graph[updates.bar1] += 1;
                bar2Graph[updates.bar2] += 1;
                lineGraph[updates.line] += 1;
                doughnutOneGraph[updates.doughnut1] += 1;
                doughnutTwoGraph[updates.doughnut2] += 1;
                doughnutThreeGraph[updates.doughnut3] += 1;
                doughnutFourGraph[updates.doughnut4] += 1;

                const Data = {
                    bar1Graph: bar1Graph,
                    bar2Graph: bar2Graph,
                    lineGraph: lineGraph,
                    doughnutOneGraph: doughnutOneGraph,
                    doughnutTwoGraph: doughnutTwoGraph,
                    doughnutThreeGraph: doughnutThreeGraph,
                    doughnutFourGraph: doughnutFourGraph,
                };

                // Send the form data as a POST request to the Web App
                fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Data) // Properly formatted as JSON
                })
                    .then(response => response.text())
                    .then(result => console.log('result ' + result))
                    .catch(error => console.error('error ' + error));
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function getSelectedOptionIndex(selectElementId) {
        const selectElement = document.getElementById(selectElementId);
        if (selectElement) {
            return selectElement.selectedIndex;
        } else {
            console.error('Select element not found:', selectElementId);
            return -1;
        }
    }
});
