// swiper

const swiper = new Swiper('.swiper', {
    // Дополнительные параметры
    direction: 'horizontal',
    loop: true,

    // расстояние между слайдами
    spaceBetween: 5, 

    // Количество видимых слайдов
    slidesPerView: 'auto', 
    centeredSlides: true, 

    // нумерация страниц
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Стрелки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // полоса прокрутки
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
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