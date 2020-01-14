<?php
/**
 * The header for our theme
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Firespring
 * @subpackage firespring-master
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<main id="main" class="site-main" role="main">
	
	<div id="main-nav">
		<img src="/wp-content/uploads/2020/01/Firespring-logo-blk_450px.png" />
	
		<?php wp_nav_menu(); ?>
	</div>
