(function () {
  const exploreBtn = document.getElementById('exploreBtn');
  const brandsSection = document.getElementById('brands');
  const logoLink = document.querySelector('.logo-link');
  const searchToggle = document.getElementById('searchToggle');
  const headerSearch = document.getElementById('headerSearch');
  const searchInput = document.getElementById('searchInput');

  function scrollToSection(element) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    });
  }

  function closeSearch() {
    if (headerSearch) headerSearch.classList.remove('is-open');
    if (searchToggle) {
      searchToggle.setAttribute('aria-expanded', 'false');
      searchToggle.setAttribute('aria-label', 'Open search');
    }
    if (headerSearch) headerSearch.setAttribute('aria-hidden', 'true');
    if (searchInput) {
      searchInput.blur();
      searchInput.value = '';
    }
  }

  if (searchToggle && headerSearch && searchInput) {
    searchToggle.addEventListener('click', function () {
      const isOpen = headerSearch.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', isOpen);
      searchToggle.setAttribute('aria-label', isOpen ? 'Close search' : 'Open search');
      headerSearch.setAttribute('aria-hidden', !isOpen);
      if (isOpen) {
        searchInput.focus();
      } else {
        searchInput.blur();
        searchInput.value = '';
      }
    });
  }

  const searchDropdownItems = document.querySelectorAll('.search-dropdown-item');
  searchDropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeSearch();
    });
  });
})();
