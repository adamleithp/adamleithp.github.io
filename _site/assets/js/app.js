

// Unwrap Images
$("p:has(img)").contents().unwrap();





// // dropdown
// (function() {
// 	var dropdown_trigger = $(".trigger-dropdown"),
// 		dropdown = $(".dropdown-menu");

// 	if (dropdown.hasClass("dropdown-menu--active"));

// 	dropdown_trigger.on("click", function(e) {
// 		e.preventDefault()
// 		dropdown.addClass("dropdown-menu--active");
// 	});


// })();


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



//menu
(function() {
	var menuTrigger 	= $(".mobile-button--open");
		menu 			= $("header");

	menu.hide();

		menuTrigger.on("click", function(e) {
			e.preventDefault();

			if(menu.hasClass("hidden")) {
				menu.removeClass("hidden");
				menu.fadeIn(500);
			}
			else {
				menu.addClass("hidden");
				menu.fadeOut(500);
			}

		})
})();




//Content slide
(function() {
	var content = $(".content");

	setTimeout(function(){
		content.removeClass("content--ani");
	}, 100);
})();









