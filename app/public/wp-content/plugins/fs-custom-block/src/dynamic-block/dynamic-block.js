/**
 * BLOCK: fs-custom-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { Component } = wp.element;

//  Import CSS.
import './editor.scss';
import './style.scss';

// Import Frontend Component

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-fs-custom-dynamic-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'fs-custom-dynamic-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'fs-custom-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: class extends Component {
		constructor() {
			super(...arguments);
			console.log(this.props.name, ": constructor()");
			// example how to bind `this` to the current component for our callbacks
			// a place for the state
			this.state = {};
		}

		toggle = () => {
			console.log("test")
		}

		// Creates a <p class='wp-block-cgb-block-fs-custom-block'></p>.
		render() {
			return (
				<div className={ this.props.className }>
					<button onClick={this.toggle}>Click Me</button>
				</div>
			);
		}
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: class extends Component {
		constructor() {
			super(...arguments);

		}

		render() {
			return <Test />
		}
	},
} );

class Test extends Component {
	handleClick = () => {
		console.log("test")
	}

	render() {
		<button onclick={this.handleClick}>Click Me</button>
	}
}
