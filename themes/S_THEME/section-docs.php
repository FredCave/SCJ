<div class="list">

	<ul>
		<?php $args = array(
			"post_type" => "documents",
			"orderby" => "rand"
		); ?>
		<?php $theQuery = new WP_Query( $args ); ?>
		<?php if ( $theQuery->have_posts() ) : ?>
			<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
				<?php $cat_name = get_the_category(); ?>			
							
				<?php 					
				$file = get_field("file");
				
				$date_str = $file["date"]; // STRING
				$the_date = DateTime::createFromFormat('Y-m-d H:i:s', $date_str);
				
				$filesize = filesize( get_attached_file( $file["id"] ) );
				$kb = intval( $filesize / 1000 ) . " kb";											
				?>

				<li class="list_post">
					<a href="<?php echo $file['url'] ?>">								
						<span><?php the_title(); ?>, </span>
					</a>
				</li>
				
			<?php endwhile; ?>
		<?php endif; 
		wp_reset_postdata(); ?>
	</ul>

</div>