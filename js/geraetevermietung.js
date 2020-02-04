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
    $("#ziegelsäge-button").on("mouseenter", function(){
        animateCSS("#ziegelsäge-button", "pulse")
        
    });
    $("#rüttelplatte-button").on("mouseenter", function(){
        animateCSS("#rüttelplatte-button", "pulse")
    });
    $("#erdbohrer-button").on("mouseenter", function(){
        animateCSS("#erdbohrer-button", "pulse")
    });
    $("#schraubstützen-button").on("mouseenter", function(){
        animateCSS("#schraubstützen-button", "pulse")
    });
    $("#anhänger-button").on("mouseenter", function(){
        animateCSS("#anhänger-button", "pulse")
    });
    $("#stemmhammer-button").on("mouseenter", function(){
        animateCSS("#stemmhammer-button", "pulse")
    });
    $("#betonschleifmaschine-125-button").on("mouseenter", function(){
        animateCSS("#betonschleifmaschine-125-button", "pulse")
    });
    $("#betonschleifmaschine-50-button").on("mouseenter", function(){
        animateCSS("#betonschleifmaschine-50-button", "pulse")
    });
    $("#staubabsaugung-button").on("mouseenter", function(){
        animateCSS("#staubabsaugung-button", "pulse")
    });

});

