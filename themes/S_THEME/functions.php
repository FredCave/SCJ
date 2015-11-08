<?php
function enqueue_scj_scripts() {
    // jQuery
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    wp_enqueue_script( 'jquery' );

    wp_enqueue_script( 'fracs', get_template_directory_uri() . '/js/jquery.fracs.js', array('jquery'));
    wp_enqueue_script( 'onscreen', get_template_directory_uri() . '/js/jquery.onscreen.js', array('jquery'));
    wp_enqueue_script( 'smooth-scroll', get_template_directory_uri() . '/js/jquery.smooth-scroll.min.js', array('jquery'));  
    wp_enqueue_script( 'lazysizes', get_template_directory_uri() . '/js/lazysizes.min.js', array('jquery'));
}
add_action('wp_enqueue_scripts', 'enqueue_scj_scripts');

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