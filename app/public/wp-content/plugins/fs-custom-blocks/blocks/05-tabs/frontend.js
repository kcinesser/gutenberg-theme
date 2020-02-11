const { render } = wp.element;

import FrontendTabs from "./components/FrontendTabs";

const tabs = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-tabs"
);

console.log("tabs");

tabs.forEach((tab, index) => {
  console.log(tab)
  // const direction = gallery.dataset.direction;
  // const islightboxenabled = gallery.dataset.islightboxenabled;
  // const images = gallery.querySelectorAll("img");
  // const photos = [];
  // images.forEach(image => {
  //   photos.push({
  //     src: image.src,
  //     width: image.width,
  //     height: image.height,
  //     alt: image.alt,
  //     caption: image.title
  //   });
  // });
  render(
    <FrontendTabs />,
    tab
  );
});
