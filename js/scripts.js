$(document).ready((function() {
    var e = [".about__header", ".cart-team__img", ".portfolio__item", ".blog-cart__img", ".reviews__img", ".block-map__container", ".blog-preview-cart__img", ".cart-post-min__img", ".flickr-photos__item", ".comments__avatar"];
    for (let s = 0; s < e.length; s++) {
        function a() {
            $.each($(e[s]), (function(e, a) {
                $(this).find("img").length > 0 && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")')
            }
            ))
        }
        a()
    }
    $(".header__burger").click((function(e) {
        $(".header__burger,.header__menu").toggleClass("active"),
        $("body").toggleClass("lock")
    }
    )),
    $(".slider").slick({
        arrows: !0,
        dots: !1,
        appendArrows: $(".header__slider-nav>._container"),
        slidesToShow: 1,
        autoplay: !0,
        draggable: !0,
        speed: 1500,
        autoplaySpeed: 6e3
    }),
    $(".slider-team").slick({
        arrows: !1,
        dots: !1,
        slidesToShow: 3,
        autoplay: !0,
        draggable: !0,
        speed: 1500,
        autoplaySpeed: 6e3,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 630,
            settings: {
                slidesToShow: 1
            }
        }]
    }),
    $(".reviews__slider").slick({
        arrows: !1,
        dots: !0,
        slidesToShow: 1,
        autoplay: !0,
        draggable: !0,
        speed: 1500,
        autoplaySpeed: 6e3
    }),
    $("div.tabs__nav").on("click", "div:not(.active)", (function() {
        $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active")
    }
    )),
    $(".masonry__body").masonry({
        itemSelector: ".masonry__item",
        columnWidth: ".masonry__item",
        gutter: 30
    })
}
));
