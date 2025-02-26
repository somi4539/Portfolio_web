// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20, // Optional offset for navbar
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Simple Validation
    if (!email || !message) {
        alert("Please fill out both fields.");
        return;
    }

    // Simulate form submission and show success message
    alert("Thank you for reaching out! I will get back to you shortly.");
    this.reset(); // Clear the form after submission
});

// Optional: Add any additional interactive features or enhancements here
