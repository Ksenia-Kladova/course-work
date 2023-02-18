let loginBtn = document.querySelector('.header__login');
let modal = document.querySelector('.modal');
let modalContainer = document.querySelector('.modal__container');
let closeBtn = document.querySelector('.modal__close-btn');

loginBtn.addEventListener('click',
  function () {
    modal.classList.toggle('modal--active');
    modalContainer.classList.toggle('modal__container--active');
  });

closeBtn.addEventListener('click',
  function () {
    modal.classList.remove('modal--active');
    modalContainer.classList.remove('modal__container--active');
  });


let searchBtn = document.querySelector('.header__search-btn');
let search = document.querySelector('.header__form-search');

searchBtn.addEventListener('click',
  function () {
    search.classList.toggle('header__form-search--active');
  });

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__form-search') && !target.closest('.header__search-btn')) {
    search.classList.remove('header__form-search--active')
  }
});

let btnPlay = document.querySelectorAll('.btn-play');
let svgPause = document.querySelectorAll('.svg-pause');
let svgPlay = document.querySelectorAll('.svg-play');

btnPlay.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const button = e.currentTarget.dataset.button;

    svgPlay.forEach(function (element) {
      element.classList.remove('svg-play--hidden');
    });
    e.currentTarget.classList.toggle('svg-pause--active');
    document.querySelector(`[data-play="${button}"]`).classList.toggle('svg-play--hidden');

    svgPause.forEach(function (el) {
      el.classList.remove('svg-pause--active');
    });
    document.querySelector(`[data-pause="${button}"]`).classList.toggle('svg-pause--active');
  })
})


const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ' ',
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2.31,
      spaceBetween: 20,
    },

    481: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

new Accordion('.accordion-container', {
  event: 'Enter click',
  openOnInit: '0'
});


let tabsBtn = document.querySelectorAll('.guests__btn-tab');
let tabsItem = document.querySelectorAll('.guests__wrapper-content');


tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    const media = window.matchMedia('(max-width: 576px)')

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('guests__btn-tab--active')
      if (media.matches) {
        btn.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
    e.currentTarget.classList.add('guests__btn-tab--active');


    tabsItem.forEach(function (element) {
      element.classList.remove('guests__wrapper-content--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__wrapper-content--active');
  });
});

const validation = new JustValidate('#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: false,
  },
);

validation
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Сообщение содержит меньше двух символов',
    },
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя содержит меньше двух символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя содержит больше тридцати символов',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'e-mail указан неверно!',
    },
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Обязательно',
    },
  ]);

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('footer__subscribe--active');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.footer__subscribe');
  for (let elm of elements) {
    observer.observe(elm);
  }

let subscribe = document.querySelector('.footer__subscribe')
let closeBtnSubscribe = document.querySelector('.footer__subscribe-btn-close');

closeBtnSubscribe.onclick = function () { subscribe.style.display = "none"; }


let btnMore = document.querySelector('.podcasts__btn-more')
let podcastsItem = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {
  podcastsItem.forEach(el => {
    el.classList.add('podcasts__item--visible')
  });
  btnMore.closest('.podcasts__btn-wrap').classList.add('podcasts__btn-wrap--hidden');
})

let burgerTop = document.querySelector('.header__burger-btn-top');
let menuTop = document.querySelector('.header__nav-top');
let menuTopLinks = menuTop.querySelectorAll('.header__link-top');
let menuBottom = document.querySelector('.header__nav-bottom');
let menuBottomLinks = menuBottom.querySelectorAll('.header__link-bottom');

burgerTop.addEventListener('click',
  function () {
    burgerTop.classList.toggle('header__burger-btn-top--active');
    menuTop.classList.toggle('header__nav-top--active');
    menuBottom.classList.toggle('header__nav-bottom--active');
    document.body.classList.toggle('stop-scroll');
  })

menuTopLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    burgerTop.classList.remove('header__burger-btn-top--active');
    menuTop.classList.remove('header__nav-top--active');
    menuBottom.classList.remove('header__nav-bottom--active');
    document.body.classList.remove('stop-scroll');
  })
})

menuBottomLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {
    burgerTop.classList.remove('header__burger-btn-top--active');
    menuTop.classList.remove('header__nav-top--active');
    menuBottom.classList.remove('header__nav-bottom--active');
    document.body.classList.remove('stop-scroll');
  })
})

let btnHidden = document.querySelector('.header__list-play-hidden-btn');
let menuPlay = document.querySelector('.header__list-play');

btnHidden.addEventListener('click',
  function () {
    btnHidden.classList.toggle('header__list-play-hidden-btn--active');
    menuPlay.classList.toggle('header__list-play--active');
  });


const validationModal = new JustValidate('#form-modal',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid-modal',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: false,
  },
);

validationModal
  .addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели логин',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Логин содержит меньше двух символов',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели пароль',
    },
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'Пароль содержит меньше шести символов',
    },
  ]);


const validationSubscribe = new JustValidate('#formElem',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid-elem',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: false,
  },
);

validationSubscribe
  .addField('.footer__subscribe-input', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'e-mail указан неверно!',
    },
  ])
