<div id="info_wrapper">
	<?php 
	$info_query = new WP_Query( "name=info" );
	if ( $info_query->have_posts() ) :
		while ( $info_query->have_posts() ) : $info_query->the_post(); ?>

			<div id="info">

				<?php if ( get_field( "info_general" ) ) { ?>
					<div id="info_general">
						<?php the_field( "info_general" ); ?>
					</div>
				<?php
				}
				if ( get_field( "info_education" ) ) { ?>
					<div id="info_education">
						<?php the_field( "info_education" ); ?>
					</div>
				<?php
				}
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

			</div><!-- END OF #INFO -->

		<?php
		endwhile;
	endif;
	?>
</div><!-- END OF #INFO_WRAPPER -->