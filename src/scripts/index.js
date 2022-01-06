import './libs';
import {body, press} from './init-functions';

let goAboutUs = () => {
	let btnGo = document.querySelector('.js-go-to-about'),
		content = document.querySelector('.js-about-us'),
		linksBlock = document.querySelector('.js-main__links');
	if (btnGo) {
		btnGo.addEventListener(press, () => {
			content.classList.add('active');
			linksBlock.classList.add('dark')
		});
	}
}

let goPrev = () => {
	let btnPrev = document.querySelector('.js-arrow'),
		content = document.querySelector('.js-about-us'),
		linksBlock = document.querySelector('.js-main__links');
	if (btnPrev) {
		btnPrev.addEventListener(press, () => {
			content.classList.remove('active');
			linksBlock.classList.remove('dark');
		});
	}
}
document.addEventListener('DOMContentLoaded', () => {
	goAboutUs();
	goPrev();
});


body.on(press, '.js-dropdown-btn', function () {
	$('.js-dropdown-content').stop().slideToggle(300);
	$(this).toggleClass('active');
});
