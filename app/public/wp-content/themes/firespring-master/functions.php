<?php

define("THEME_VERSION",1);


/******
* START — Enqueue script and stylesheets
******/

function theme_enqueue_styles() {
	//wp_enqueue_script( 'main-theme-js', get_template_directory_uri() . '/js/main.js', array( 'jquery' ), THEME_VERSION, true );
	wp_enqueue_style( 'style', get_stylesheet_uri() );

}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

/******
* END — Enqueue script and stylesheets
******/


/******
* START — theme support functions 
******/
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'search-form'
	) );
add_theme_support( 'automatic-feed-links' );



function theme_slug_setup() {
   add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'theme_slug_setup' );

//add excerpt support to pages
add_post_type_support( 'page', 'excerpt' );

/******
* END — theme support functions 
******/

function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'extra-menu' => __( 'Extra Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );
