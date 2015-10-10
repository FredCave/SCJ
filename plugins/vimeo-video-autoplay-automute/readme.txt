=== Vimeo Video Autoplay Automute ===
Contributors: rhinokul
Tags: video, embed, movie, shortcode, plugin, clip, vimeo, autoplay, automute, flv, quicktag, html5
Requires at least: 3.1
Tested up to: 4.0.1
Stable tag: rhine

Allows the user to embed Vimeo movie clips with autoplay automute features by entering a shortcode ([vimeo]) into the post area.

== Description ==

Allows the user to embed Vimeo movie clips with autoplay automute features by entering a shortcode (`[vimeo]`) into the post area. Vimeo's options regarding the display of meta properties like autoplay, automute, by-line, title, or the video author's portrait are supported as short code attributes. I have built this plugin as a solution for embedding videos on [our site](http://www.bengal-times.com/plugins/vimeo-video-autoplay-automute).

= Credits =
N/A

= Usage =
* Enter the `[vimeo clip_id="XXXXXXX"]` short code into any post. `clip_id` is the number from the clip's URL (e.g. `vimeo.com/113868429`)
*  In order to enable autoplay automute feature enter the shortcode as follows: `[vimeo clip_id="XXXXXXX" autoplay="1" automute="1"]`
*  Optionally modify the clip's appearance by specifying width or height, like so: `[vimeo clip_id="XXXXXXX" width="400" height="225"]`
*  Toggle the display of byline, portrait and title like so: `[vimeo clip_id="XXXXXXX" byline="0" portrait="1" title="1"]`
*  Using empty values for either the `width` or `height` attributes will cause plugin to calculate the proper dimension based on a 16:9 aspect ration. Example: `[vimeo clip_id="113868429" height="300" width=""]` or `[vimeo clip_id="113868429" height="" width="640"]`

== Installation ==

*  Unzip `vimeo-video-autoplay-automute.zip` and upload the contained files to the `/wp-content/plugins/` directory
*  Activate the plugin through the 'Plugins' menu in WordPress
*  Enter the `[vimeo clip_id="XXXXXXX"]` short code into any post. `clip_id` is the number from the clip's URL (e.g. `vimeo.com/113868429`)
*  In order to enable autoplay automute feature enter the shortcode as follows: `[vimeo clip_id="XXXXXXX" autoplay="1" automute="1"]`
*  Optionally modify the clip's appearance by specifying width or height, like so: `[vimeo clip_id="XXXXXXX" width="400" height="225"]`
*  Toggle the display of byline, portrait and title like so: `[vimeo clip_id="XXXXXXX" byline="0" portrait="1" title="1"]`
*  Using empty values for either the `width` or `height` attributes will cause plugin to calculate the proper dimension based on a 16:9 aspect ration. Example: `[vimeo clip_id="113868429" height="300" width=""]` or `[vimeo clip_id="113868429" height="" width="640"]`

== Screenshots ==

1. Screenshot for how to write vimeo short code into post or page.
2. This is the second screen shot corresponding output.

== Change log ==

= Version 1.0 =

Initial release.