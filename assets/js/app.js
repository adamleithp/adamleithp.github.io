

$(document).foundation();


//custom js goes here

// Unwrap Images
$("p:has(img)").contents().unwrap();


(function() {
	var stageH = $(".stage").height(),
		stageImgH = $(".stage__img").height();
	if (stageImgH <= stageH) {
		$(".stage__img").addClass("stage__img--fix");
	}
	
})();



// var $document = $(document),
//     $element = $('.stage__img'),
//     className = 'stage__img--blur',
//     stageH = $(".stage").height();

//     $element.css({"opacity":"1"});

// $document.scroll(function() {
//   if ($document.scrollTop() >= stageH) {
//     // user scrolled 50 pixels or more;
//     // do stuff
//     $element.addClass(className);
//   } else {
//     $element.removeClass(className);
//   }
// });

// Add current url links active class
$("a").filter(function() {
    return this.href === document.location.href;
}).addClass("active");


//Overlay FadeIn
(function() {
	var loading_overlay = $(".overlay--loading");
		loading_overlay.fadeOut(500);
})();


// Fixed footer
// If content is shorter than screen - footer size, apply fixed class.
(function() {
	var footer = $(".footer-wrap"),
		footerHeight = $(".footer-wrap").outerHeight(),
		content = $(".content-wrap"),
		screenHeight = $(window).height(); 

		if (content.outerHeight() < screenHeight - footerHeight) {
			footer.addClass("fixed--footer");
		}
		else {
			footer.removeClass("fixed--footer");
		}
})();