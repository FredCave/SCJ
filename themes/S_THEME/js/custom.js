$(document).ready(function () {				

/********************************************
		
		FUNCTIONS
	
********************************************/

	// INFO FOCUS

	function infoFocus () {
		console.log("infoFocus");
		$("#info_wrapper").css({
			"-webkit-filter" : "blur(0px)",
					"filter" : "blur(0px)"
		});
	}

	function infoBlur () {
		console.log("infoBlur");
		$("#info_wrapper").css({
			"-webkit-filter" : "",
					"filter" : ""
		});
	}

	// GRADIENTS
	function gradient ( x, y ) {
		// console.log( x, y );
		var r = parseInt ( ( $(window).width() - x ) / $(window).width() * 255 );
		var g = parseInt ( ( $(window).height() - y ) / $(window).height() * 255 );
		var b = parseInt ( ( $(window).width() - x ) / $(window).width() * 125 ) + parseInt ( ( $(window).height() - y ) / $(window).height() * 125 );
		// console.log(r, g, b);
		$("#gradient").css({
		    "background" : "-moz-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, black), color-stop(50%, rgba("+r+", "+g+", "+b+", 0.5)))",
		    "background" : "-webkit-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-o-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-ms-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "radial-gradient(ellipse at center, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)"	
		});

	}

	// PDFs SHOW
	function pdfShow () {
		console.log("pdfShow");
		// GET HEIGHT BEFORE MODIFYING CSS
		var ulH = $("#info_documents_list ul").height(); 
		$("#info_documents_list").css({
			"max-height" : ulH + 20
		});
		// REMOVE CURSOR POINTER ON TOGGLE
		$("#info_documents_toggle").removeClass("toggle_hover");
	}

	// GRADIENTS INIT
	function gradientInit () {
		console.log("bgInit");
		// WAIT 10 SEC BEFORE FADING IN OVER 20 SEC
		setTimeout ( function(){
			$("#gradient").animate({
				opacity : 0.3
			}, 20000 );
		}, 10000 );
	}

	// // SLIDESHOW INIT
	// function slideInit () {
	// 	console.log("slideInit");
	// 	var bgSrc = $(".slow_slide:first-child").attr("data-lrg");
	// 	console.log(bgSrc);
	// 	$(".slow_slide:first-child").addClass("visible").css({
	// 		"background-image" : "url(" + bgSrc +")"	
	// 	});

	// 	setInterval( function(){
	// 		slideGo();
	// 	}, 10000 );
	// }

	// function slideGo() {
	// 	console.log("slideGo");		
	// 	var visSlide = $(".slow").find(".visible");
	// 	console.log( visSlide.next().length );
	// 	// IF NEXT EXISTS
	// 	if ( visSlide.next().length ) {			
	// 		// MAKE NEXT VISIBLE
	// 		visSlide.removeClass("visible").next().addClass("visible").css({
	// 			"background-image" : "url(" + $(".visible").attr("data-lrg") +")"	
	// 		});
	// 		$(".blur").css({
	// 			"background-image" : "url(" + $(".visible").attr("data-lrg") +")"
	// 		});
	// 	} else {		
	// 		// GO BACK TO BEGINNING
	// 		visSlide.removeClass("visible");
	// 		visSlide.parent().find("li:first-child").addClass("visible").css({
	// 			"background-image" : "url(" + $(".visible").attr("data-lrg") +")"	
	// 		});
	// 	}
	// }



/********************************************
		
		EVENTS
	
********************************************/

	$("#info_documents_toggle").on( "click", function(e) {
		e.preventDefault();
		pdfShow();
	});

	$(window).on( "load", function () {
		gradientInit();
	});

	var timer;
	$(window).on( "mousemove", function (e) {
		// FOCUS TEXT
		infoFocus();
		// STOP TEXT REBLURRING
		clearTimeout(timer);
		// IF NO MOVEMENT FOR 30 SECS
		timer = setTimeout( function(){
			infoBlur();
		}, 30000 );

		// MOVE GRADIENT
		$("#gradient").css({
			"top" : e.clientY,
			"left" : e.clientX
		});
		// CHANGE GRADIENT COLOUR
		gradient( e.pageX, e.pageY );

		// ??
		$(".blur").css({
			"top" : e.clientY,
			"left" : e.clientX,
			"background-position" : ( 0 - e.pageX ) + "px " + ( 0 - e.pageY ) + "px"
		});
	});

});