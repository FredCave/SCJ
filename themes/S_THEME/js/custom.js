$(document).ready(function () {				

// HEADER BAR

	// HEADER BAR TOGGLE

	var menuV = true;
	$("#header_button a").on("click", function(e){
		e.preventDefault();
		if (menuV) {
			$("#header_bar").hide();
			$(".menu_close").css("opacity","0");
			$(".menu_open").css("opacity","1");
			menuV = false;
		} else {
			$("#header_bar").show();
			$(".menu_close").css("opacity","1");
			$(".menu_open").css("opacity","0");
			menuV = true;
		}	
	});

	// HEADER LINKS HOVER

	$("#header_bar li").not( $(".no_hover") ).hover( function(){
		$(this).find("span").css("border-bottom","1px solid black");
	}, function(){
		$(this).find("span").css("border-bottom","");

	});

	// INDEX TOGGLE

	var indexV = false;
	$("#index_toggle").on("click", function(e){
		e.preventDefault();
		if (indexV) {
			$("#index").hide();
			indexV = false;
		} else {
			$("#index").show();
			indexV = true;
		}	
	});

	// TAGS 

		// REMOVE LAST SLASH + LAST DASH IN LIST POSTS

	$("#list li:last").next("span").hide();
	function removeSlash() {
		if ( $("#clear_tags").hasClass("visible") ) {
			$("#clear_tags").prev("span").show().next("span").hide();	
		} else {
			$("#clear_tags").prev("span").hide();	
		}
	}
	removeSlash();
		
	$("#clear_tags a").hover( function(){
		$(this).find(".underline").css("border-bottom","1px solid black");		
	}, function(){
		$(this).find(".underline").css("border-bottom","");
	});

	// TAGS CLICK

	$("#list_tags a").on( "click", function(e){
		e.preventDefault();
		// show clear tags button
		$("#clear_tags").css("display","inline-block").addClass("visible");
		removeSlash();
		// only clicked tag is underlined
		$(".underline").css("border-bottom","");
		$(this).find(".underline").css("border-bottom","1px solid black");

		// selected posts are highlighted
		var cat_name = $(this).attr("class");
		$(".list_post, .dash").css("opacity","0");
		// selected class reset
		$("#list .selected").removeClass("selected");
		// selected class is added
		$("#list ." + cat_name).css("opacity","1").addClass("selected");	

		// after class check has been made: add class of clicked to selected tag
		$("#list_tags a").removeClass("clicked");
		$(this).addClass("clicked");
		
	});

	$(".all").on("click", function(e){
		e.preventDefault();
		// general css reset
		$("#list_tags .underline").css("border-bottom","");
		$("#clear_tags").css("display","").removeClass("visible");
		removeSlash();
		$(".list_post").css("opacity","");
		$(".dash").css("opacity","");	
		// class reset
		$("#list_tags a").removeClass("clicked");
		$("#list .selected").removeClass("selected");
	});


// SMOOTH SCROLL

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				//console.log(target.offset().top );
				if ( target.selector === "#information" ) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40 
					}, 1000);					
				} else {
					$('html,body').animate({
						scrollTop: target.offset().top - 80 
					}, 1000);	
				}
				return false;
			}
		}
	});

//  GRADIENTS 

	var mX, mY, distance, sens,
    $TL  = $('#marker_tl'),
    $TR  = $('#marker_tr'),
    $BL  = $('#marker_bl'),
    $BR  = $('#marker_br');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
		
		sens = 300; // lower = less sensitive
		mX = e.pageX;
		mY = e.pageY;
		distanceTL = calculateDistance($TL, mX, mY) / sens;
		$("#layer1").animate({ opacity: 1 - distanceTL },{queue:false,duration:200,easing:'linear'});
								
		distanceTR = calculateDistance($TR, mX, mY) / sens;
		$("#layer2").animate({ opacity: 1 - distanceTR },{queue:false,duration:200,easing:'linear'});
					
		distanceBL = calculateDistance($BL, mX, mY) / sens;
		$("#layer3").animate({ opacity: 1 - distanceBL },{queue:false,duration:200,easing:'linear'});

		distanceBR = calculateDistance($BR, mX, mY) / sens;  
		$("#layer4").animate({ opacity: 1 - distanceBR },{queue:false,duration:200,easing:'linear'});

    });

// LANGUAGE TOGGLE

	$(".lang_toggle span").on("click", function(){
		if ( !$(this).hasClass("selected") ) {
		
			/* HEADER BAR ACTIONS */

			// remove selected class from other button
			$(".lang_toggle .selected").removeClass("selected");
			// get language contained in class
			var thisLang = $(this).attr("class");
			thisLang = thisLang.split("_")[1];
			// add selected class
			$(this).addClass("selected");

			/* PAGE ACTIONS */
			
			if ( thisLang == "en" ) {		
				$(".lang").each( function(){
					$(this).hide().siblings(".lang_en").show();		
				});
			} else {
				$(".lang_en").each( function(){
					$(this).hide().siblings(".lang").show();		
				});
			} // end of thisLang check

		} // end of selected class check
	});

// VIDEO WRAPPER SETTINGS TO HIDE CONTROLS

	function videoWrapper() {

		var winW = $(window).width(); 
		var winH = $(window).height();
		var winR = winH / winW;
		var video = $("#video_wrapper iframe");

		// ratio of original video
		var vidR = video.attr("height") / video.attr("width");
		// ratio of iframe
		var ifrR = video.height() / video.width();
		// ifrR nedds to be 0.65

		//var diff = winW / (winH / vidR);
		if ( winR > vidR ) {
			// diff between current video height and winH
			var diff = winH / (winW * vidR);

			var newW = winW * diff;
			var newH = winW * diff * 0.65;

			video.css({
				"width": newW,
				"margin-left": 0 - (newW - winW) / 2,
				"margin-top": 0 - (newH - winH) / 2,
				"height": newH
			});
		} else {			
			video.css({
				"width": winW,
				"margin-left": "",
				"margin-top": 0 - ( (winW * 0.65) - winH ) / 2,
				"height": winW * 0.65
			});			
		}
	}

	videoWrapper();

// MAIN CONTENT INFO

	function infoCheck( scrollPos ) {
		
		$(".post").each( function(){			
			// Check whether post is visible on screen
			
			var thisTop = $(this).offset().top;
			var thisBot = thisTop + $(this).height();
			var winH = $(window).height();
			//console.log(thisTop, thisBot, winH);

			if ( $(this).fracs().visible > 0 ) {
				
				if ( scrollPos >= thisTop && scrollPos <= thisBot - ( winH / 2 ) ) {
					$(this).find(".post_info_toggle").show();	
				} else {
					$(this).find(".post_info_toggle").hide();
				}
			
			} else {
				$(this).find(".post_info_toggle").hide();
			}

		}); // NEEDS FIXING — OVERLAP
	}
	
	$(".post_button").on( "click", function(e) {
		e.preventDefault();
		$(this).parents(".post_info_toggle").siblings(".post_text").toggle();
	});

	// INFO CLOSE

	$(".post_text .close_button a").on( "click", function(e) {
		e.preventDefault();
		$(this).parents(".post_text").toggle();
	});	


// PROJECT PAGE — EXHIBITION POSTS

	// PREPARE IMAGES
	$(".exhibition_images img").css("visibility","hidden");

	// CHECK WHEN GALLERY SHOULD BE SHOWN
	var expoGallery = function(){
		$(".exhibition_images").each( function(){
			var vis = $(this).fracs().visible;
			// Check if post is on page
			if ( vis > 0.1 ) {					
				$(".exhibition_gallery").show();
				$(this).find(".lazyloaded").each( function(){	
					/*
					NOT SHOWING ALL THE IMAGES
					*/
					var imgVis = $(this).fracs().visible;
					//console.log(imgVis);
					if ( imgVis >= 0.8 ) {
						var thisSrc = $(this).attr("data-gallery");
						$(".exhibition_gallery").css("background-image", "url(" + thisSrc + ")");
					} 
				});
			// Else hide gallery			
			} else {
				//console.log("not visible");
				$(".exhibition_gallery").hide();
			}
		});		
	}					
				
// PROJECT PAGE — PROJECT POSTS

	/* Prepare project images */

	var projectImgs = function(){

		$(".single_images img").each( function(){
		
			var thisH = $(this).attr("height"); 
			var thisW = $(this).attr("width");

			if ( thisH >= thisW ) {
				// if portrait modify width
				$(this).css("width", "33%");
			} 

			// to get number between 0.75 and 1.25
			var rand = ( Math.random() * 0.5 ) + 0.75;		
			// original figure is 12.5%
			rand = ( 12.5 * rand ) + "%";
			$(this).css("margin-left", rand);

		});	

	}

	// IMAGE VISIBLE

	/* Project images turn on and off as they enter and leave the window */

	var imgVis = function(){
		$(".post_project img").each( function(){
			$(this).css("opacity","0");
			$(".post_text .close_button img").css("opacity","1");
			if ( $(this).fracs().visible > 0.25 ) {
				$(this).css("opacity","1");
			}
		});	
	}

	// BACKGROUND IMAGE PIN — MANUAL METHOD

	function bgSize() {
		$(".post_bg").each( function(){
			var $bg = $(this).children(".bg"); // background to be animated
			// bg set height
			var thisW = $(this).width(); 
			var windR = $(window).outerWidth() / $(window).outerHeight(); // windowRatio
			$bg.css("height", (thisW / windR) + 10 );
		});
	}

	bgSize();

	function manPin() {
		
		var $scrollPos = $(window).scrollTop();
		
		$(".post_bg").each( function( ){
			//console.log($scrollPos);
			var $bg = $(this).children(".bg"); // background to be animated
			var winH = $(window).height();
			var posTop = $(this).offset().top; // top limit 
			//console.log("posTop", posTop);
			var thisH = $(this).height();
			var posBot = posTop + thisH; // bottom limit		
			//console.log($(this).attr("id"), "thisH: ", thisH, "posTop: ", posTop, "posBot: ", posBot);

			var animStart = posTop - winH; // start 1vh before
			var animEnd = posBot + winH; // end 0.5vh after
		
			if ( $scrollPos >= animStart && $scrollPos <= animEnd ) {
				var opac = ( $scrollPos - animStart ) / winH ;				
				if ( $scrollPos >= posBot ) {						
					opac = ( animEnd - $scrollPos ) / ( winH / 2 );
				}
				
				$bg.css({
					"position": "fixed",
					"top": "0",
					"left": "0",
					"opacity": opac
				});
				
			} else {
				$bg.css({
					"position": "",
					"opacity": "0"
				});
			}

		});
	}

// OPEN PDFS IN POPUP

	$("#documents a").on("click", function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		var ifr = "<iframe class='pdf_viewer' src='" + href + "'></iframe>";
		$("#pdf_wrapper iframe").remove();
		$("#pdf_wrapper").append(ifr).css("display","inline-block");
	});

// CLOSE PDFS

	$("#pdf_wrapper .close_button").on("click", function(e){
		e.preventDefault();
		$("#pdf_wrapper").hide();
	});


// WINDOW EVENTS

	$(window).on( "load", function(){	
		projectImgs();
		manPin();
	}).resize( function(){
		manPin();
		bgSize();
		videoWrapper();	
		projectImgs();
	}).on( "scroll", function(){
		var scrollPos = $(window).scrollTop();
		//console.log( scrollPos );
		infoCheck( scrollPos );
		manPin();
		expoGallery();
		imgVis();
	});

});