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
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
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


/* DOCUMENTS */

	// DETECT CLICK IN IFRAME

	$('body', $("#docs_bg iframe").contents() ).click( function(e) {
	 	console.log('Clicked! ' + event.pageX + ' - ' + event.pageY);
	});

	
	function docCols() {
		var winH = $(window).height();
		var docH = $("#pdf_list").height();

		if ( docH >= winH ) {
			$("#pdf_list").css({
				"width": "50%",
				"column-count": "2",
				"-webkit-column-count": "2"
			});
		} else {
			$("#pdf_list").css({
				"width": "",
				"column-count": "",
				"-webkit-column-count": ""
			});			
		}
	}

	docCols();

	$(window).resize( function(){
		docCols();	
	});


// PROJECT PAGE — INFO TO DOC FADE

	var	winH = $(window).height(); 
	
	$(window).on("scroll", function(){
		
		var scroll = $(window).scrollTop();

		$("#docs_bg").css("opacity", 1 - ( scroll / winH ) );

		if ( $("#documents").fracs().visible > 0.67 ) {
			$("#docs_bg").css({
				"pointer-events":"auto",
				"z-index": "1"
			});
		} else {
			$("#docs_bg").css({
				"pointer-events":"none",
				"z-index": "-1"
			});
		}
	});


// PROJECT PAGE — EXHIBITION POSTS

	// PREPARE IMAGES
	$(".exhibition_images img").each( function(){
		$(this).css({
			"opacity":"0",
			"filter": "saturate(0.1)"
		});
	});

	// CHECK WHEN IMAGES ENTER PAGE
	$(window).scroll( function(){
		$(".exhibition_images").each( function(){
			var vis = $(this).fracs().visible;
			// check if on page
			if ( vis >= 0.1 ) {					
				$(".exhibition_gallery").show();

				/*
				// create array
				var top, visList = [];

				function getMaxOfArray(numArray) {
				  return Math.max.apply(null, numArray);
				}

				// loop through images, return visibilty
				$(this).find("img").each( function(){
					var thisSrc = $(this).attr("src");
					var thisVis = $(this).fracs().visible;
					
					// need to push both - key is src, value is visibility
					visList[thisSrc] = thisVis;
				});

				top = getMaxOfArray( visList );
				console.log("top = " + top);
				// sort array by visibilty, top is put in gallery
		
					// check if image is partially visible
					if ( $(".exhibition_images img").visible("true") ) {
					
					} 
				*/
					
				$(this).find(".lazyloaded").each( function(){	
					var imgVis = $(this).fracs().visible;
					
					if ( imgVis >= 0.8 ) {
						var thisSrc = $(this).attr("data-gallery");
						$(".exhibition_gallery").css("background-image", "url(" + thisSrc + ")");
					} else {
						
					}
				});
						

			} else {
				$(".exhibition_gallery").hide();
			}
		});		
	});


// PROJECT PAGE — PROJECT POSTS

	// PORTRAIT LANDSCPAPE FILTER
	// + VARY MARGIN LEFT

	$(window).on("load", function(){

		$(".single_images img").each( function(){
		
			var thisH = $(this).attr("height"); 
			var thisW = $(this).attr("width");

			if ( thisH >= thisW ) {
				// if portrait modify width
				console.log( $(this).attr("src") + " is portrait" );
				$(this).css("width", "33%");
			} 

			// to get number between 0.75 and 1.25
			var rand = ( Math.random() * 0.5 ) + 0.75;		
			// original figure is 12.5%
			rand = ( 12.5 * rand ) + "%";
			$(this).css("margin-left", rand);

		});	

	});


	// IMAGE VISIBLE

	$(window).scroll( function(){
		$(".post_project img").each( function(){

			$(this).css("opacity","0");
			if ( $(this).fracs().visible > 0.25 ) {
				$(this).css("opacity","1");
			}
		});	
	});

	// BACKGROUND IMAGE PIN — MANUAL METHOD

	function manPin() {
		$(".post_bg").each( function(){

			var $bg = $(this).children(".bg"); // background to be animated
			// bg set height
			var thisW = $(this).width(); 
			var windR = $(window).outerWidth() / $(window).outerHeight(); // windowRatio
			$bg.css("height", (thisW / windR) + 10 );
			var winH = $(window).height();
			

			var posTop = $bg.offset().top; // top limit 
			var thisH = $(this).height();
			var posBot = posTop + thisH; // bottom limit		
			var animStart = posTop - winH; // start 1vh before
			var animEnd = posBot + (winH / 2); // end 0.5vh after
			
			$(window).scroll( function() {
				var winScroll = $("body").scrollTop(); // current scroll position
				if ( winScroll >= animStart && winScroll <= animEnd ) {
					var opac = ( winScroll - animStart ) / winH ;				
					if ( winScroll >= posBot ) {						
						opac = ( animEnd - winScroll ) / ( winH / 2 );
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

		});
	}

	$(window).on( "load", function(){
		manPin();
	}).resize( manPin() );

	// need a separate function for window resize



});