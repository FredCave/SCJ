<?php get_header(); ?>

<?php get_sidebar(); ?>

	<div id="top"></div><!-- ANCHOR FOR BACK TO TOP BUTTON -->

	<!-- BACKGROUND VIDEO -->

	<div id="video_wrapper">
		
		<iframe src="https://player.vimeo.com/video/140727766?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>	

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
				<img class="menu_close menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_close.png" alt="menu close button"/>
			</a>
		</div>
	</div>

	<div id="info_wrapper" class="page_content">

		<!-- NEWS -->

		<div id="news" class="info_box">
			<?php include("section-news.php"); ?>		
		</div>

		<!-- CV -->

		<div id="information" class="info_box"> 
			<?php include("section-info.php"); ?>
		</div>

	</div><!-- end of #info_wrapper -->

	<!-- MAIN CONTENT -->

	<div id="content_wrapper" class="page_content">

		<?php include("section-projects.php"); ?>

	</div>


<?php get_footer(); ?>