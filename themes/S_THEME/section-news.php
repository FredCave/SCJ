<ul>
	<?php $args = array(
		"category_name" => "news"
	); ?>
	<?php $theQuery = new WP_Query( $args ); ?>
	<?php if ( $theQuery->have_posts() ) : ?>
		<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
			<?php $cat_name = get_the_category(); ?>			
						
				<li class="post_news" id="<?php the_ID(); ?>">

					<div class="news_content">						
						
						<div class="news_text">
							<marquee class="post_title"><?php the_title(); ?></marquee>
							<a href="#documents" class="top_button hide">
								<span class="lang">Haut de la page</span>
								<span class="lang_en">Back to Top</span>
							</a>

							<?php the_field("text"); ?>
						</div>																	
						
					</div>	
					<br>			
				</li>
			
		<?php endwhile; ?>
	<?php endif; 
	wp_reset_postdata(); ?>
</ul>