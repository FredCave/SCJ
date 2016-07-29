<?php
function enqueue_scj_scripts() {
    // jQuery
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    wp_enqueue_script( 'jquery' );

	wp_enqueue_script('underscore', get_template_directory_uri() . '/js/underscore.min.js', array('jquery'), true);
	wp_enqueue_script('lazysizes', get_template_directory_uri() . '/js/lazysizes.min.js', array('jquery'), true);
	wp_enqueue_script('scrollstop', get_template_directory_uri() . '/js/jquery.scrollstop.min.js', array('jquery'), true);


}
add_action('wp_enqueue_scripts', 'enqueue_scj_scripts');

add_action( 'init', 'create_post_types' );
function create_post_types() {
	register_post_type( 'news',
		array(
			'labels' => array(
			'name' => __( 'News' )
		),
		'public' => true,
		'has_archive' => true,
		'supports' => array('editor','title'),
		'menu_position' => 4
		)
	);
}

// SHOW FIELDS HIDDEN BY SCREEN OPTIONS 

// function hide_screen_options() {

// 	echo '<style>
// 	    .postbox {
// 			display:block !important;
// 		}
// 		.postbox.acf-hidden {
// 			display: none !important;
// 		}
// 		#screen-options-link-wrap {
// 			display:none !important;
// 		}';
// }

// add_action('admin_head', 'hide_screen_options');

?>