new Swiper('.best-sellers__slider', {
	slidesPerView: 1.3,
	spaceBetween: 24,
	navigation: {
		prevEl: '.best-sellers__slider-button-left',
		nextEl: '.best-sellers__slider-button-right',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3.4,
		},
		620: {
			slidesPerView: 2.3,
		},
		480: {
			slidesPerView: 1.8,
		},
	},
});
