<div id="list">

	<ul>
		<?php 
		$args = array(
			"category_name" => "project,exhibition",
			"orderby" => "rand"
		); ?>
		<?php $the_query = new WP_Query($args); ?>
		<?php if ( $the_query->have_posts() ) : ?>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>    
				<?php $cat_name = get_the_category(); ?>
					
					<li class="list_post <?php echo $cat_name[0]->slug; ?>">
						<a href="#<?php the_ID(); ?>">								
							<span><?php the_title(); ?></span>
						</a>
					</li> <span class="dash">— </span> 
					
			<?php endwhile; ?>
		<?php endif; ?>
	</ul>

</div>

