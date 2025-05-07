<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u944559448_K1fcG' );

/** Database username */
define( 'DB_USER', 'u944559448_7VDrh' );

/** Database password */
define( 'DB_PASSWORD', 'iC4ZzS1neK' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'MLoFMIW-?&>6aq65]QIu4[I6@t}H~sD~+Rp9@75(ctljPW:j3V9W<Im^}myzosJJ' );
define( 'SECURE_AUTH_KEY',   '2CmzvyRf5W9/g4-z1Ojc=xen[`]P64|=)o2e_l(+|c0OQID}BP+m<<^ ?1zDa=oX' );
define( 'LOGGED_IN_KEY',     '8p=j]~aQgdKbHM vZIG$b44QUz1}#e!Wqf/9+Cf!}<VM<xW{X4LVhC[8fES^#(j8' );
define( 'NONCE_KEY',         '^pZn i8?ObJt4F@cl|sVSUgqJut9dzA8YYo>M)-u32m6M >!yN5>(y0i?=XG9;#j' );
define( 'AUTH_SALT',         'VO%T?#_{:!n*+8IMNBnG7]4%>(5t!x|sU#k/nGxSqOg-G$BE</3E#a.yYm&hDp=*' );
define( 'SECURE_AUTH_SALT',  'z^$L(I9B5eAmK Oq9I!gp:p1r*orP9~-PLA~H}JQ@IPQ{k975J}iWM>dPM85GV{d' );
define( 'LOGGED_IN_SALT',    '0tD##td]j2}A&L{=&tj6T*U3~m3w@KNko-kO_8x,!mY^Z%vSe?zj+I=q+,Ju[Lf`' );
define( 'NONCE_SALT',        'nt%(7_V6To<{KP3b5tL%uZov/S+nA8Z=.KV %bim1L=9m[Gh1@ooIrZi(>AGrhv*' );
define( 'WP_CACHE_KEY_SALT', '7N9{zmIX}v{&@JD:6&jj1WJ(Ui!ZG)r$OkUbesDx,tX)WBm~/~6)*l8z9RgQy3tu' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', 'd6c813a12d958ec894fcb8d83ccf37fe' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
