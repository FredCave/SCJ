<?php $cat_name = get_the_category(); ?>

<!-- INFO TOGGLE BUTTON -->
<div class="post_info_toggle">
	<a href="" class="post_button click_ignore">
		<?php the_title(); ?> — info 
	</a>
	<span class="post_info_space">&nbsp;</span>
</div>

<!-- INFO BOX -->
<div class="post_text info_box click_ignore">

	<div class="post_scroll">

		<span><?php the_title(); ?></span>

		<br>

		<?php the_field("info"); ?>
		<?php the_field("info"); ?>
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

	</div>

	<div class="clear"></div>

</div><!-- end of .post_text -->

<!-- IMAGES -->

<?php if( $cat_name[0]->slug == "exhibition" ): ?>

	<div class="exhibition_images" data-exhibition="<?php the_ID(); ?>">

<?php else: ?>

	<!--<div class="single_images">-->
	<div class="single_images">

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

			<img id="<?php echo the_ID() . "-" . $index; ?>" 
				class="lazyload"
				data-src="<?php echo $thumb; ?>" 
				width="<?php echo $width; ?>" 
				height="<?php echo $height; ?>" 
				data-sizes="auto" 
				data-srcset="<?php echo $large; ?> 1280w, 
					<?php echo $medium; ?> 800w, 
					<?php echo $thumb; ?> 300w" />

			<noscript>
				<img src="<?php echo $large; ?>">										
			</noscript>

		<?php endif; ?>

		<?php $index++; ?>

	<?php endwhile; ?>

</div><!-- end of images -->

<script>
	// Don't know why this only works here
	/*
	function imageNext() {
		var current = $(".exhibition_gallery").attr("data-current").split("-");
		var plusOne = parseInt( current[1] ) + 1;
		var offset = $("#" + current[0] + "-" + plusOne ).offset().top;
		$('html,body').animate({
			scrollTop: offset
		}, 500);
	}
	*/

</script>

<div class="exhibition_gallery">
</div>