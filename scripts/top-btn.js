const body = document.querySelector('body');
const navigationBar = document.querySelector('#navbar');
const btn = document.getElementById('top-btn');
// Create an observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const rect = entry.target.getBoundingClientRect();
			// Check if the div fully occupies the viewport
			const isFullScreen = (
				Math.round(rect.top) === 0 &&
				Math.round(rect.left) === 0 &&
				Math.round(rect.bottom) === window.innerHeight &&
				Math.round(rect.right) === window.innerWidth
			);

			if (isFullScreen) {
				// console.log('Div fully occupies the screen');
			} else {
				// console.log('Div is visible but does not fully occupy the screen');
				btn.style.visibility = 'hidden';
			}
		} else {
			btn.style.visibility = 'visible';
			//   console.log('Div is not visible at all');
		}
	});
}, {
	root: null,  // Observing within the viewport
	threshold: 0 // Trigger when any part of the div enters the viewport
});

// Attach the observer to the #show div
observer.observe(navigationBar);
