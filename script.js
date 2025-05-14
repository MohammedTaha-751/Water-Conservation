// Particles.js configuration for Sci-Fi Theme
particlesJS('particles-js', {
    particles: {
        number: {
            value: 150,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#00796b" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000" }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00796b",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    retina_detect: true
});

// Show Water Conservation Tips
document.getElementById("showTipsBtn").addEventListener("click", function() {
    var tips = document.getElementById("waterTips");
    tips.style.display = 'block';
});

// Show More Facts
document.getElementById("viewFactsBtn").addEventListener("click", function() {
    var factsDiv = document.getElementById("moreFacts");
    factsDiv.style.display = 'block';
});

// Show Contact Form
document.getElementById("contactUsBtn").addEventListener("click", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.style.display = 'block';
});

// Close Water Tips
document.getElementById("closeTipsBtn").addEventListener("click", function() {
    var tips = document.getElementById("waterTips");
    tips.style.display = 'none';
});

// Close Facts
document.getElementById("closeFactsBtn").addEventListener("click", function() {
    var facts = document.getElementById("moreFacts");
    facts.style.display = 'none';
});

// Handle Contact Form Submission (Show Success Message)
document.getElementById("contactFormElement").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Show success message
    document.getElementById("successMessage").style.display = 'block';

    // Hide contact form
    document.getElementById("contactForm").style.display = 'none';
});
