document.addEventListener('DOMContentLoaded', function(){
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        padding: '3.2em',
        rewind: true,
        speed: 2500,
        focus: 'center',
        arrows: false,
        autoplay: true,
        interval: 5000
    });
    splide.mount();
});