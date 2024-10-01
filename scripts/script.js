// Initialize Vanta.js GLOBE effect
function initializeVantaEffect() {
    if (window.VANTA) {
        window.VANTA.GLOBE({
            el: "#show", // Target element
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xb129b3,
            color2: 0x3b3b3b,
            size: 0.90,
            backgroundColor: 0x0,
            // backgroundColor: 0xf
        });
    }
}

// Initialize the Vanta effect directly
initializeVantaEffect();

// Animations of info
{
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop');
                observer.unobserve(entry.target); // Stop observing after the animation
            }
        });
    });

    // Observe each .info div
    document.querySelectorAll('.info-text').forEach(element => {
        observer.observe(element);
    });
}