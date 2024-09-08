document.getElementById('metroForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

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
    recommend: document.getElementById('recommend').value,
  };

  // Send the form data to Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbxwEdi-NfzL3AGNkgsLsAqj1SOipTXq81qooHaUXx3pB2TQ46w71nNlsNBowaHu1tICRQ/exec', {
    method: 'POST',
    body: formData, // Your form data
    mode: 'no-cors'  // Add this option
  })
  .then(response => {
    // Handle response (limited access due to no-cors)
  })
  .catch(error => {
    console.error(error);
  });
});
