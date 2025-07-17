// Write JavaScript here// Wrap in a function to avoid polluting the global scope
(() => {
    'use strict';

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Bootstrap form validation
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }

        // Simulate form submission
        formAlert.className = 'mt-3 alert alert-info'; // Reset classes
        formAlert.textContent = 'Sending message...';

        // Wait for 2 seconds to simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        formAlert.className = 'mt-3 alert alert-success';
        formAlert.textContent = 'Thank you for your message! We will get back to you soon.';
        
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
            formAlert.className = 'mt-3 d-none';
        }, 5000);
    });
})();