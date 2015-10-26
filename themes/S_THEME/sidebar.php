<div id="header_bar" class="click_ignore">
	<ul id="main_menu">

		<li>
			<a href="" id="index_toggle">
				<span class="lang">Projets,</span>
				<span class="lang_en">Projects,</span>
			</a>
		</li>

		<li>
			<a href="" id="doc_toggle">
				<span>PDFs,</span> 
			</a>
		</li>

		<li>
			<a href="#news" id="news_toggle">
				<span class="lang">Actualités,</span>
				<span class="lang_en">News,</span>
			</a>
		</li>

		<li>
			<a href="#information" id="info_toggle">
				<span class="lang">Informations,</span>
				<span class="lang_en">Information,</span>
			</a>
		</li>

		<li class="lang_toggle">
			<span class="header_en">En</span> / <span class="header_fr selected">Fr</span>
		</li>

	</ul>

	<div id="index" class="header_sub">

		<?php require("section-index.php"); ?>

	</div>

	<div id="documents" class="header_sub">

		<?php require("section-docs.php"); ?>

	</div>

</div>

<div id="header_button">
	<a href="">
		<img class="menu_open menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_black.png" alt="menu open button"/>
		<img class="menu_close menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_close.png" alt="menu close button"/>
	</a>
</div>

<!-- BACK TO TOP BUTTON -->

<div class="post_info_toggle">
	<a href="" class="top_button">
		<span class="lang">Haut de la page</span>
		<span class="lang_en">Back to Top</span>
	</a>
</div>
