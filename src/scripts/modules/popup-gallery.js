import $ from "jquery";

export let popupGallery = () => {
	$('.js-mtp-gallery').each(function () {
		$(this).magnificPopup({
			delegate: '.js-mtp-gallery-item',
			type: 'image',
			closeBtnInside: true,
			fixedContentPos: true,
			fixedBgPos: true,
			showCloseBtn: true,
			closeOnBgClick: true,
			enableEscapeKey: true,
			gallery: {
				enabled: true,
				tCounter: '%curr% / %total%',
				preload: [0, 1]
			},
			image: {
				markup: '<div class="mfp-figure">' +
					'<button type="button" class="mfp-close"></button>' +
					'<div class="mfp-img"></div>' +
					'<div class="mfp-bottom-bar">' +
					'<div class="mfp-title"></div>' +
					'<div class="mfp-counter"></div>' +
					'</div>' +
					'</div>',

				// titleSrc: function (item) {
				//     return item.el.find('img').attr('title');
				// }
			}
		});
	})
}

