<!-- TMP: IFRAME POPUP  -->

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
			<?php include("includes/section-news.php"); ?>		
		</div> 

		<!-- CV -->

		<div id="information" class="info_box"> 
			<?php include("includes/section-info.php"); ?>
		</div>

	</div><!-- end of #info_wrapper -->



<div class="list">

	<ul>
		<?php $args = array(
			"post_type" => "documents",
			"orderby" => "rand"
		); ?>
		<?php $theQuery = new WP_Query( $args ); ?>
		<?php if ( $theQuery->have_posts() ) : ?>
			<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
				<?php $cat_name = get_the_category(); ?>			
							
				<?php 					
				$file = get_field("file");
				
				$date_str = $file["date"]; // STRING
				$the_date = DateTime::createFromFormat('Y-m-d H:i:s', $date_str);
				
				$filesize = filesize( get_attached_file( $file["id"] ) );
				$kb = intval( $filesize / 1000 ) . " kb";											
				?>

				<li class="list_post">
					<a href="<?php echo $file['url'] ?>">								
						<span><?php the_title(); ?>, </span>
					</a>
				</li>
				
			<?php endwhile; ?>
		<?php endif; 
		wp_reset_postdata(); ?>
	</ul>

</div>