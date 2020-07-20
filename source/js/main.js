(function () {
  const mainNav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  const accordion = document.querySelector('.accordion');
  const titles = accordion.querySelectorAll('.accordion__title');
  const items = accordion.querySelectorAll('.accordion__item');

  const getIndex = (list, elem) => {
    const index = Array.prototype.indexOf.call(list, elem);
    return index;
  }

  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
      mainNav.classList.add('main-nav--closed');
    } else {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--open');
    }
  })

  accordion.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('accordion__title')) {
      const index = getIndex(titles, evt.target)
      const item = items[index];

      if (item.classList.contains('accordion__item--closed')) {
        item.classList.remove('accordion__item--closed');
        item.classList.add('accordion__item--open');
      } else {
        item.classList.remove('accordion__item--open');
        item.classList.add('accordion__item--closed');
      }
    }
  })
})();
