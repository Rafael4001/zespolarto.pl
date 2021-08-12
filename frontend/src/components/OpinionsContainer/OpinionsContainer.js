import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import classNames from 'classnames';
import {VIDEO_CARD_IMAGE} from "../../constants";
// import {Carousel} from 'react-responsive-carousel'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import Typography from '@material-ui/core/Typography';


const OpinionsContainer = ({classes}) => {


  const Item = () => (
    <div className={classNames(classes.mediaCard)}>
      <div>
        <img
          src={VIDEO_CARD_IMAGE}
          alt={'photo_video'}
          className={classes.photoCard}
        />
      </div>
      <div className={classes.textContainer}>
        <Typography classes={{root: classes.text,}}>FILMY</Typography>
        <div className={classes.quotationContainer}>
          <Typography classes={{root: classes.quotation,}}>"Jeden moment potrafi zmienić całe życie."</Typography>
          <Typography classes={{root: classes.author,}}>-Anonim</Typography>
        </div>
      </div>
    </div>
  )

const responsConfig={
  superLargeDesktop: {
    breakpoint: {
      max: 3000,
      min: 921
    },
    items: 4,
    partialVisibilityGutter: 20
  },
  desktop: {
    breakpoint: {
      max: 920,
      min: 731
    },
    items: 3,
    partialVisibilityGutter: 20
  },
  tablet: {
    breakpoint: {
      max: 730,
      min: 501
    },
    items: 2,
    partialVisibilityGutter: 20
  },

  mobile: {
    breakpoint: {
      max: 500,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  }
}

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay={true}
        // autoPlaySpeed={2000}
        // centerMode={true}
        partialVisible={true}
        className=""
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsConfig}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        // removeArrowOnDeviceType="mobile"
      >
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </Carousel>
    </div>
  )
}

OpinionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

OpinionsContainer.defaultProps = {};

OpinionsContainer.displayName = 'OpinionsContainer';

export default OpinionsContainer
