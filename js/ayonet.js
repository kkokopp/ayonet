let rotate = function(icon) {
    icon.querySelector("span").classList.toggle("rotate-90");
    icon.querySelector("span").classList.toggle("text-white");
    icon.querySelector("a").classList.toggle("bg-gradient-to-r");
    icon.querySelector("a").classList.toggle("from-cyan-500");
    icon.querySelector("a").classList.toggle("to-blue-700");
    icon.querySelector("h1").classList.toggle("text-white");

}

const width = window.innerWidth;

if( width >=900 ){
    
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".cont-item", {
        duration: 1000,
        origin: "bottom",
        distance: "100px",
        easing: "cubic-bezier(.37,.01,.74,1)",
        opacity: 0.3,
        scale: 0.5
    });
    
    ScrollReveal().reveal(".slide-right", {
        duration: 2000,
        origin: "left",
        distance: "300px",
        easing: "ease-in-out"
    });
    
    ScrollReveal().reveal(".slide-left", {
        duration: 2000,
        origin: "right",
        distance: "300px",
        easing: "ease-in-out"
    });
}else if( width < 900 ){
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".slide-700", {
        duration: 900,
        origin: "right",
        distance: "-50px",
        easing: "ease-in-out"
    });
    ScrollReveal().reveal(".cont-item", {
        duration: 800,
        origin: "bottom",
        distance: "100px",
        easing: "cubic-bezier(.37,.01,.74,1)",
        opacity: 0.3,
        scale: 0.5
    });
}

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});