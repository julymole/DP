import Swiper, {Navigation, Pagination, Lazy, Autoplay,} from 'swiper';

Swiper.use([Navigation, Pagination, Lazy, Autoplay]);
import './libs'
import {body, press} from './init-functions';

$('body').on('click', '.js-video-play', function (e) {
	$(this).hide();
	$('.js-video__banner').hide();
	//$('.js-video').find('iframe').show();
	$('.js-video').find('iframe')[0].src += "?autoplay=1";
});


let initPartSlider = () => {

	let photoSlider = document.querySelector('.js-part-slider');
	if (photoSlider) {
		new Swiper('.js-part-slider .swiper-container', {
			slidesPerView: 1,
			autoHeight: false,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: '.part-swiper-pagination',
				type: 'bullets',
				dynamicBullets: true,
			},

			navigation: {
				prevEl: '.js-part-slider__btn--prev',
				nextEl: '.js-part-slider__btn--next'
			},
			lazy: true,
		});
	}

}
document.addEventListener('DOMContentLoaded', () => {
	initPartSlider();
});
