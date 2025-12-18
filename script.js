
// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const mobileLinks = menu.querySelectorAll('a');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Smooth scroll for anchor links (optional since we added scroll-behavior: smooth in CSS, but good for older browser support or custom behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-lg', 'bg-white/95');
        nav.classList.remove('bg-white/80');
    } else {
        nav.classList.remove('shadow-lg', 'bg-white/95');
        nav.classList.add('bg-white/80');
    }
});



// FAQ toggle
function toggleFaq(btn) {
    const content = btn.nextElementSibling;
    // Lucide replaces <i> with <svg>, so we need to select the svg
    const icon = btn.querySelector('svg');

    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(c => {
        if (c !== content) {
            c.classList.add('hidden');
            const otherIcon = c.previousElementSibling.querySelector('svg');
            if (otherIcon) {
                otherIcon.style.transform = 'rotate(0deg)';
            }
        }
    });

    content.classList.toggle('hidden');
    if (icon) {
        icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const number = document.getElementById('contact-phone').value;
        const message = document.getElementById('contact-message').value;

        // Construct the mailto link
        const subject = encodeURIComponent(`New Contact from ${number}`); // Added a subject line
        const body = encodeURIComponent(`Name: ${name}\nPhone: ${number}\n\nMessage:\n${message}`);

        window.location.href = `mailto:business.appbyte@gmail.com?subject=${subject}&body=${body}`;

        // Optional: Reset form or show success message after opening mail client
        // contactForm.reset();
    });
}