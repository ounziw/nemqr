<?php
/*
Plugin Name: nemqr
*/
/**
 * Plugin name: NEM QR code block
 * Version: 0.9
 * Description: creates NEM QR code using Google API.
 * Author: ounziw
 * Author URI: https://php4wordpress.calculator.jp/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: nemqr
 */

function nemqr_register_block() {

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'nemqr',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type( 'nemqr/nemqr', array(
        'editor_script' => 'nemqr',
    ) );

}
add_action( 'init', 'nemqr_register_block' );

function nemqr_enqueue_scripts() {
    if ( has_block( 'nemqr/nemqr' ) ) {
        wp_enqueue_script(
            'nemqrfront',
            plugins_url('js/nemqr.js', __FILE__),
            array('jquery'),
        filemtime( plugin_dir_path( __FILE__ ) . 'js/nemqr.js' ),
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'nemqr_enqueue_scripts' );

function nemqr_load_textdomain() {
    load_plugin_textdomain( 'nemqr', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'nemqr_load_textdomain' );
