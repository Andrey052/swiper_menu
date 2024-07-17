// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// логика кнопки скрыть
const hideBotton = document.querySelector('.btn__txt');

const hiddenSlides = document.querySelector('.brend-list');

const hideIcon = document.querySelector('.btn__img');

let isHidden = true;

let showList = () => {
    console.log(hiddenSlides);
    hiddenSlides.classList.add('visible');
    isHidden = false;
    hideBotton.innerHTML = 'Скрыть';
    hideIcon.style = 'transform: rotate(180deg)'
}

let hideList = () => {
    hiddenSlides.classList.remove('visible');
    isHidden = true;
    hideBotton.innerHTML = 'Показать все';
    hideIcon.style = 'transform: rotate(0deg)'
}

hideBotton.addEventListener('click', () => {
    if (isHidden) {
        showList();
    } else {
        hideList();
    }
})