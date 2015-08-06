<div id="information">
	<div id="info_content">
		<?php
		query_posts( "pagename=information" );
		while ( have_posts() ) : the_post(); ?>
			
			<div class="info_top">
				<div class="info_field"><?php the_field("info_general"); ?></div>
				<div class="info_field"><?php the_field("info_education"); ?></div>
			</div>
			
			<div class="info_left">
				<strong>Expositions solo (sélection)</strong>
				<div class="info_field">
					<?php while ( have_rows("info_expo_solo") ) : the_row(); ?>
						<p class="year"><?php the_sub_field("info_expo_solo_year"); ?></p>
						<?php the_sub_field("info_expo_solo_text"); ?>
					<?php endwhile; ?>	
				</div>
				<strong>Expositions groupes (sélection)</strong>
				<div class="info_field">
					<?php while ( have_rows("info_expo_solo") ) : the_row(); ?>
						<p class="year"><?php the_sub_field("info_expo_solo_year"); ?></p>
						<?php the_sub_field("info_expo_solo_text"); ?>
					<?php endwhile; ?>	
				</div>
			</div>
			
			<div class="info_right">
				<strong>Résidences / Prix</strong>
				<div class="info_field">
					<?php while ( have_rows("info_expo_solo") ) : the_row(); ?>
						<p class="year"><?php the_sub_field("info_expo_solo_year"); ?></p>
						<?php the_sub_field("info_expo_solo_text"); ?>
					<?php endwhile; ?>	
				</div>
				<strong>Publications</strong>
				<div class="info_field">
					<?php while ( have_rows("info_expo_solo") ) : the_row(); ?>
						<p class="year"><?php the_sub_field("info_expo_solo_year"); ?></p>
						<?php the_sub_field("info_expo_solo_text"); ?>
					<?php endwhile; ?>	
				</div>
			</div>
		<?php
		endwhile;
		wp_reset_query();
		?>
	</div>	
</div><!-- end of #information -->