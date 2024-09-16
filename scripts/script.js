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
            scaleMobile: 1.00
        });
    }
}

// Initialize the Vanta effect directly
initializeVantaEffect();

