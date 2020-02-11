<?php

namespace Firespring\FS_Custom_Blocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'jsforwpadvblocks',
				'title' => __( 'Firespring Custom Blocks', 'jsforwpadvblocks' ),
			],
		]
	);
}, 10, 2 );