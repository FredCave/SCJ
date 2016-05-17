<div id="pdf">
	<?php
	$args = array(
		"name" 		=> "documents"
	);
	$doc_query = new WP_Query( $args );
	if ( $doc_query->have_posts() ) :
		while ( $doc_query->have_posts() ) : $doc_query->the_post();
			if ( have_rows("documents") ) {
				while ( have_rows("documents") ) : the_row(); ?>
					
					<img src="<?php bloginfo( 'template_url' ); ?>/img/doc_icon.svg" />
					
				<?php
				endwhile;
			}
		endwhile;
	endif;
	?>
</div>