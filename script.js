// ===========================
// Navigation - Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Menu Mobile Toggle
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animation du hamburger
    const hamburger = menuToggle.querySelector('.hamburger');
    hamburger.classList.toggle('active');
});

// Fermer le menu mobile au clic sur un lien
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const hamburger = menuToggle.querySelector('.hamburger');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer - Animations au scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour les animations
const sections = document.querySelectorAll('section > .container');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Observer les cartes de projets
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===========================
// Formulaire de Contact
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Ici, vous pouvez intégrer un service d'envoi d'emails
        // Par exemple: EmailJS, Formspree, Netlify Forms, etc.

        console.log('Formulaire soumis:', formData);

        // Feedback visuel
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        // Simulation d'envoi (remplacer par vraie intégration)
        setTimeout(() => {
            submitBtn.textContent = 'Message envoyé !';
            submitBtn.style.backgroundColor = '#10B981'; // Vert

            // Réinitialiser le formulaire
            contactForm.reset();

            // Réinitialiser le bouton après 3 secondes
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}

// ===========================
// Lien actif dans la navigation
// ===========================
const navLinksForActive = document.querySelectorAll('.nav-link');
const sectionsForActive = document.querySelectorAll('section[id]');

const observerForNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            // Retirer la classe active de tous les liens
            navLinksForActive.forEach(link => {
                link.classList.remove('active');
            });

            // Ajouter la classe active au lien correspondant
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.5
});

sectionsForActive.forEach(section => {
    observerForNav.observe(section);
});

// ===========================
// Effet de typing pour le titre (optionnel)
// ===========================
// Décommenter cette section si vous voulez un effet de typing
/*
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}
*/

// ===========================
// Détection du mode sombre système (optionnel)
// ===========================
// Décommenter pour supporter automatiquement le mode sombre
/*
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
*/

// ===========================
// Logs de débogage (à retirer en production)
// ===========================
console.log('Portfolio initialisé avec succès ✨');
console.log('Nombre de projets:', projectCards.length);
console.log('Nombre de sections:', sections.length);
