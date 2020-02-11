const { render } = wp.element;

import FrontendImageSlider from "./components/FrontendImageSlider";

const sliders = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-image-slider"
);

sliders.forEach((slider, index) => {

  render(
    <FrontendImageSlider/>,
    slider
  );
});
