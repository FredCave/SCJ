<ul id="projects">

	<!-- NEWS LOOP -->

	<div id="news_loop" style="background-image:url('<?php bloginfo('template_url'); ?>/img/white_bg3.png');">
		<?php $args = array(
			"category_name" => "news",
			"orderby" => "rand"
		); ?>
		<?php $theQuery = new WP_Query( $args ); ?>
		<?php if ( $theQuery->have_posts() ) : ?>
			<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
				<?php $cat_name = get_the_category(); ?>			
							
					<li class="post post_news" id="<?php the_ID(); ?>">

						<div class="post_content">						
							<div class="post_text">
								<div class="post_title"><?php the_title(); ?></div>
								<a href="#documents" class="top_button">
									<span class="lang">Haut de la page</span>
									<span class="lang_en">Back to Top</span>
								</a>

								<?php the_field("text"); ?>
							</div>
								<?php $image = get_field("cover_image");
								if( !empty($image) ): 
									$thumb = $image['sizes'][ "thumbnail" ];
									$medium = $image['sizes'][ "medium" ];
									$large = $image['sizes'][ "large" ];
									?>
									<img 
										class="news_image lazyload" 
										src="<?php echo $medium; ?>" 
										width="<?php echo $width; ?>" 
										height="<?php echo $height; ?>" 
										data-srcset="<?php echo $large; ?> 800w, 
											<?php echo $medium; ?> 600w, 
											<?php echo $thumb; ?> 300w">
									<noscript>
										<img class="news_image" src="<?php echo $large; ?>">										
									</noscript>
								<?php endif; ?>
																	
							
						</div>						
					</li>
				
			<?php endwhile; ?>
		<?php endif; 
		wp_reset_postdata(); ?>
	</div><!-- end of #news_loop -->

	<!-- EVERYTHING ELSE -->

	<?php $args = array(
			"cat" => $notNews,
			"orderby" => "rand"
		); ?>
	<?php $theQuery = new WP_Query( $args ); ?>
	<?php if ( $theQuery->have_posts() ) : ?>
		<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
			<?php $cat_name = get_the_category(); ?>			
						
	<!-- IF EXHIBITION -->
	
			<?php if( $cat_name[0]->slug == "exhibition" ): ?>

				<li class="post post_exhibition post_bg" id="<?php the_ID(); ?>">

					<?php $image = get_field("cover_image"); ?>
					<div class="bg" style="background-image:url('<?php echo $image["url"]; ?>')">
					</div>
				
					<div class="post_content">
					
						<div class="post_text">
								
							<div class="post_title"><?php the_title(); ?></div>
							<a href="#documents" class="top_button">
								<span class="lang">Haut de la page</span>
								<span class="lang_en">Back to Top</span>
							</a>

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

						<div class="exhibition_images">
							
							<?php while ( have_rows('additional_images') ) : the_row(); ?>

								<?php $image = get_sub_field('image');
								if( !empty($image) ): 
									$thumb = $image['sizes'][ "thumbnail" ];
									$medium = $image['sizes'][ "medium" ];
									$large = $image['sizes'][ "large" ];
									?>
									<img class="lazyload" data-gallery="<?php echo $large; ?>" src="<?php echo $medium; ?>" data-srcset="<?php echo $large; ?> 800w, <?php echo $medium; ?> 600w, <?php echo $thumb; ?> 300w">
									<noscript>
										<img src="<?php echo $large; ?>">										
									</noscript>
								<?php endif; ?>

							<?php endwhile; ?>	

						</div><!-- end of .exhibition_images -->

						<div class="exhibition_gallery"></div>

					</div><!-- .post_content -->

				</li>

	<!-- IF PROJECT -->
	
			<?php elseif( $cat_name[0]->slug == "project" ): ?>
			
				<li class="post post_project post_bg" id="<?php the_ID(); ?>">

					<?php $image = get_field("cover_image"); ?>
					<div class="bg" style="background-image:url('<?php echo $image["url"]; ?>')">
					</div>

					<div class="post_content">
					
						<div class="post_text">

							<div class="post_title"><?php the_title(); ?></div>
							<a href="#documents" class="top_button">
								<span class="lang">Haut de la page</span>
								<span class="lang_en">Back to Top</span>
							</a>

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

						<div class="single_images">

							<?php while ( have_rows('additional_images') ) : the_row(); ?>

								<?php $image = get_sub_field('image');
								if( !empty($image) ): 
									$thumb = $image['sizes'][ "thumbnail" ];
									$medium = $image['sizes'][ "medium" ];
									$large = $image['sizes'][ "large" ];
									$width = $image['width'];
									$height = $image['height'];
									?>
									<img 
										class="lazyload" 
										src="<?php echo $medium; ?>" 
										width="<?php echo $width; ?>" 
										height="<?php echo $height; ?>" 
										data-srcset="<?php echo $large; ?> 800w, 
											<?php echo $medium; ?> 600w, 
											<?php echo $thumb; ?> 300w">	
									<noscript>
										<img src="<?php echo $large; ?>">										
									</noscript>
								<?php endif; ?>

							<?php endwhile; ?>	

						</div><!-- end of .single_images -->




					</div>

				</li>
			
	<!-- IF RESEARCH -->
		
			<?php elseif( $cat_name[0]->slug == "research" ): ?>
			
				<li class="post post_research" id="<?php the_ID(); ?>" style="background-image:url('<?php bloginfo('template_url'); ?>/img/white_bg3.png');">
					
					<div class="post_content">
						<div class="post_text">
							<div class="post_title"><?php the_title(); ?></div>
							<a href="#documents" class="top_button">
								<span class="lang">Haut de la page</span>
								<span class="lang_en">Back to Top</span>
							</a>

							<?php the_content(); ?>
						</div>
					</div>

				</li>

	<!-- IF VIDEO -->
	
			<?php elseif( $cat_name[0]->slug == "video" ): ?>
			
				<li class="post post_video" id="<?php the_ID(); ?>">
					
					<div class="post_content">
						<?php the_field( "video_url" ); ?>
					</div>

				</li>	
			
			<?php endif; ?>

		<?php endwhile; ?>
	<?php endif; 
	wp_reset_postdata(); ?>
</ul>
