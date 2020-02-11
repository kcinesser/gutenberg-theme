<?php
/**
 * Main plugin file
 *
 * @package     Firespring\FS_Custom_Blocks
 * @author      Firespring
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Firespring Custom Blocks
 * Plugin URI:  https://firespring.com
 * Description: Custom WordPress blocks from Firespring Web Development.
 * Version:     1.0.0
 * Author:      Firespring
 * Author URI:  https://firespring.com
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Firespring\FS_Custom_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}



// Enqueue JS and CSS
include __DIR__ . '/lib/register-scripts.php';

// Register block categories
include __DIR__ . '/lib/block-categories.php';

// Setup Global Block Setting Options Setting
include __DIR__ . '/lib/wp-options.php';

// Register REST API Endpoint
include __DIR__ . '/lib/rest-api-endpoint.php';

// Register blocks server side
include __DIR__ . '/lib/register-blocks.php';

// Register any PHP block filters
include __DIR__ . '/lib/block-filters.php';