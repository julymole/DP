import {press} from "../init-functions";


export let spoilerInit = () => {
	let spoilerSection = document.querySelectorAll('.js-spoiler');
	if (spoilerSection) {
		spoilerSection.forEach((section) => {
			let spoilerItem = section.querySelectorAll('.js-spoiler-item'),
				allButtons = section.querySelectorAll('.js-spoiler-button'),
				allContentBlocks = section.querySelectorAll('.js-spoiler-content');
			spoilerItem.forEach((item) => {
				let button = item.querySelector('.js-spoiler-button'),
					content = item.querySelector('.js-spoiler-content');

				button.addEventListener(press, () => {
					allButtons.forEach((btn) => {
						btn.classList.remove('mtp__spoiler-button--open')
					})
					allContentBlocks.forEach((block) => {
						$(block).stop().slideUp()
					})

					button.classList.add('mtp__spoiler-button--open');
					$(content).stop().slideToggle();
				})
			})
		})
	}
}
