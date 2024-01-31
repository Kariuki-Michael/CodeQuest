document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', 
    {
        type: 'loop',
        perPage: 2,
        width: '100%',
        gap: '.8em',
        padding: '.5em',
        pagination: true,
        paginationClickable: true,
        arrows: true,
        speed: 1700,
        autoplay: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
            475:{
                perPage: 1
            }
        }
    });
    splide.mount();
});