document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('metroForm');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            useMetro: document.getElementById('useMetro').value,
            frequency: document.getElementById('frequency').value,
            timeOfDay: document.getElementById('timeOfDay').value,
            purpose: document.getElementById('purpose').value,
            route: document.getElementById('route').value,
            journeyTime: document.getElementById('journeyTime').value,
            delays: document.getElementById('delays').value,
            cost: document.getElementById('cost').value,
            cleanliness: document.getElementById('cleanliness').value,
            accessibility: document.getElementById('accessibility').value,
            benefits: document.getElementById('benefits').value,
            comparison: document.getElementById('comparison').value,
            improvements: document.getElementById('improvements').value,
            recommend: document.getElementById('recommend').value
        };

        // Call Apps Script to handle the form submission
        fetch('https://script.google.com/macros/s/AKfycbyjI-Qy8HwMhp8t9tdUmJZryD-DkTvAO_krSxaaHNrFWW4CxDXjfKnqpCEy6plZGNZ62w/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
            form.reset();  // Clear the form
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
    });
});
