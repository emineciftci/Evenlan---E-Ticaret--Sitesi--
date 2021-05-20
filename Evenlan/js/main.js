var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, //kaç tane gözükeceğini belirlemiş oluyoruz.
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true, //8.slayt bittikten sonra da tekrar bu sayede 1. den devam ediyor
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true, //paginationuma tıkladığımda çalışması için
    },
    breakpoints: {
        300: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});

/*Swiper-2*/
var swiper = new Swiper('.all-con .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    freeMode: true, //özgürce kaydırmak için
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
        300: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});