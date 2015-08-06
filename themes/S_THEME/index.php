<?php get_header(); ?>

<?php get_sidebar(); ?>

<div id="gradients">

	<div id="layer1" class="layer"></div>
	<div id="layer2" class="layer"></div>
	<div id="layer3" class="layer"></div>
	<div id="layer4" class="layer"></div>

	<!-- MARKERS -->

	<div id="marker_tl" class="marker"></div>
    <div id="marker_tr" class="marker"></div>
    <div id="marker_bl" class="marker"></div>
    <div id="marker_br" class="marker"></div>

</div>

<?php require("section-docs.php"); ?>

<?php require("section-projects.php"); ?>

<?php require("section-info.php"); ?>


<?php get_footer(); ?>