<?php
/*
function enqueue_scj_scripts() {

	// jQuery
	wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    wp_enqueue_script( 'jquery' );
	
	wp_enqueue_script( 'custom', get_template_directory_uri() . '/js/custom.js', array('jquery'));
}
add_action('wp_enqueue_scripts', 'enqueue_scj_scripts');
*/

add_action( 'init', 'create_post_types' );
function create_post_types() {
  register_post_type( 'documents',
    array(
      'labels' => array(
        'name' => __( 'Documents' )
      ),
      'public' => true,
      'has_archive' => true,
      'supports' => array('editor','title','custom-fields'),
	  'menu_position' => 4
    )
  );
  register_post_type( 'news',
    array(
      'labels' => array(
        'name' => __( 'News' )
      ),
      'public' => true,
      'has_archive' => true,
      'supports' => array('editor','title','custom-fields'),
	  'menu_position' => 5
    )
  );
}

?>