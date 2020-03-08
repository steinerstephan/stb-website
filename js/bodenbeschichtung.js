$( document ).ready(function() {
    $(".bodenbeschichtung-tab").on("click", function(){
        $('html, body').animate({ scrollTop: ($("#top").offset().top) - 50}, 'fast');
    });
});