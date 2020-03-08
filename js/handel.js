new WOW().init();

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
};

$( document ).ready(function() {
    $("#lieferanten-logo-1").on("mouseenter", function(){
        animateCSS("#lieferanten-logo-1", "pulse")
    });

    $("#lieferanten-logo-2").on("mouseenter", function(){
        animateCSS("#lieferanten-logo-2", "pulse")
    });

    $("#lieferanten-logo-3").on("mouseenter", function(){
        animateCSS("#lieferanten-logo-3", "pulse")
    });

    $("#lieferanten-logo-4").on("mouseenter", function(){
        animateCSS("#lieferanten-logo-4", "pulse")
    });

    $("#lieferanten-logo-5").on("mouseenter", function(){
        animateCSS("#lieferanten-logo-5", "pulse")
    });
});

