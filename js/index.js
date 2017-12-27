$(function () {
    $('#main').fullpage({
        autoScrolling: false
    });

    $(".skill-list").hover(function () {
        $(this).find(".skill-detial").fadeToggle(200);
    });
});