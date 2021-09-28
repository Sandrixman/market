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

});
