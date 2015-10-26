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
					<!-- CONTENT IS LOADED HERE -->
				</li>

		<?php endwhile; ?>
	<?php endif; 
	wp_reset_postdata(); ?>
</ul>
