$(document).foundation(); // run foundation
// Options
var FixedFooterOn = true; // Fixed footer on/off true








// Functions
//Overlay FadeOut
(function() {
	var loading_overlay = $(".overlay--loading");
		loading_overlay.fadeOut(500);
})();

// Fixed footer
// If content is shorter than screen - footer size, apply fixed class.
function FixedFooter(){
	var $footer = $(".footer"),
		$footerHeight = $(".footer").outerHeight(),
		$content = $(".wrap"),
		screenHeight = $(window).height();

	if ($content.outerHeight() < screenHeight - $footerHeight) {
		$footer.addClass("fixed--footer");
	}
	else {
		$footer.removeClass("fixed--footer");
	}
}

(function() {
	if(FixedFooterOn === true) { // boulean set at the top of this file.
		$(window).resize(function() {
		  	FixedFooter(); 	// Run Fixed Footer on resize.
		});
			FixedFooter();  // Run Fixed Footer on load of page.
	}
})();



(function() {
	var trigger = $(".menu-trigger"),
		postWrap = $(".post__wrap"),
		postContent = $(".post__content"),
		postTrigger = $(".stage--button"),
		contentWrap = $(".content-wrap");






	// Menu Button (burgers)
	trigger.on("click", function() {
		if (postWrap.hasClass("post__wrap--active")) {
			postWrap.removeClass("post__wrap--active");
			contentWrap.removeClass("content-wrap--active");
		}
		else {
			postWrap.addClass("post__wrap--active");
			//$(".post").animate({scrollTop:100}, 'slow');
			postContent.removeClass("post__content--active");
			contentWrap.addClass("content-wrap--active");

			postContent.removeClass("cf");

		}
	});





	// Click stage button to show content 
	postTrigger.on("click", function(e) {
		e.preventDefault();
		postContent.addClass("post__content--active");
		
		setTimeout(function(){
			//$(window).animate({ scrollTop: $('#post__content').offset().top }, 500);
		},100);
	});




	// // Click stage button to show content 
	// postWrap_post.on("click", function() {	
	// 	console.log("clicked");
	// 	$(window).scrollTop($(this).offset().top);

	// });







})();



(function() {
	var postWrap_post = $(".post__wrap--active .post");


	postWrap_post.on("click", function() {
		$(window).animate({scrollTop: $(this).offset().top},500);
		// $(window).scrollTop($(this).offset().top);
		// $(this).unbind('click');
	});
})();






// (function() {
// 	var trigger = $(".post");

// 	trigger.on("click", function() {
// 		$('.content-wrap').animate({scrollTop: $(this).offset().top},500);
// 		//$(this).unbind('click');
// 	});
// })();
function stagePush(){
	var body = $("body");
		postWrap = $(".post__wrap");

	$(".post").width(body.width());

	var width = 0;
	$('.post').each(function() {
	    width += $(this).outerWidth( true );
	});
	//postWrap.css('width', width);
}

// get height of stage and push content down + more.
(function() {

	$(window).resize(function() {
		stagePush(); 	// Run Fixed Footer on resize.
	});
		stagePush();
})();





// slider

var canvasMask = new Dragdealer('postWrap', {
	x: 0,
	speed: 0.3,
	activeClass: 'post--active',
	css3: true,
	steps: 4,
	requestAnimationFrame: true,
	animationCallback: function(x, y) {
		console.log("action");
	}
});

// Bind event on the wrapper element to prevent it when a drag has been made
// between mousedown and mouseup (by stopping propagation from handle)
 $('.handle').on('click', '.postLink', function(e) {
	e.preventDefault();
	var anchor = $(e.currentTarget);
	canvasMask.setValue(anchor.data('x'));
	console.log($(this).data('x'));
});

// create link tag to when menu is open

(function() {
	// var $parentVal = $(this).parent().data('x');
	// 	$postLink = $( "<a href='#' class='postLink'></a>" ),

	// $( ".post" ).append($postLink);
	//$(".postLink").attr('href', $parentVal);	
	//$(".postLink").attr.replace('[href]', $parentVal);
	


	// function addLink(){
	// 	//$(".post").append($postLink.href=$parentVal);
	// 	$(".post").append($postLink.href=$parentVal);
	// }
	// $( ".post" ).each(function() {
	//   $(this).find($(".postLink")).attr('href', '' + $parentVal + '');
	// });
	
	//console.log($parentVal);	


})();
// a.forEach(function(entry) {
//     console.log(entry);
// });


// $(".post").click(function(){
//      window.location=$(this).find("a").attr("href"); 
//      return false;
// });





//$(".postLink").attr('href', '"$(this).parent().data('x'))"';	
// $



// get 
// function handler( event ) {
//   var target = $( event.target );
//   if ( target.is( "li" ) ) {
//     target.children().toggle();
//   }
// }
// $( "ul" ).click( handler ).find( "ul" ).hide();












