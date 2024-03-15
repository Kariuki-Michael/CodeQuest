document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        speed: 1500,
        width: '100%',
        start: 10,
        perMove: 1,
        focus: '1',
        updateOnMove: true,
        gap: '1em',
        arrows: true,
        pagination: true,
        rewind: true,
        rewindByDrag: true,
        drag: 'free',
        snap: true,
        autoplay: true,
        interval: 2000,
        keyboard: true,
        lazyLoad: 'sequential',
        breakpoints: {
            640: {
                perPage: 2,
            },
            475: {
                perPage: 1,
            }
        },
        reducesMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: 'pause',
        },
    });
    splide.mount();
});

const photoSlider = document.querySelector('#photo-slider');
const viewBtn = document.querySelector('#view-all-btn');
const imageGallery= document.querySelector('#image-gallery');
const closeBtn = document.querySelector('#close-btn');

viewBtn.addEventListener('click', () => {
    photoSlider.classList.add('hidden');
    imageGallery.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    photoSlider.classList.remove('hidden');
    imageGallery.classList.add('hidden');
});
