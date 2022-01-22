$(window).scroll(function() {
var theta = $(window).scrollTop() / 600 % (2 * Math.PI);
$('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});