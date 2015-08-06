
	<div id="tags">

		<ul id="list_tags">
			<li class="no_hover">
				<span class="lang">Trier par : </span>
				<span class="lang_en">Sort by: </span>
			</li>
			<?php $news=get_posts('category_name=news');
			if ($news) { ?>
				<li>
					<a href="" class="news">
						<span class="underline lang">Actualité</span>
						<span class="underline lang_en">News</span>
					</a>
				</li><span> / </span>
			<?php } ?>
			<?php $exhibition=get_posts('category_name=exhibition');
			if ($exhibition) { ?>
				<li>
					<a href="" class="exhibition">
						<span class="underline lang">Exposition</span>
						<span class="underline lang_en">Exhibition</span>
					</a>
				</li><span> / </span>
			<?php } ?>
			<?php $project=get_posts('category_name=project');
			if ($project) { ?>
				<li>
					<a href="" class="project">
						<span class="underline lang">Projet</span>
						<span class="underline lang_en">Project</span>
					</a>
				</li><span> / </span>
			<?php } ?>
			<?php $research=get_posts('category_name=research');
			if ($research) { ?>
				<li>
					<a href="" class="research">
						<span class="underline lang">Recherche</span>
						<span class="underline lang_en">Research</span>
					</a>
				</li><span> / </span>
			<?php } ?>	
				<li id="clear_tags">
					<a href="" class="all">
						<span class="underline lang">Tout</span>
						<span class="underline lang_en">All</span>
					</a>
				</li>		
		</ul>
		

	</div>

	<div id="list">

		<ul>
			<!-- NEWS LOOP -->
			<?php $args = array(
				"category_name" => "news",
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
			<!-- EVERYTHING ELSE -->
			<?php 
			$args = array(
				"category_name" => "research,project,exhibition",
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

