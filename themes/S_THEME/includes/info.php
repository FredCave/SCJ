<div id="info_wrapper">
	<?php 
	$info_query = new WP_Query( "name=info" );
	if ( $info_query->have_posts() ) :
		while ( $info_query->have_posts() ) : $info_query->the_post(); ?>

			<div id="info">

				<?php 
				// GENERAL INFO
				if ( get_field( "info_general" ) ) { ?>
					<div id="info_general">
						<?php the_field( "info_general" ); ?>
					</div>
				<?php
				}
				// EDUCATION
				if ( get_field( "info_education" ) ) { ?>
					<div id="info_education">
						<?php the_field( "info_education" ); ?>
					</div>
				<?php
				}
				// CONTACT
				if ( get_field( "info_contact" ) ) { ?>
					<div id="info_contact">
						<?php the_field( "info_contact" ); ?>
					</div>
				<?php
				}
				// DOCS TOGGLE
				if ( have_rows( "info_documents" ) ) { ?>
					<div id="info_documents">
						<div id="info_documents_toggle" class="toggle_hover">
							Documents
						</div>
						<div id="info_documents_list">
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
									<li><a href="<?php echo $url; ?>"><?php echo $title . ", " . $date_str . ", " . $size . "kb"; ?></a></li>
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
					<div id="info_expo_solo">
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