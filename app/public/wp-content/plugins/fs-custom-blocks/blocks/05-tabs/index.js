/**
 * Block dependencies
 */
import icon from "./icon";
import style from "./style.scss";


/**
 * Block libraries
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
  BlockControls,
  InspectorControls,
  MediaUpload,
  MediaPlaceholder,
  RichText,
	InnerBlocks,
} = wp.editor;
const {
  IconButton,
  Toolbar,
  PanelBody,
  PanelRow,
  RadioControl,
  ToggleControl
} = wp.components;

/**
 * Register block
 */

export default registerBlockType("jsforwpadvblocks/tabs", {
  title: __("Tabs", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon,
  keywords: [
    __("Masonry", "jsforwpadvblocks"),
    __("Images Media", "jsforwpadvblocks"),
    __("Lightbox", "jsforwpadvblocks")
  ],
  attributes: {
    text: {
      type: "string",
      default: "test"
    },
  },
  supports: {
    align: ["full", "wide"]
  },
  edit: props => {
    const {
      attributes: { text },
      className,
      setAttributes
    } = props;
    return (
      <Fragment>
        Tabs
        <RichText
								className="kt-blocks-accordion-title"
								tagName={ 'div' }
								placeholder={ __( 'Add Title' ) }
								value={ "test" }
							/>
      </Fragment>
    );
  },
  save: props => {
    const { text } = props.attributes;
    return (
      <div>
        <div className="react-tab server-render">
          <div style="display: flex; flex-flow: row wrap">
            Server
          </div>
        </div>
      </div>
    );
  }
});
