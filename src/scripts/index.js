import './libs'
import {Swiper, Navigation, Pagination, Autoplay, EffectCube, EffectFade} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

function initMainSlider() {

	let photoSlider = $('.js-main-slider');
	if (photoSlider.find('.js-swiper-slide').length > 0) {
		new Swiper('.js-main-slider .swiper-container', {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			/*effect: 'cube',
			cubeEffect: {
				slideShadows: false,
			},*/
			effect: 'fade',
			fadeEffect: {
				crossFade: false
			},

			pagination: {
				el: '.main-swiper-pagination',
				type: 'bullets',
				dynamicBullets: true,
			},

			navigation: {
				prevEl: '.js-main-slider__btn--prev',
				nextEl: '.js-main-slider__btn--next'
			}

		});
	}
}

initMainSlider();
