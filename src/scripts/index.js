import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

console.log('webpack starterkit');


jQuery(document).ready(function($) {


    $("#fullpage").fullpage({
        controlArrows: false,
    });

    $('.popup').magnificPopup({
        closeOnBgClick: true,
        fixedContentPos: false,
    });

    $('.popup').magnificPopup({
        callbacks: {
            open: function() {
                jQuery('body').addClass('magnificpopupnoscroll');
            },
            close: function() {
                jQuery('body').removeClass('magnificpopupnoscroll');
            }
        }
    });
});

var startWindowScroll = 0;