document.getElementById('metroForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
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
  
    fetch('https://script.google.com/macros/s/AKfycbxwEdi-NfzL3AGNkgsLsAqj1SOipTXq81qooHaUXx3pB2TQ46w71nNlsNBowaHu1tICRQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.result === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    });
    
      
  });
  