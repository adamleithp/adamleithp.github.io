

// Center About text vertically
// Adding padding to top, and bottom of .about
function centerAboutVertically(){
	var $stage = $(".stage"),
		$aboutHeight = $(".about").outerHeight(),
		$stageHeight = $(".stage").outerHeight(),
		screenHeight = $(window).height();

		$stage.css({"padding-top": $(window).height()/2 - $aboutHeight/2} );
		$stage.css({"padding-bottom": $(window).height()/2 - $aboutHeight/2} );
}
centerAboutVertically();



//  Tab System
(function() {
	var button 	= $(".content__button");
		content 	= $(".content"),
		contentHeight = $(".content").outerHeight(),
		contentTextHeight = $(".content__text").outerHeight() + 50,

	button.on("click", function(e) {
		e.preventDefault();

		// HIDE MENU
		if(content.hasClass("content__open")) {
			content.removeClass("content__open");
			button.removeClass("content__open")
			content.css({"max-height": contentHeight});
		}
		// SHOW MENU
		else {
			content.addClass("content__open");
			button.addClass("content__open");
			content.css({"max-height": contentTextHeight});
		}
	})
})();









// Iframe resizing test
// var isResizing = false,
//     lastDownX = 0;

// $(function () {
//     var container = $('#grabber'),
//         left = $('#grabber__left'),
//         right = $('#grabber__right'),
//         handle = $('#grabber__handle');

//     handle.on('mousedown', function (e) {
//         isResizing = true;
//         lastDownX = e.clientX;
//     });

//     $(document).on('mousemove', function (e) {
//         // we don't want to do anything if we aren't resizing.
//         if (!isResizing) 
//             return;
        
//         var offsetRight = container.width() - (e.clientX - container.offset().left);

//         left.css('right', offsetRight);
//         right.css('width', offsetRight);
//     }).on('mouseup', function (e) {
//         // stop resizing
//         isResizing = false;
//     });
// });
// $('#grabber__right').delay(5000).animate({width: '100%'}, 5000);
// $('#grabber__right').delay(5000).animate({width: '20%'}, 5000);






