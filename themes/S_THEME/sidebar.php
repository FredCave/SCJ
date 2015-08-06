<div id="header_bar">
	<ul id="main_menu">

		<li><a href="" id="index_toggle"><span>Index,</span></a></li>

		<li>
			<a href="#documents">
				<span>PDFs,</span> 
			</a>
		</li>

		<li>
			<a href="#information">
				<span class="lang">Informations,</span>
				<span class="lang_en">Information,</span>
			</a>
		</li>

		<li class="lang_toggle">
			<span class="header_en">En</span> / <span class="header_fr selected">Fr</span>
		</li>

	</ul>

	<div id="index">

		<?php require("section-index.php"); ?>

	</div>

</div>

<div id="header_button">
	<a href="">
		<img class="menu_open menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_black.png" alt="menu open button"/>
		<img class="menu_close menu_button" src="<?php bloginfo('template_url'); ?>/img/menu_close.png" alt="menu close button"/>
	</a>
</div>