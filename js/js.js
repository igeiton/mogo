"use strict"

$(window).resize(navInBurger(), function() {if ($(window).width() > 768 && $(window).width() < 800) {location.reload();console.log(123);}})

function navInBurger() {
    var headerItems = $(".header_menu_items")
    var headerBurger = $(".header_menu_burger")
    if($(window).width() < 768) {
        $(headerItems).appendTo($(headerBurger))
    }
}


$(".header_menu_burger-close_symbol").addClass("none")
$(".open-close").click(function() {
    if ($(window).width() < 768) {
        var headerBurgerItems = $(".header_menu_items")
        if (!$(headerBurgerItems).hasClass("done")) {
            $(headerBurgerItems).addClass("done")
            $("body").css("overflow", "hidden")
        }
        else if ($(headerBurgerItems).hasClass("done")) {
            $(headerBurgerItems).removeClass("done")
            $("body").css("overflow", "auto")
        }
    }
    $(".header_menu_burger-open_symbol").toggleClass("none")
    $(".header_menu_burger-close_symbol").toggleClass("none")
    $(".logo, .header_menu_items").toggleClass("header-black_color")
})



$(window).ready(stickerNumberFontSizeFunction)
$(window).resize(stickerNumberFontSizeFunction)

function stickerNumberFontSizeFunction() {
    var stickerNumber = $('.sticker-number')
    stickerNumber.each(function() {
        var fzStickerNumber = 25 * $('.main__block-08_images_content-img img').width() / 380
        stickerNumber.css("font-size", fzStickerNumber+"px")
    })
}