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
			$(".header_sub").hide();
			docV = false;
			indexV = false;
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
			$(".header_sub").hide();
			docV = false;
			$("#index").show();
			indexV = true;
		}	
	});

	// DOC LIST TOGGLE

	var docV = false;
	$("#doc_toggle").on("click", function(e){
		e.preventDefault();
		if (docV) {
			$("#documents").hide();
			docV = false;
		} else {
			$(".header_sub").hide();
			indexV = false;
			$("#documents").show();
			docV = true;
		}	
	});

	// CLICK OUTSIDE OF MENU TO CLOSE

	$(".page_content").on("click",function(){
		$(".header_sub").hide();
		docV = false;
		indexV = false;		
	});

	// NEWS TOGGLE

	var newsV = true;
	$("#news_toggle").on("click", function(e){
		e.preventDefault();
		$(".header_sub").hide();
		docV = false;
		indexV = false;
		if (newsV) {
			$("#news").hide();
			newsV = false;
			$(this).attr("href","");
		} else {
			$(".info_box").hide();
			infoV = false;
			$("#news").show();
			newsV = true;
			$(this).attr("href","#news");
		}
		infoWrapperH();		
	});

	// INFO TOGGLE

	var infoV = false;
	$("#info_toggle").on("click", function(e){
		e.preventDefault();		
		$(".header_sub").hide();
		docV = false;
		indexV = false;		
		if (infoV) {
			$(".info_box").hide();
			infoV = false;
			// Prevent scroll to top
			$(this).attr("href","");
		} else {
			// Hide news if visible
			$(".info_box").hide();
			newsV = false;
			$("#information").show();
			infoV = true;
			// Scroll to top
			$(this).attr("href","#information");
		}	
		infoWrapperH();
	});

	// INFO + NEWS WRAPPER

	var infoWrapperH = function(){
		var minH = Math.min( $("#news").outerHeight(), $("#information").outerHeight() );	
		var infoH = minH;
		if ( newsV ) {
			infoH = $("#news").height();
		} else if ( infoV ) {
			infoH = $("#information").height();
		} else {
			infoH = minH;
		}
		$("#info_wrapper").css("height", infoH + 130);	
	}
	infoWrapperH();

	// REMOVE LAST COMMA IN HEADER LISTS 

	$(".list").each( function(){
		var lastSpan = $(this).find("li:last").find("span").text().trim().slice(0,-1);
		$(this).find("li:last").find("span").text( lastSpan );
	});

	// PROJECT CLICK

	$(".list_post a").on("click", function(){
		// HIDE INDEX
		setTimeout( function(){
			$("#index").hide();
			indexV = false;	
		}, 1000 );
	});

// SMOOTH SCROLL

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 120
				}, 1000);	
				return false;
			}
		}
	});

	// SCROLL TO TOP

	function revealTopButton( scrollPos ) {
		if ( scrollPos > $("#info_wrapper").height() ) {
			$(".top_button").show();	
		} else {
			$(".top_button").hide();
		}
	}

	$(".top_button").on("click", function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 1000);	
	});

//  GRADIENTS 

    $(document).mousemove(function(e) {  
		
    	var r = 0 + e.pageX / 2,
    		g = 125 - e.pageX / 2,
    		b = 255 - e.clientY / 2;

		$('#gradient').css({
			"top" : e.pageY - $(document).scrollTop(),
			"left" : e.pageX,
		    "background" : "-moz-radial-gradient(center, ellipse cover, rgba(" + r + "," + g + "," + b + ",1) 0%, rgba(255, 255, 255, 0) 50%)",
		    "background" : "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(" + r + "," + g + "," + b + ",1)), color-stop(50%, rgba(255, 255, 255, 0)))",
		    "background" : "-webkit-radial-gradient(center, ellipse cover, rgba(" + r + "," + g + "," + b + ",1) 0%, rgba(255, 255, 255, 0) 50%)",
		    "background" : "-o-radial-gradient(center, ellipse cover, rgba(" + r + "," + g + "," + b + ",1) 0%, rgba(255, 255, 255, 0) 50%)",
		    "background" : "-ms-radial-gradient(center, ellipse cover, rgba(" + r + "," + g + "," + b + ",1) 0%, rgba(255, 255, 255, 0) 50%)",
		    "background" : "radial-gradient(ellipse at center, rgba(" + r + "," + g + "," + b + ",1) 0%, rgba(255, 255, 255, 0) 50%)"
		});

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

// OPEN PDFS IN POPUP

	$("#documents a").on("click", function(e){
		e.preventDefault();
		$("#documents").hide();
		docV = false;
		$(".info_box").hide();
		newsV = false;
		infoV = false;
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

// MAIN CONTENT — LAZY LOADING

	// Set lazysizes buffer size
	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.expand = 800;

	// Create array where loaded ids will be stored
	var loaded = [];

	var initLoaded = false;
	function initLoad () {
		if ( !initLoaded ) {
			var thisId = $(".post").eq(0).attr("id");
			postLoad( thisId );
			// add post to loaded array
			loaded.push(thisId);
			initLoaded = true;
		}	
	}

	var defineTriggers = function( scrollPos ){
		$(".post").each( function(){			
			var thisId = $(this).attr("id");
			// Get moment when post enters the page ( + buffer of 50% )
			var thisTop = $(this).offset().top - ( $(window).height() * 1.5 );
			// Check if post has already been loaded
			var arrayCheck = $.inArray( thisId, loaded )
			if ( scrollPos > thisTop && arrayCheck === -1 ) {
				// load function
				postLoad( thisId );
				// add post to loaded array
				loaded.push(thisId);
			}
		});
	}

	// Load function
	var postLoad = function( thisId ){
		// console.log(thisId);
		$.get("./single.php", "p=" + thisId, function (response) {
			$("#"+thisId).find(".post_content").html(response);
		}).done(function () {
			projectImgs();
			$("#"+thisId).addClass("post_loaded");	
			bgSize();					
		});
	}

// MAIN CONTENT — BG IMAGES

	// BACKGROUND SIZE

	function bgSize() {
		$(".post").each( function(){
			var $bg = $(this).children(".bg"); // background to be animated
			// bg set height
			var thisW = $(this).width(); 
			var windR = $(window).outerWidth() / $(window).outerHeight(); // windowRatio
			$bg.css("height", (thisW / windR) + 10 );
		});
	}

	// PIN FUNCTION

	function manPin( scrollPos ) {
				
		$(".post").each( function( ){
			var $bg = $(this).find(".bg"); // background to be animated
			var winH = $(window).height();
			var posTop = $(this).offset().top; // top limit 
			var thisH = $(this).height();
			var posBot = posTop + thisH; // bottom limit		

			var animStart = posTop - ( winH * 1.5 ); // start 1vh before
			var animEnd = posBot + winH; // end 1vh after
		
			if ( scrollPos >= animStart && scrollPos <= animEnd ) {
				var opac = ( scrollPos - animStart ) / winH ;				
				if ( scrollPos >= posBot ) {						
					opac = ( animEnd - scrollPos ) / ( winH / 2 );
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

// MAIN CONTENT — PREPARE IMAGES

	var projectImgs = function(){

		$(".post").find(".single_images img").each( function(){
		
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

// MAIN CONTENT — EXHIBITION GALLERY

	// CLICK IMAGE TO SCROLL DOWN
	$("#gallery_click").on("click", function(e){
		//var current = $(this).attr("data-current");
		alert("current");
		e.preventDefault();
	});

	// GALLERY SHOW
	function galleryShow() {		
		$(".exhibition_gallery").hide();
		
		$(".post_content").each( function(){
			if ( $(this).is(":onScreen") && !$(this).hasClass("nominals") ) {
				$(this).find(".exhibition_gallery").show();
				imageShow( $(this) );
			} 			
		});
	}

	// IMAGE SHOW

	function imageShow( thisPost ) {
		
		// Create object
		var exhImgs = [];

		var index = 0;
		var postId = thisPost.parent(".post").attr("id");

		thisPost.find(".single_images img").each( function(){					
			// Push key / value pair to array
			exhImgs.push({
			    key: index,
			    value: $(this).fracs().visible
			});								
			index++;
		});
		// Sort array by value
		exhImgs = exhImgs.sort(function (a, b) {
		    return b.value - a.value;
		});
		
		var indexVis = postId + "-" + exhImgs[0].key;

		// add image to gallery using current picturefill src
		var thisSrc = thisPost.find("#"+indexVis)[0].currentSrc;
		// Safari fallback
		if ( !thisSrc ) {
			thisSrc = thisPost.find("#"+indexVis).attr("src");
		}

		$(".exhibition_gallery").css("background-image", "url(" + thisSrc + ")").attr("data-current",indexVis);

	}

// MAIN CONTENT — PROJECT INFO

	// LINKS BOTTOM RIGHT

	var infoCheck = function ( scrollPos ) {
		$(".post").each( function(){			
			
			var thisTop = $(this).offset().top;
			var thisBot = thisTop + $(this).height();
			var winH = $(window).height();
			if ( $(this).fracs().visible > 0 ) {
				
				if ( scrollPos >= thisTop && scrollPos <= thisBot - ( winH / 2 ) ) {
					$(this).find(".post_button").show();	
				} else {
					// Hide links
					$(this).find(".post_button").hide();
					// Hide open info box
					$(this).find(".post_text").hide();
				}
			
			} else {
				// Hide links
				$(this).find(".post_button").hide();
				// Hide open info box
				$(this).find(".post_text").hide();
			}

		});
	}

	// INFO BOX TOGGLE

	$(".post").on( "click", ".post_button", function(e) {
		e.preventDefault();
		$(this).parents(".post_info_toggle").siblings(".post_text").toggle();
	});

	// INFO CLOSE

	$(document).mouseup(function (e){
	    var container = $(".click_ignore");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	        $(".post_text").hide();
	    }
	});


// WINDOW EVENTS

	$(window).on( "load", function(){	
		setTimeout( function(){
			initLoad();			
		}, 2000 );
	}).on( "resize", function(){
		videoWrapper();	
		infoWrapperH();
		bgSize();
	}).on( "scroll", function(){
		var scrollPos = $(window).scrollTop();
		initLoad();
		revealTopButton( scrollPos );
		defineTriggers( scrollPos );
		infoCheck( scrollPos );
		manPin( scrollPos );
		galleryShow();
	});

});