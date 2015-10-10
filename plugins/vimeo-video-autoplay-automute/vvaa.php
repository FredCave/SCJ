<?php
/*
Plugin Name: Vimeo Video Autoplay Automute
Plugin URI: http://www.bengal-times.com/plugins/vimeo-video-autoplay-automute
Description: Allows the user to embed Vimeo movie clips by entering a shortcode ([vimeo]) into the post area.
Author: Delower Hossain Rhine
Version: 1.0
Author URI: http://www.bengal-times.com/dhrhine
License: GPL 2.0, @see http://www.gnu.org/licenses/gpl-2.0.html
*/
class vvaa
{
	function shortcode($atts, $content = null)
	{
		extract(shortcode_atts(array(
			'clip_id' => '',
			'autoplay' =>'1',
			'automute' => '1',
			'width' => '400',
			'height' => '225',
			'title' => '1',
			'byline' => '1',
			'portrait' => '1',
			'loop' => '0',
			'color' => '',
		), $atts));

		if (empty($clip_id) || !is_numeric($clip_id)) return '<!-- VVAA: Invalid clip_id -->';
		if ($height && !$atts['width']) $width = intval($height * 16 / 9);
		if (!$atts['height'] && $width) $height = intval($width * 9 / 16);

		return
			"<div class='myvideo' data='http://vimeo.com/$clip_id/$autoplay/$automute/$width/$height/$title/$byline/$portrait/$loop/$color'>auto playing auto muting video</div>";
	}
}

add_shortcode('vimeo', array('vvaa', 'shortcode'));

 // Define the URL path to the plugin...
$plugin_path = plugin_dir_url( __FILE__ );

if ( !wp_script_is( vvaa, 'enqueued' ) ) {
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script(
		'jquery-froogaloop',
		'http://a.vimeocdn.com/js/froogaloop2.min.js',
		array( 'jquery' ),
		null, // No version of the jQuery froogaloop2 Plugin.
		true 
	);
	wp_enqueue_script(
		'jquery-vvaa',
		$plugin_path . 'vvaa.js',
		array( 'jquery' ),
		null, // Current version of the jQuery Teletype Plugin.
		true 
	);

}
?>
