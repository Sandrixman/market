$(function () {
    // Слайдер головних банерів
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // слайдер популярних товарів
    $('.products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 415,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    // перемикач табів
    $('.tab').on('click', function (e) {
        e.preventDefault();

        // .siblings() - звернення до сусідів
        $($(this).siblings()).removeClass('tab-active');
        // .parent().siblings().find('div') - піднімається до батьківського блоку, далі у сусідів шукає дівки
        $($(this).parents('.products__tabs').siblings().find('div')).removeClass('tab-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tab-content-active');
    });

    // перемикач активності улюбленого товару
    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('favorite-active')
    });

    // Плагін стилізації бокового фільтру - jquery.formstyler
    $('.filter-style').styler();

    // Плагін ховає/показує блок під батьківським блоком
    // Боковий фільтр
    $('.aside-filter__item-title').on('click', function () {
        $(this).toggleClass('filter__item-drop');
        // .slideToggle() - приховує блок
        $(this).next().slideToggle();
    });
    // Мобільна версія футера
    $('.mobile-styler').on('click', function () {
        $(this).toggleClass('filter__item-drop');
        $(this).next().slideToggle();
    });

    // Плагін шкала ціни
    $(".js-range-slider").ionRangeSlider({
        skin: "big",
        postfix: " грн"
    });

    // Відкривання додаткових елементів фільтру
    $('.filter-more').on('click', function () {
        $('.more-content').toggleClass('visible')
    });

    // Перемикач вигляду карточок товару (grid|line)
    $('.catalog__filter-btn-grid').on('click', function () {
        $('.catalog__filter-btn-line').removeClass('active');
        $(this).addClass('active');
        $('.product-item__wrapper').removeClass('line');
    });

    $('.catalog__filter-btn-line').on('click', function () {
        $('.catalog__filter-btn-grid').removeClass('active');
        $(this).addClass('active');
        $('.product-item__wrapper').addClass('line');
    });

    // Плагін - зірковий рейтинг зі змішуванням кольорів
    $("#rateYo").rateYo({
        spacing: "5px",
        starWidth: "20px", //розмір зірок
        normalFill: "#c4c4c4", // колір неактивних зірок
        multiColor: {
            "startColor": "#FF0000", //RED
            "endColor": "#1c62cd"  //BLUE
        }
    });

    // Мобільний гамбуогер
    $('.menu__btn').on('click', function () {
        $('.mobile-menu__hamburger').toggleClass('hamburger-active');
    });

});
