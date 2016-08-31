$(document).ready(function () {				

/********************************************
		
		FUNCTIONS
	
********************************************/

	// INFO FOCUS
	function infoFocus () {
		// console.log("infoFocus");
		$("#info_wrapper").css({
			"-webkit-filter" : "blur(0px)",
					"filter" : "blur(0px)"
		});
	}

	function infoBlur () {
		// console.log("infoBlur");
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
			$("#gradient").addClass("gradient_vis");
		}, 10000 );
	}

		// HIDE GRADIENT IF ANDROID
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	console.log( ua, isAndroid );
	if(isAndroid) {
		$("#gradient").hide();
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
		// REMOVE DISABLED CLASS FROM LINKS
		click.next(".info_documents_list").find(".disabled").removeClass("disabled");
	}

	// INFO AS BACKGROUND

		// SET INFO HEIGHT TO IMAGES HEIGHT
	function setInfoH () {
		console.log("setInfoH");
		// WAIT UNTIL IMAGES HAVE LOADED
		$("#images_wrapper").imagesLoaded( function() {
			console.log("setInfoH", $("#images_wrapper").outerHeight(), $("#info_wrapper").height() );
			$("#info_wrapper").css({
				"height" : $("#images_wrapper").outerHeight(),
				"overflow" : "hidden"
			});
			// RUN REPEAT INFO FUNCTION
			repeatInfo();
			// RECORD INFOH AS ATTRIBUTE
			$("#info_wrapper").attr( "data-height", $("#images_wrapper").outerHeight() );	
		});
	}

		// REPEAT INFO WRAPPER
	function repeatInfo () {
		console.log("repeatInfo");
		// CALCULATE NO. OF TIMES INFO CAN BE REPEATED
		var infoH = $("#info_original").outerHeight(),
			lastH = parseInt( $("#info_wrapper").attr( "data-height" ) );
		console.log( 88, $("#images_wrapper").outerHeight(), lastH );
		// IF LARGER THAN RECORDED HEIGHT
		if ( $("#images_wrapper").outerHeight() > lastH ) {
			var repetitions = Math.ceil( ( $("#images_wrapper").outerHeight() - lastH ) / infoH );
			console.log(85, infoH, $("#images_wrapper").outerHeight(), repetitions);
			var clone = $("#info_original").clone().attr("id","");
			// TO AVOID TOO LARGE LOOPS
			if ( repetitions < 100 ) {
				for ( var i=0; i < repetitions; i++ ) {
					console.log( 78 );
					//$("#info_clones").append( clone.html() );
					$("#info_clones").append( $( "<div class='clone_wrapper empty'></div>" ) );
					$(".clone_wrapper").css({
						"height" : infoH
					});
				}
			}
		} else {
			// REDUCE SIZE OF INFOH
		}


	}

	function infoFill ( scroll ) {
		console.log( "infoFill", scroll );
		// IF EMPTY CONTAINER
		if ( $(".empty").length ) {
			// GET OFFSET TOP OF FIRST .EMPTY
			var limit = $(".empty").eq(0).offset().top - ( $(window).height() * 1.5 );
			// console.log( $(".empty").eq(0) );
			if ( scroll > limit ) {
				console.log( "Inject." );
				$(".empty").eq(0).html( $("#info_original").html() );	
				$(".empty").eq(0).removeClass("empty");		
			}
		}
	}

	// IMAGES SCROLL MARKERS

		// ASSIGN SCROLL MARKERS 
	var markersAssigned = false;
	function assignMarkers () {
		console.log("assignMarkers");
		$("#images_wrapper li").each( function(i){
			// console.log( $(this).offset().top );
			$(this).attr( "data-marker", $(this).offset().top );
		});
		markersAssigned = true;
	}

		// MARKER CHECK ON SCROLL
	function markerCheck ( scroll ) {
		// console.log("markerCheck");
		// IF MARKERS NOT ASSIGNED
		if ( !markersAssigned ) {
			return false;
		}
		// IF IMAGES ARE NOT HIDDEN
		if ( !$("#images_wrapper").hasClass("images_hidden") ) {
			$("#images_wrapper li").each( function() {
				if ( scroll > parseInt( $(this).attr("data-marker") ) ) {
					$(this).find("img").css( "opacity", "1" );
					// SHOW CLOSE BUTTON
					$("#images_close").show();
				} else {
					$(this).find("img").css( "opacity", "0" );
				}
			});
		}
		// IF LESS THAN FIRST IMAGE
		if ( scroll < $("#images_wrapper li:first-child").attr("data-marker") ) {
			console.log("Close hidden.");
			// HIDE CLOSE BUTTON
			$("#images_close").hide();
			// $("#debug").css("background-color","green").text( scroll + ", " + $("#images_wrapper li:first-child").attr("data-marker") + ", " + $("#images_close").is(":visible") );
		} else {
			// SHOW CLOSE BUTTON
			$("#images_close").show();
			// console.log("Close visible.");
			// $("#debug").css("background-color","red").text( scroll + ", " + $("#images_wrapper li:first-child").attr("data-marker") + ", " + $("#images_close").is(":visible") );
		}
	}

		// CHECK IF IMAGES ARE VISIBLE
	function imgVisCheck () {
		// console.log("imgVisCheck");
		var imgVis = false;
		$("#images_wrapper img").each( function (i) {
			if ( $(this).css("opacity") == 1 ) {
				imgVis = true;
			}
		});
		if ( imgVis ) {
			$("#images_wrapper").addClass("images_vis");
		} else {
			$("#images_wrapper").removeClass("images_vis");
		}
	}

		// POSITION IMAGES
	function posImgs () {
		console.log("posImgs");
		$("#images_wrapper img").each( function (i) {
			$(this).css({
				"margin-top" : 48 * Math.random(),
				"margin-left" : 48 * Math.random()
			});
		});
	}

	// TOGGLE IMAGES
	function showInfo () {
		console.log("showInfo");
		// HIDE IMAGES WRAPPER
		$("#images_wrapper").hide().addClass("images_hidden");
		// ROTATE CLOSE BUTTON
		$("#images_close").find("img").css({
			"-webkit-transform" : "rotate( 45deg )",
				"-ms-transform" : "rotate( 45deg )",
					"transform" : "rotate( 45deg )"
		});
	}

	function showImages () {
		console.log("showImages");
		// SHOW IMAGES WRAPPER
		$("#images_wrapper").show().removeClass("images_hidden");
		// RESET CLOSE BUTTON
		$("#images_close").find("img").css({	
			"-webkit-transform" : "",
				"-ms-transform" : "",
					"transform" : ""
		});
	}


/********************************************
		
		EVENTS
	
********************************************/

	$("#info_wrapper").on( "click", ".info_documents_toggle", function(e) {
		e.preventDefault();
		pdfShow( $(this) );
	});

	$("#info_wrapper").on( "click", ".disabled", function(e) {
		e.preventDefault();
		console.log( 206, "Disabled." );
	});	

	$("#images_close").on( "click", function(){
		if ( $("#images_wrapper").hasClass("images_hidden") ) {
			// SHOW IMAGES
			showImages();
		} else {
			// SHOW INFO
			showInfo();
		}
	});

	// $("#info_wrapper").on( "click", function(){
	// 	// IF IMAGES ARE VISIBLE
	// 	console.log(263);
	// 	if ( $("#images_wrapper").hasClass("images_vis") ) {
	// 		showInfo();
	// 	}
	// });

	var scrollPos;
	$(window).on( "load", function () {
		
		// RESET SCROLL
		$("html, body").animate({
			scrollTop : 0	
		}, 10 );

		gradientInit();
		posImgs();
		setInfoH();
		assignMarkers();
	}).on( "resize", _.throttle( function() {
		assignMarkers();
		setInfoH();
		console.log( 262, $("#images_wrapper").height() );
		// RESET GRADIENT
		$("#gradient").css({
			"top" : 0,
			"left" : 0
		});
	}, 200 ) ).on( "scroll", _.throttle( function() {
		scrollPos = $(window).scrollTop();
		imgVisCheck();
		markerCheck( scrollPos );
		// FOCUS TEXT
		infoFocus();
		// STOP TEXT REBLURRING
		clearTimeout(timer);
		// FILL INFO BOXES
		infoFill( scrollPos );
	}, 200 ) ).on( "scrollstop", function(){
		$("#debug").css("background-color", "purple");
		// IF NO MOVEMENT FOR 30 SECS
		timer = setTimeout( function(){
			infoBlur();
		}, 30000 );
	});

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
	}).on("touchmove", function(ev){
		// var touch = ev.originalEvent.touches[0];
		// $("#debug").css("background-color","blue").text( touch.pageX, touch.pageY );
		// // MOVE GRADIENT
		// // $("#gradient").css({
		// // 	"top" : touch.clientY,
		// // 	"left" : touch.clientX
		// // });
		// // CHANGE GRADIENT COLOUR
		// gradient( touch.pageX, touch.pageY );
	});

});