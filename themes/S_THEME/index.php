<?php get_header(); ?>

<?php get_sidebar(); ?>

	<!-- BACKGROUND VIDEO -->

	<div id="video_wrapper">
		
		<img src="<?php bloginfo('template_url'); ?>/img/temp_bg.jpg" />
		<iframe src="https://player.vimeo.com/video/140727766?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>	
		<!--<iframe src="https://player.vimeo.com/video/135594181?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->	

	</div>

	<!-- GRADIENTS -->

	<div id="gradients">

		<div id="layer1" class="layer"></div>
		<div id="layer2" class="layer"></div>
		<div id="layer3" class="layer"></div>
		<div id="layer4" class="layer"></div>

		<!-- MARKERS -->

		<div id="marker_tl" class="marker"></div>
	    <div id="marker_tr" class="marker"></div>
	    <div id="marker_bl" class="marker"></div>
	    <div id="marker_br" class="marker"></div>

	</div>

	<!-- IFRAME POPUP -->

	<div id="pdf_wrapper"> 
		<div class="close_button">
			<a href="">
				<img class="menu_close menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_close_white.png" alt="menu close button"/>
			</a>
		</div>
	</div>

	<!-- NEWS -->

	<div id="news">

		<?php include("section-news.php"); ?>		

	</div>

	<!-- PDFs -->

	<div id="documents">
		
		<?php include("section-docs.php"); ?>
				
	</div>

	<!-- MAIN CONTENT -->

	<div id="content_wrapper">

		<?php include("section-projects.php"); ?>

	</div>

	<!-- CV -->

	<div id="information"> 

		<?php include("section-info.php"); ?>

	</div>

<?php get_footer(); ?>