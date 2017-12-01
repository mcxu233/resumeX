$(function () {
    $('#dowebok').fullpage({
        autoScrolling: false
    });

    $(".skill-list").hover(function () {
        $(this).find(".skill-detail").fadeToggle(200);
    });
});