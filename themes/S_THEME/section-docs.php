<ul>
	<?php $args = array(
		"post_type" => "documents",
		"orderby" => "rand"
	); ?>
	<?php $theQuery = new WP_Query( $args ); ?>
	<?php if ( $theQuery->have_posts() ) : ?>
		<?php while ( $theQuery->have_posts() ) : $theQuery->the_post(); ?>    
			<?php $cat_name = get_the_category(); ?>			
						
				<li class="doc" >

					<?php 					
					$file = get_field("file");
					
					$date_str = $file["date"]; // STRING
					$the_date = DateTime::createFromFormat('Y-m-d H:i:s', $date_str);
					
					$filesize = filesize( get_attached_file( $file["id"] ) );
					$kb = intval( $filesize / 1000 ) . " kb";											
					?>

					<div class="doc_img">
						<a href="<?php echo $file['url'] ?>">
							<img src="<?php bloginfo( 'template_url' ); ?>/img/pdf.png" />
						</a>
					</div>

					<div class="doc_text">

						<div><?php the_title(); ?></div>

						<div>
							<span class="lang">Ajouté le </span>
							<span class="lang_en">Uploaded the </span>
							<?php echo $the_date->format('d-m-Y'); ?>
						</div>

						<div><?php echo $kb; ?></div>

					</div>

				</li>
			
		<?php endwhile; ?>
	<?php endif; 
	wp_reset_postdata(); ?>
</ul>