/**
 * Block dependencies
 */
import icon from "./icon";
import style from "./style.scss";
import Gallery from "react-photo-gallery";

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
  MediaPlaceholder
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

export default registerBlockType("jsforwpadvblocks/image-slider", {
  title: __("Image Slider", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon,
  keywords: [
    __("Masonry", "jsforwpadvblocks"),
    __("Images Media", "jsforwpadvblocks"),
    __("Lightbox", "jsforwpadvblocks")
  ],
  attributes: {
    direction: {
      text: "string",
      default: "image slider"
    }
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
      <div>Image Slider</div>
    );
  },
  save: props => {
    const { images, direction, isLightboxEnabled } = props.attributes;
    return (
      <div>Server</div>
    );
  }
});
