document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('metroForm');
  const submitButton = form.querySelector('input[type="submit"]');

  // Create a spinner element
  const spinner = document.createElement('div');
  spinner.id = 'spinner';
  spinner.style.display = 'none'; // Hide initially
  spinner.innerHTML = '<div class="loader">Loading...</div>'; // Customize as needed
  document.body.appendChild(spinner);

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Disable the submit button to prevent resubmitting
    submitButton.disabled = true;

    // Show the spinner
    spinner.style.display = 'block';
    // Collect all data from the form fields

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

    // Specify your Google Apps Script Web App URL here
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzP6sfgk9KX61xfmpWjJqeC1pCUoCoWcf24OqA3Hdo4wKxqacoxlB-W2K7IQLdCmxxr/exec';

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
        spinner.style.display = 'none';
        submitButton.disabled = false;
        form.reset();
      })
      .catch(error => {
        spinner.style.display = 'none';
        submitButton.disabled = false;
        alert('There was an error submitting the form.');
        console.error('Error:', error);
      });
  });
});
