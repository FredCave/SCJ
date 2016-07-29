<div id="info_wrapper">

	<div id="info_original" class="" data-scroll="0">
		<?php 
		$info_query = new WP_Query( "post_type=news" );
		if ( $info_query->have_posts() ) :
			while ( $info_query->have_posts() ) : $info_query->the_post(); ?>

				<div class="info">

					<?php 
					// INFO FIELDS - REPEATER



					if ( have_rows( "info_fields" ) ) {
						while ( have_rows ( "info_fields" ) ) : the_row();
						?>
							<div>
								<?php the_sub_field( "info_field" ); ?>
							</div>
						<?php
						endwhile;
					} // END IF

					// DOCS TOGGLE
					if ( have_rows( "info_documents" ) ) { ?>
						<div class="info_documents">
							<div class="info_documents_toggle toggle_hover">
								Documents
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
										<!--
										LINK, TITLE, UPLOADED DATE, ATTACHMENT SIZE
										-->
										<li><a href="<?php echo $url; ?>" target="_blank"><?php echo $title . ", " . $date_str . ", " . $size . "kb"; ?></a></li>
									<?php
									endwhile;
									?>
								</ul>
							</div><!-- END OF #INFO_DOCUMENTS_LIST -->
						</div>
					<?php
					}
					// EXHIBITIONS
					if ( get_field( "info_expo_solo" ) ) { ?>
						<div class="info_expo_solo">
							<?php if ( have_rows( "info_expo_solo" ) ) : 
								while ( have_rows( "info_expo_solo" ) ) : the_row(); ?>
									<div class="info_expo_row">
										<div class="info_expo_col">
											<?php the_sub_field( "info_expo_solo_year" ); ?>
										</div>
										<div class="info_expo_col">
											<?php the_sub_field( "info_expo_solo_text" ); ?>
										</div>
									</div><!-- .info_expo_row -->
								<?php
								endwhile; 
							endif; ?>
						</div>
					<?php
					}
					?>
					<div>Website: <a href="http://fredcave.com" target="_blank">fredcave.com</a></div>

				</div><!-- END OF #INFO -->

			<?php
			endwhile;
		endif;
		?>
	</div><!-- END OF #INFO_WRAPPER -->


	<div id="info_clones">
		<!-- REPEATED INFO CLONES APPENDED HERE -->
	</div>

</div>


