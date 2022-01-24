const tl = gsap.timeline({ defaults: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);
gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: 'bottom center',
        markers: true,
        toggleActions: "play none none reverse",
        scrub: 1
    },
    opacity: 0.4,
    ease: Power2.easeInOut
})



$(window).scroll(function() {
var theta = $(window).scrollTop() / 600 % (2 * Math.PI);
$('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});
const ck = document.getElementById("checkbox");
ck.addEventListener("change", () => {
    document.getElementsByTagName("nav")[0].classList.toggle("dark");
    document.getElementById("wave").setAttribute("fill", ck.checked ? "#0b1339" : "#003b4d");
    document.getElementsByTagName("main")[0].classList.toggle("dark");
})
