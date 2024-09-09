document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('metroForm');
  
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
  
        // Collect specific data from the form fields
        const formData = {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            useMetro: document.getElementById('useMetro').value,
            purpose: document.getElementById('purpose').value,  // For example, only send 'purpose' and other fields
        };
  
        // Specify your Google Apps Script Web App URL here
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxT7Yqq1LjoxyN2V6xnmNU4YCs3gdsAhtZwjsg9OkaRRmbqlftVDuA-dE8IayUcY1GW/exec';
  
        // Send the form data as a POST request to the Web App
        fetch(scriptURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData) // Serialize form data as URL-encoded format
        })
        .then(response => response.text())
        .then(result => {
            alert('Form submitted successfully.');
            console.log('Success:', result);
        })
        .catch(error => {
            alert('There was an error submitting the form.');
            console.error('Error:', error);
        });
    });
  });
  