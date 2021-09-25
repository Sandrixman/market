$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__inner-btn banner-section__inner-btnprev"><img src="/images/left-arrow.svg"     alt=""></button> ',
        nextArrow: `<button class="banner-section__inner-btn banner-section__inner-btnnext"><img src="/images/right-arrow.svg" alt="" ></button> `
    });

    // перемикач табів
    $('.tab').on('click', function (e) {
        e.preventDefault();

        $('.tab').removeClass('tab-active');
        $('.tab-content').removeClass('tab-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tab-content-active');
    });

    // перемикач активності улюбленого товару
    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('favorite-active')
    });

    // слайдер популярних товарів
    // $('.products-slider__item').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // });

});
