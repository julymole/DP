import $ from "jquery";
import "magnific-popup";

$(document).on('mouseenter', '.header__nav-menu-item--dropdown', function () {
    $(this).children('.submenu').fadeIn();
    console.log('in');
});
$(document).on('mouseleave', '.header__nav-menu-item--dropdown', function () {
    $(this).children('.submenu').fadeOut();
    console.log('out');
});

$('[data-modal]').magnificPopup({
   type: 'inline'
});
