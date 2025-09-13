// ===== Menu burger =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// ===== Formulaire (contact.html) =====
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMessage');
    if(name.length < 3) formMsg.textContent = "Nom trop court !";
    else if(!email.includes('@')) formMsg.textContent = "Email invalide !";
    else if(message.length < 10) formMsg.textContent = "Message trop court !";
    else formMsg.textContent = "✅ Message envoyé !";
  });
}

// ===== Animation scroll (fade-in) =====
const faders = document.querySelectorAll('.card, .project');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
