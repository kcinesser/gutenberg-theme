<?php
/**
 * The template for displaying author archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
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
