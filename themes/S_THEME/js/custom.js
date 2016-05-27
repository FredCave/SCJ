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

		// GRADIENTS INIT
	function gradientInit () {
		console.log("gradientInit");
		// WAIT 10 SEC BEFORE FADING IN OVER 30 SEC
		setTimeout ( function(){
			$("#gradient").animate({
				opacity : 0.75
			}, 30000 );
		}, 10000 );
	}

	// DOCS TOGGLE
	function pdfShow ( click ) {
		console.log("pdfShow");
		// GET HEIGHT BEFORE MODIFYING CSS
		var ulH = click.next(".info_documents_list").find("ul").height(); 
		click.next(".info_documents_list").css({
			"max-height" : ulH + 20
		});
		// REMOVE CURSOR POINTER ON TOGGLE
		click.removeClass("toggle_hover");
	}

	// INFO AS BACKGROUND

		// SET INFO HEIGHT TO IMAGES HEIGHT
	var imagesH = $("#images_wrapper").outerHeight();
	function docH () {
		console.log("docH");
		$("#info_wrapper").css({
			"height" : imagesH,
			"overflow" : "hidden"
		});
	}

		// REPEAT INFO WRAPPER
	function repeatInfo () {
		console.log("repeatInfo");
		// CALCULATE NO. OF TIMES INOF CAN BE REPEATED
		var infoH = $("#info_original").outerHeight();
		
		var repetitions = Math.ceil( imagesH / infoH );
		console.log(infoH, imagesH, repetitions);
		var clone = $("#info_original").clone().attr("id","");
		// TO AVOID TOO LARGE LOOPS
		if ( repetitions < 100 ) {
			for ( var i=0; i < repetitions; i++ ) {
				console.log( 78 );
				$("#info_clones").append( clone.html() );
			}
		}
	}

	// IMAGES SCROLL MARKERS

		// ASSIGN SCROLL MARKERS 
	function assignMarkers () {
		console.log("assignMarkers");
		$("#images_wrapper li").each( function(i){
			console.log( $(this).offset().top );
			$(this).attr( "data-marker", $(this).offset().top );
		});

	}

		// MARKER CHECK ON SCROLL
	function markerCheck ( scroll ) {
		console.log("markerCheck");
		// IF IMAGES ARE NOT HIDDEN
		if ( !$("#images_wrapper").hasClass("images_hidden") ) {
			$("#images_wrapper li").each( function() {
				if ( scroll > parseInt( $(this).attr("data-marker") ) ) {
					$(this).find("img").css( "opacity", "1" );
				} else {
					$(this).find("img").css( "opacity", "0" );
				}
			});
		}
	}

		// CHECK IF IMAGES ARE VISIBLE
	function imgVisCheck () {
		console.log("imgVisCheck");
		var imgVis = false;
		$("#images_wrapper img").each( function (i) {
			if ( $(this).css("opacity") == 1 ) {
				imgVis = true;
			}
		});
		if ( imgVis ) {
			$("#images_wrapper").addClass("images_vis");
		}
	}

		// POSITION IMAGES
	function posImgs () {
		console.log("posImgs");
		$("#images_wrapper img").each( function (i) {
			$(this).css({
			//	"margin-top" : 12 * i,
			//	"margin-left" : 12 * i
				"margin-top" : 48 * Math.random(),
				"margin-left" : 48 * Math.random()
			});
		});
	}

	// TOGGLE IMAGES
	function showInfo () {
		console.log("showInfo");
		// SET OPACITY ON IMGS
		$("#images_wrapper img").css({
			"opacity" : "0"
		});
		// ADD CLASS
		$("#images_wrapper").addClass("images_hidden");
	}

	// // SHOW IMAGES + BLOCK INFO WHEN AT BOTTOM

	// function unblockInfo () {
	// 	// UNFIX INFO + HIDE IMAGES
	// 	$("#info_wrapper").css({
	// 		"position" : "absolute",
	// 		"top" : ""
	// 	});
	// 	$("#images_wrapper").hide().removeClass("images_vis");
	// 	// RESET STORED SCROLL
	// 	$("#info_wrapper").attr("data-scroll", "0" );
	// }

	// function blockInfo ( scroll ) {
	// 	// console.log("blockInfo", scroll, $("#info_wrapper").attr("data-scroll"));
	// 	if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
 //       		console.log("bottom!");
 //       		// FIX INFO
 //       			// STORE SCROLL AMOUNT
 //       		if ( $("#info_wrapper").attr("data-scroll") === "0" ) {
 //       			$("#info_wrapper").attr("data-scroll", scroll ).css({
 //       				"position" : "fixed",
 //       				"top" : 0 - parseInt( $("#info_wrapper").attr("data-scroll") )
 //       			});
 //       			$("#images_wrapper").show().addClass("images_vis");
 //       			// ASSIGN MARKERS HERE
 //       			
 //       		} 
 //   		} else if ( $(window).scrollTop() <= parseInt( $("#info_wrapper").attr("data-scroll") ) ) {
	// 		unblockInfo();
 //   		}
	// }

	// // BLOCK INFO WHEN AT BOTTOM
	// var infoH = $("#info_wrapper").outerHeight(true);
	// var infH = $("#info_wrapper").height();
	// var winH = $(window).height();
	// function blockInfo ( scroll ) {	
	// 	console.log( 73, scroll, infoH, ( infH + 260), winH, (infoH - winH) );
	// 	// if ( scroll > ( infoH - winH  ) ) { // WHERE DOES THE 70 COME FROM ??
	// 		console.log("blockInfo" );
	// 	// 	$("#info_wrapper").css({
	// 	// 		"position" : "fixed",
	// 	// 		"top" : 0 - ( infoH - winH )
	// 	// 	});
	// 	// 	$("#images_wrapper").css({
	// 	// 		"position" : "absolute",
	// 	// 		"top" : infoH,
	// 	// 		"z-index" : 999
	// 	// 	});
	// 	// } else {
	// 	// 	$("#info_wrapper").css({
	// 	// 		"position" : "",
	// 	// 		"top" : ""
	// 	// 	});
	// 	// 	$("#images_wrapper").css({
	// 	// 		"position" : "",
	// 	// 		"top" : "",
	// 	// 		"z-index" : ""
	// 	// 	});			
	// 	// }
	// }

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

	$("#info_wrapper").on( "click", ".info_documents_toggle", function(e) {
		e.preventDefault();
		pdfShow( $(this) );
	});

	// $(".info_documents_toggle").on( "click", function(e) {
	// 	e.preventDefault();
	// 	pdfShow();
	// });

	$("#info_wrapper").on( "click", function(){
		// IF IMAGES ARE VISIBLE
		console.log(263);
		if ( $("#images_wrapper").hasClass("images_vis") ) {
			showInfo();
		}
	});

	var scrollPos;
	$(window).on( "load", function () {
		gradientInit();
		posImgs();
		repeatInfo();
		docH();
		assignMarkers();
	}).on( "resize", function() {
		assignMarkers();
		// RESET GRADIENT
		$("#gradient").css({
			"top" : 0,
			"left" : 0
		});
	}).on( "scroll", _.throttle( function() {
		scrollPos = $(window).scrollTop();
		imgVisCheck();
		markerCheck( scrollPos );
	}, 500 ) );

	// MOUSE MOVE DETECT
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