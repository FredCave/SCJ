<!-- SLOW / FAST / WEIRD -->

<div id="images_wrapper">

	<!-- IMAGES 1 -->
	<?php 
	$args = array(
		"name" 		=> "images"
	);
	$img_query = new WP_Query( $args );
	if ( $img_query->have_posts() ) :
		while ( $img_query->have_posts() ) : $img_query->the_post();
			
			// BG IMAGE
			$bg_rows = get_field("background_image");
			// var_dump($bg_rows);
			shuffle( $bg_rows );
			if ( $bg_rows ) : ?>
				<ul class="bg_image">
					<?php
					shuffle( $bg_rows );
					$i = 0;
					foreach ( $bg_rows as $bg_row ) { 
						if ( $i === 0 ) {
							$thumb = $bg_row["image"]['sizes'][ "thumbnail" ];
							$medium = $bg_row["image"]['sizes'][ "medium" ];
							$large = $bg_row["image"]['sizes'][ "large" ];
							$full = $bg_row["image"]['url'];
							?>
							<li class="" 
								data-thm="<?php echo $thumb; ?>" 
								data-med="<?php echo $medium; ?>" 
								data-lrg="<?php echo $large; ?>" >
			                </li>					
						<?php 
						}
						$i++;		
					}
					?>
				</ul>
			<?php
			endif;
			// END OF IF BG_ROWS

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
							$thumb = $image['sizes'][ "thumbnail" ];
							$medium = $image['sizes'][ "medium" ];
							$large = $image['sizes'][ "large" ];
							$full = $image['url'];
							?>
							<li>
								<img class="lazyload" 
								data-sizes="auto" 
							    data-src="<?php echo $thumb; ?>"
							    data-srcset="<?php echo $thumb; ?> 300w,
							    <?php echo $medium; ?> 600w,
							    <?php echo $large; ?> 900w,
							    <?php echo $full; ?> 1280w" />
							</li>
						<?php
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

	<?php 
	/*
	<div class="blur">

	</div>
	*/
	?>

</div><!-- END OF #IMAGES_WRAPPER -->