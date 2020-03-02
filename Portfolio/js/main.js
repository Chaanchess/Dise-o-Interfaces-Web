$(function () {
    $('html,body').hide();
    $('html,body').fadeIn(2000);

    $("#aboutMe").click(function () {
        $('.myDiv').slideDown("slow");
        $('#flechaAbajo').hide(500);
        $('html, body').animate({
            scrollTop: $("#sobreMi").offset().top
        }, 2000);
    });

    $("#mySkills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
    });

    $("#proyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#proyectosSection").offset().top
        }, 2000);
    });

    $("#experience").click(function () {
        $('html, body').animate({
            scrollTop: $("#experiencia").offset().top
        }, 2000);
    });

    $("#contactoMenu").click(function () {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
        }, 2000);
    });

    $('#abrirMenu').on('click', function (e) {
        if ($("nav").css("display") === "none") {
            $("#myTopnav").addClass("topnavresponsive");
            $("#myTopnav").removeClass("topnav");
            $("nav").slideToggle();
        } else {
            $("nav").slideToggle();
            $("#myTopnav").addClass("topnav");
            $("#myTopnav").removeClass("topnavresponsive");
        }
    });

    let $nav = $("nav");
    let $myTopNav = $("#myTopnav");
    if ($(window).width() > 1023)
        $nav.show();
    $(window).resize(function () {
        if ($(window).width() > 1023)
            $nav.show();
        else if ($(window).width() < 1024 && $myTopNav.hasClass("topnav"))
            $nav.hide();
    });


    $('#flechaArriba').on('click', function (e) {
        $('.myDiv').slideUp("slow");
        $('#flechaAbajo').show(500);
    });

    $('#flechaAbajo').on('click', function (e) {
        $('.myDiv').slideDown("slow");
        $('#flechaAbajo').hide(500);
    });
});

