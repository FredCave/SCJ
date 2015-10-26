<?php $cat_name = get_the_category(); ?>
		
<!-- BACKGROUND IMAGE -->
<?php $image = get_field("cover_image"); ?>
<div class="bg" style="background-image:url('<?php echo $image["url"]; ?>')"></div>

<div class="post_content">

	<!-- INFO TOGGLE BUTTON -->
	<div class="post_info_toggle">
		<a href="" class="post_button click_ignore">
			<?php the_title(); ?> — info 
		</a>
		<span class="post_info_space">&nbsp;</span>
	</div>

	<!-- INFO BOX -->
	<div class="post_text info_box click_ignore">

		<span><?php the_title(); ?></span>

		<br>

		<?php the_field("info"); ?>

		<?php the_field("tech_info"); ?>

		<div class="post_links">
			<ul>
				<?php while ( have_rows( "links" ) ) : the_row(); ?>
					<li>
						<a target="_blank" href="<?php the_sub_field( "link" ); ?>">
							<img class="link_arrow" src="<?php bloginfo('template_url'); ?>/img/arrow.png" />
							<span><?php the_sub_field( "link_title" ); ?></span>
						</a>
					</li>
				<?php endwhile; ?>
			</ul>
		</div>

	</div><!-- end of .post_text -->

	<!-- IMAGES -->

	<?php if( $cat_name[0]->slug == "exhibition" ): ?>

		<div class="exhibition_images" data-exhibition="<?php the_ID(); ?>">

	<?php else: ?>

		<?php if ( $post->post_name === "outstanding-nominals" ) { ?>

			<div class="single_images nominals">

		<?php } else { ?>

			<div class="single_images">

		<?php } ?>

	<?php endif; ?>

		<?php $index = 0; ?>

		<?php while ( have_rows('additional_images') ) : the_row(); ?>

			<?php $image = get_sub_field('image');
			if( !empty($image) ): 
				$thumb = $image['sizes'][ "thumbnail" ];
				$medium = $image['sizes'][ "medium" ];
				$large = $image['sizes'][ "large" ];
				$width = $image['width'];
				$height = $image['height'];
				?>

				<img id="<?php echo $index; ?>" 
					class="lazyload"
					data-gallery="<?php echo $large; ?>"  
					src="<?php echo $medium; ?>" 
					width="<?php echo $width; ?>" 
					height="<?php echo $height; ?>" 
					data-srcset="<?php echo $large; ?> 800w, 
						<?php echo $medium; ?> 600w, 
						<?php echo $thumb; ?> 300w" />	

				<noscript>
					<img src="<?php echo $large; ?>">										
				</noscript>

			<?php endif; ?>

			<?php $index++; ?>

		<?php endwhile; ?>

	</div><!-- end of images -->

	<?php if( $cat_name[0]->slug == "exhibition" ) { ?>

		<div class="exhibition_gallery"></div>

	<?php } ?>

</div><!-- end of .post_content -->