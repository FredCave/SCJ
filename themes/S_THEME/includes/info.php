<div id="info_wrapper" data-height="0">
	<div id="info_original" class="" data-scroll="0">
		<?php 
			$info_query = new WP_Query( "name=info" );
			if ( $info_query->have_posts() ) :
				while ( $info_query->have_posts() ) : $info_query->the_post(); ?>
					<div class="info">
						<?php 
						// INFO FIELDS - REPEATER
						if ( get_field( "info_fields" ) ) { ?>
							<div>
								<?php the_field( "info_fields" ); ?>
							</div>
						<?php
						} // END IF
						// DOCS TOGGLE
						if ( have_rows( "info_documents" ) ) { ?>
							<div class="info_documents">
								<div class="info_documents_toggle toggle_hover">
									PDFs
								</div>
								<div class="info_documents_list">
									<ul>
										<?php
										while ( have_rows("info_documents") ) : the_row(); 
											$file = get_sub_field( "info_document" );
											$url = $file['url'];
											$title = $file['title'];
											$date = explode ( " ", $file['modified'] )[0];
											$date = explode( "-", $date );
											$date_str = $date[2] . "/" . $date[1] . "/" . $date[0];
											$size = filesize( get_attached_file( $file["ID"] ) ) / 1000;
											$size = (int) $size;
											// var_dump( $file );
											?>
											<!-- LINK, TITLE, UPLOADED DATE, ATTACHMENT SIZE -->
											<li><a class="disabled" href="<?php echo $url; ?>" target="_blank"><?php echo $title . ", " . $date_str . ", " . $size . "kb"; ?></a></li>
											<?php
										endwhile; ?>
									</ul>
								</div><!-- END OF #INFO_DOCUMENTS_LIST -->
							</div>
						<?php }
						endwhile;
					endif;
					?>	
					<?php 
					$news_query = new WP_Query( "post_type=news" );
					if ( $news_query->have_posts() ) :
						while ( $news_query->have_posts() ) : $news_query->the_post(); ?>
							<div class="info_post">
								<div class="info_post_content">
									<p class="indent">
										<?php 
										the_title();
										/* the_time( get_option( 'date_format' ) ); */
										?>
									</p>
									<?php the_content(); ?>
								</div>
							</div><!-- END OF .INFO -->
						<?php
						endwhile;
					endif; ?>
					<!-- SQUIGGLE -->
					<div class="line">
						<img src="<?php bloginfo( 'template_url' ); ?>/img/line.svg" />
					</div>

				</div><!-- END OF .INFO -->	
		</div><!-- END OF #INFO_WRAPPER -->

	<div id="info_clones">
		<!-- REPEATED INFO CLONES APPENDED HERE -->
	</div>

</div>