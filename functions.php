<?php

// add styles
function theme_styles() {
    wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'main-css', get_template_directory_uri() . '/assets/css/common.css' );
    wp_enqueue_style( 'default-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

// add scripts
function theme_scripts() {
    wp_deregister_script('jquery');
    wp_register_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery-2.2.3.min.js', array(), '2.2.3', true );
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'main-script', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

?>