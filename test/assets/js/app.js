

// // Unwrap Images
// // for images inside p tags
// $("p:has(img)").contents().unwrap();

// // Add current url links active class
// $("a").filter(function() {
//     return this.href === document.location.href;
// }).addClass("active");

// //Overlay FadeIn
// (function() {
// 	var loading_overlay = $(".overlay--loading");
// 		loading_overlay.delay(100).fadeOut(250);
// })();

// IF  is bigger then Stage, make Stage height auto



//  Tab System
(function() {
	var button 	= $(".content__button");
		content 	= $(".content"),
		contentHeight = $(".content").outerHeight(),
		contentTextHeight = $(".content__text").outerHeight() + 50;

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












