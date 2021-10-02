$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `
    });

    // перемикач табів
    $('.tab').on('click', function (e) {
        e.preventDefault();

        // .siblings() - звернення до сусідів
        $($(this).siblings()).removeClass('tab-active');
        // .parent().siblings().find('div') - піднімається до батьківського блоку, далі у сусідів шукає дівки
        $($(this).parent().siblings().find('div')).removeClass('tab-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tab-content-active');
    });

    // перемикач активності улюбленого товару
    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('favorite-active')
    });

    // слайдер популярних товарів - не працює
    $('.products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `
    });

    // Плагін стилізації бокового фільтру - jquery.formstyler
    $('.filter-style').styler();

    // Плагін ховає/показує длок під батьківським блоком
    $('.aside-filter__item-title').on('click', function () {
        $(this).toggleClass('filter__item-drop');
        // .slideToggle() - приховує блок
        $(this).next().slideToggle();
    });

    // Плагін шкала ціни
    $(".js-range-slider").ionRangeSlider({
        skin: "big",
        postfix: " грн"
    });

    // Відкривання додаткових елементів фільтру
    // перемикач активності улюбленого товару
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

});
