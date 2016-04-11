<div id="content_wrapper" class="page_content">

	<ul id="projects">
		<?php $args = array(
			"category_name" => 'project, exhibition',
			"orderby" => "rand"
		); ?>
		<?php $theQuery = new WP_Query( $args ); ?>
		<?php if ( $theQuery->have_posts() ) : ?>
			<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
				<?php $cat_name = get_the_category(); ?>
				
					<li class="post" id="<?php the_ID(); ?>">
						
						<!-- BACKGROUND IMAGE -->
						<?php $image = get_field("cover_image"); ?>
						<div class="bg" style="background-image:url('<?php echo $image["url"]; ?>')"></div>

						<?php if ( $post->post_name === "outstanding-nominals" ) { ?>

							<div class="post_content nominals">

						<?php } else { ?>

							<?php if( $cat_name[0]->slug == "exhibition" ): ?>

								<div class="post_content exhibition_content">

							<?php else: ?>

								<div class="post_content">

							<?php endif; ?>

						<?php } ?>

								<!-- .POST_CONTENT LOADED HERE -->

							</div>

					</li>

			<?php endwhile; ?>
		<?php endif; 
		wp_reset_postdata(); ?>
	</ul>

</div><!-- end of #content_wrapper -->
