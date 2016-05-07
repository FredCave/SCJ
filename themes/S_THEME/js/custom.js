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

	// BG INIT
	function bgInit () {
		console.log("bgInit");
		var bgSrc = $(".bg_image li:first-child").attr("data-lrg");
		console.log(bgSrc);
		$(".bg_image li:first-child").addClass("visible").css({
			"background-image" : "url(" + bgSrc +")"	
		});
	}



	// SLIDESHOW INIT
	function slideInit () {
		console.log("slideInit");
		var bgSrc = $(".slow_slide:first-child").attr("data-lrg");
		console.log(bgSrc);
		$(".slow_slide:first-child").addClass("visible").css({
			"background-image" : "url(" + bgSrc +")"	
		});

		setInterval( function(){
			slideGo();
		}, 10000 );
	}

	function slideGo() {
		console.log("slideGo");		
		var visSlide = $(".slow").find(".visible");
		console.log( visSlide.next().length );
		// IF NEXT EXISTS
		if ( visSlide.next().length ) {			
			// MAKE NEXT VISIBLE
			visSlide.removeClass("visible").next().addClass("visible").css({
				"background-image" : "url(" + $(".visible").attr("data-lrg") +")"	
			});
			$(".blur").css({
				"background-image" : "url(" + $(".visible").attr("data-lrg") +")"
			});
		} else {		
			// GO BACK TO BEGINNING
			visSlide.removeClass("visible");
			visSlide.parent().find("li:first-child").addClass("visible").css({
				"background-image" : "url(" + $(".visible").attr("data-lrg") +")"	
			});
		}
	}

	function gradient ( x, y ) {
		console.log( x, y );
		var r = parseInt ( ( $(window).width() - x ) / $(window).width() * 255 );
		var g = parseInt ( ( $(window).height() - y ) / $(window).height() * 255 );
		var b = parseInt ( ( $(window).width() - x ) / $(window).width() * 125 ) + parseInt ( ( $(window).height() - y ) / $(window).height() * 125 );
		console.log(r, g, b);
		$("#gradient").css({
		    "background" : "-moz-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, black), color-stop(50%, rgba("+r+", "+g+", "+b+", 0.5)))",
		    "background" : "-webkit-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-o-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "-ms-radial-gradient(center, ellipse cover, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)",
		    "background" : "radial-gradient(ellipse at center, black 0%, rgba("+r+", "+g+", "+b+", 0.5) 50%)"	
		});

	}

/********************************************
		
		EVENTS
	
********************************************/

	$(window).on( "load", function () {
		// slideInit();
		bgInit();
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