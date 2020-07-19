(function () {
  const mainNav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  const goodsList = document.querySelector('.goods-list');
  const sectionTitle = document.querySelector('.title');

  sectionTitle.addEventListener('click', () => {
    if (goodsList.classList.contains('goods-list--open')) {
      goodsList.classList.remove('goods-list--open');
      goodsList.classList.add('goods-list--closed');
    } else {
      goodsList.classList.remove('goods-list--closed');
      goodsList.classList.add('goods-list--open');
    }
  });

  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
      mainNav.classList.add('main-nav--closed');
    } else {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--open');
    }
  })
})();
