<ul id="projects">

	<?php echo $notNews; ?>

	<?php $args = array(
		"category_name" => 'project, exhibition',
		"orderby" => "rand"
	); ?>
	<?php $theQuery = new WP_Query( $args ); ?>
	<?php if ( $theQuery->have_posts() ) : ?>
		<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
			<?php $cat_name = get_the_category(); ?>
			
				<li class="post post_project post_bg" id="<?php the_ID(); ?>">

					<!-- BACKGROUND IMAGE -->
					<?php $image = get_field("cover_image"); ?>
					<div class="bg" style="background-image:url('<?php echo $image["url"]; ?>')"></div>

					<div class="post_content">

						<!-- INFO TOGGLE BUTTON -->
						<div class="post_info_toggle">
							<a href="" class="post_button">
								<?php the_title(); ?> — info 
							</a>
							<a href="#documents" class="top_button">
								<span class="lang">Haut de la page</span>
								<span class="lang_en">Back to Top</span>
							</a>
						</div>

						<!-- INFO BOX -->
						<div class="post_text">

							<div class="close_button"><a href=""><img src="<?php bloginfo('template_url'); ?>/img/menu_close_white.png" /></a></div>
							
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

							<div class="exhibition_images">

						<?php else: ?>

							<?php if ( $post->post_name === "outstanding-nominals" ) { ?>

								<div class="single_images nominals">

							<?php } else { ?>

								<div class="single_images">

							<?php } ?>

						<?php endif; ?>

							<?php while ( have_rows('additional_images') ) : the_row(); ?>

								<?php $image = get_sub_field('image');
								if( !empty($image) ): 
									$thumb = $image['sizes'][ "thumbnail" ];
									$medium = $image['sizes'][ "medium" ];
									$large = $image['sizes'][ "large" ];
									$width = $image['width'];
									$height = $image['height'];
									?>

									<img class="lazyload"
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

							<?php endwhile; ?>

						</div><!-- end of images -->

						<?php if( $cat_name[0]->slug == "exhibition" ) { ?>

							<div class="exhibition_gallery"></div>

						<?php } ?>

					</div><!-- end of .post_content -->

				</li><!-- end of .post -->

		<?php endwhile; ?>
	<?php endif; 
	wp_reset_postdata(); ?>
</ul>
