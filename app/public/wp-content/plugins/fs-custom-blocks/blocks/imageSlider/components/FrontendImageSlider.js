import { Component } from 'react';

const tempImages = [
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
]

export default class FrontendImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      images: tempImages,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    
  }
  
  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentSlide === this.state.images.length - 1) {
      return this.setState({
        currentSlide: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    console.log(document.querySelector('.slide').offsetWidth)
    return document.querySelector('.slide').offsetWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
        goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
        goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`
  }
  
  return <div className="slide" style={styles}></div>
}

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      >
    </div>
  );
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      {`<`}
    </div>
  );
}