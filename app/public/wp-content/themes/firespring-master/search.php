<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Firespring
 * @subpackage firespring-master
 * @since 1.0
 * @version 1.0
 */


get_header(); ?>





	<?php
	while ( have_posts() ) :
		the_post();
		
		the_content();

	endwhile; // End of the loop.
	?>





<?php
get_footer();
