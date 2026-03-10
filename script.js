(function () {
  const exploreBtn = document.getElementById('exploreBtn');
  const brandsSection = document.getElementById('brands');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const logoLink = document.querySelector('.logo-link');
  const navLinkItems = document.querySelectorAll('.nav-link');

  function scrollToSection(element) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeMobileMenu() {
    if (navLinks) {
      navLinks.classList.remove('is-open');
    }
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (exploreBtn && brandsSection) {
    exploreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToSection(brandsSection);
    });
  }

  if (logoLink) {
    logoLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileMenu();
    });
  }

  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href.charAt(0) === '#') {
        const id = href.slice(1);
        const target = id === 'top' ? null : document.getElementById(id);
        if (id === 'top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (target) {
          e.preventDefault();
          scrollToSection(target);
        }
        closeMobileMenu();
      }
    });
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }
})();
