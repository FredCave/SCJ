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



});