<!-- SLOW / FAST / WEIRD -->

<!-- CLOSE BUTTON -->
<div id="images_close">
	<img src="<?php bloginfo( 'template_url' ); ?>/img/close.svg" />
</div>

<div id="images_wrapper">

	<!-- IMAGES -->
	<?php 
	$args = array(
		"name" 		=> "images"
	);
	$img_query = new WP_Query( $args );
	if ( $img_query->have_posts() ) :
		while ( $img_query->have_posts() ) : $img_query->the_post();
			
			// MAIN IMAGES
			$main_rows = get_field("main_images");
			// var_dump($bg_rows);
			shuffle( $main_rows );
			if ( $main_rows ) : ?>
				<ul class="main_images">
					<?php
					if ( have_rows("main_images") ) :
						while ( have_rows("main_images") ) : the_row(); 
							$image = get_sub_field("image");
							if ( !empty($image) ) {
								$thumb = $image["sizes"]["thumbnail"];
								$medium = $image["sizes"]["medium"];
								$large = $image["sizes"]["large"];
								$full = $image["url"];
								$width = $image["sizes"]["thumbnail-width"];
								$height = $image["sizes"]["thumbnail-height"];
								if ( $height > $width ) {
									$class = "portrait";
								} else {
									$class = "landscape";
								}
								?>
								<li data-marker="">
									<img class="lazyload <?php echo $class; ?>" 
									data-sizes="auto" 
								    data-src="<?php echo $medium; ?>"
								    data-srcset="<?php echo $thumb; ?> 300w,
								    <?php echo $medium; ?> 600w,
								    <?php echo $large; ?> 900w,
								    <?php echo $full; ?> 1280w" />
								</li>	
							<?php							
							}
						endwhile;
					endif;
					?>
				</ul>
			<?php
			endif;


		endwhile;
	endif;

	?>

	<div class="poly hide">

	</div>

	<div class="blur hide">

	</div>

</div><!-- END OF #IMAGES_WRAPPER -->