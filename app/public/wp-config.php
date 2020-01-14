<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'DwoswiVZaTVQFGhyTFLNQhCAiaBbOFA4tXN5h+aBcJ7CI/sedSG+pC5xWUphIV733r0snzua+IaDS00KVu9Lng==');
define('SECURE_AUTH_KEY',  'yfoFLQ5q//j0MEx0Mz2oGd6HaGJ5/d5qZnaeNAhj1vGmvJE4RBdqmO22YB11Ra+0vK6rJ3UUmrDlX1oTk6rv9A==');
define('LOGGED_IN_KEY',    'w1MpnNVSvv8pdVBvYo3qNeWv0+ljVv65wZWb8sm5IkJYWqclu+8/FmODwhUjz6sc5ZeaekCdbCgWEJx8uuvrWA==');
define('NONCE_KEY',        'dOsl0mW28l6XUYdf2h3ZdSXAJqnWYaNleRG+Swg+DJd8tVZ4X10ziX4bt2Z7w8bM7C0hqZNR3fo71SERpYcHgQ==');
define('AUTH_SALT',        'NwPMnZlZwmp3gZlhzeXOkga/WCNeadVJBj/V7pUoFSe5u/92FdhOZU4LZIXnt71cr56kp5XPKgqTm63UQsH98g==');
define('SECURE_AUTH_SALT', 'qE03yEyOiLDUviy/nqA1R0gOpyh5fU3bB0qLNx4/83g+Fh9t3CUHRpHPk4O/0cP8838srIVHFkfhA9Z2ml2gSA==');
define('LOGGED_IN_SALT',   'fhxavZ6QKQqAsjh5F1kytf20rmNtiJk2Tz6RqUYMhWfLDl9iOJDQdMuYxUe/w5O/f7IQo1Dm7z8qgK0NIxvBPg==');
define('NONCE_SALT',       'VBrRM7velFDM8a7MftuHwZb3lCTeWfhempMTuutYz1XNPBnsNnCexauwsPh44teDMsU3xKtcpafhg4NmzeS+OQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
