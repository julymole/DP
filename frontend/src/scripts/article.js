import Swiper from "swiper";
import 'magnific-popup/dist/jquery.magnific-popup'
import './libs'
import {body, press} from './init-functions';
import {popupGallery} from './modules/popup-gallery';
import {spoilerInit} from './modules/spoilers';
import {sliderInit, sliderPopup} from './modules/slider';






document.addEventListener('DOMContentLoaded', () => {
	spoilerInit();
	popupGallery();
	sliderInit();
	sliderPopup();
});

