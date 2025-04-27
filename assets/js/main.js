// main.js

// Hide Loader
window.addEventListener('load', function() {
    document.getElementById('loader-wrapper').style.display = 'none';
});

// Typed.js Initialization
var typed = new Typed('#typed', {
    strings: ['Stay Safe Online.', 'Guard Your Digital World.', 'Meet FortiBot.'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// AOS Animation
AOS.init();

// Particles.js Initialization
particlesJS.load('particles-js', 'assets/particles/particles-config.json');

// Cyber Tip Generator
const tips = [
    "Use two-factor authentication everywhere.",
    "Never reuse passwords across sites.",
    "Update your software and apps regularly.",
    "Beware of phishing emails and unknown links.",
    "Always backup important files securely."
];

function generateTip() {
    const tipElement = document.getElementById('cyber-tip');
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = randomTip;
}

document.addEventListener('DOMContentLoaded', generateTip);
