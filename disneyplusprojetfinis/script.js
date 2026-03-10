// script.js - Fonctionnalités Disney+

// 1. FAQ - Ouvrir/fermer les questions
function initFAQ() {
  var questions = document.querySelectorAll('.faq-question');

  questions.forEach(function(bouton) {
    bouton.addEventListener('click', function() {
      var element = bouton.closest('.faq-element');
      var estOuvert = element.classList.contains('ouvert');

      // Fermer tous les éléments ouverts
      document.querySelectorAll('.faq-element.ouvert').forEach(function(el) {
        el.classList.remove('ouvert');
      });

      // Ouvrir l'élément cliqué s'il était fermé
      if (!estOuvert) {
        element.classList.add('ouvert');
      }
    });
  });
}

// 2. Animation d'apparition au scroll
function initAnimation() {
  var sections = document.querySelectorAll('.exclusif, .tarifs, .appareils, .faq, .plateformes, .pied-de-page');

  sections.forEach(function(section) {
    section.classList.add('apparition');
  });

  var observateur = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observateur.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(function(section) {
    observateur.observe(section);
  });
}

// 3. Validation du formulaire email
function initFormulaire() {
  var formulaires = document.querySelectorAll('.accueil-formulaire');

  formulaires.forEach(function(formulaire) {
    var input = formulaire.querySelector('.accueil-input');
    var bouton = formulaire.querySelector('.bouton-cyan');
    if (!input || !bouton) return;

    // Message de retour sous le formulaire
    var message = document.createElement('p');
    message.style.cssText = 'margin-top: 8px; font-size: 0.85rem; min-height: 22px;';
    formulaire.parentNode.insertBefore(message, formulaire.nextSibling);

    // Vérification au clic
    bouton.addEventListener('click', function() {
      var email = input.value.trim();
      var formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        message.textContent = 'Veuillez entrer votre adresse e-mail.';
        message.style.color = '#ff6b6b';
        input.focus();
        return;
      }

      if (!formatEmail.test(email)) {
        message.textContent = 'Veuillez entrer une adresse e-mail valide.';
        message.style.color = '#ff6b6b';
        input.focus();
        return;
      }

      // Email valide
      message.textContent = '✓ Merci ! Vérifiez votre boîte mail pour continuer.';
      message.style.color = '#02D6E8';
      input.value = '';
      bouton.disabled = true;
      bouton.textContent = 'ENVOYÉ ✓';
      bouton.style.background = '#136878';

      // Réinitialiser après 5 secondes
      setTimeout(function() {
        message.textContent = '';
        bouton.disabled = false;
        bouton.textContent = "S'INSCRIRE";
        bouton.style.background = '';
      }, 5000);
    });

    // Effacer le message d'erreur quand l'utilisateur retape
    input.addEventListener('input', function() {
      if (message.style.color === 'rgb(255, 107, 107)') {
        message.textContent = '';
      }
    });

    // Valider avec la touche Entrée
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') bouton.click();
    });
  });
}

// 4. Scroll doux vers les ancres (#faq, #abonnement...)
function initScrollDoux() {
  document.querySelectorAll('a[href^="#"]').forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      var cible = document.querySelector(lien.getAttribute('href'));
      if (cible) {
        e.preventDefault();
        cible.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Lancement de toutes les fonctions au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  initFAQ();
  initAnimation();
  initFormulaire();
  initScrollDoux();
});
