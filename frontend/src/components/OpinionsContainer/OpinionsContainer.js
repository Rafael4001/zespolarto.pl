import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import {VIDEO_CARD_IMAGE, LEAF, LOVE_LETTER, MARRIED_OPINIONS} from "../../constants";
import Button from '@material-ui/core/Button';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import Typography from '@material-ui/core/Typography';
import Image from "next/image";

const responsConfig = {
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


const OpinionsContainer = ({classes}) => {
  const Item = (details) => {
    const {man, woman, picture, weddingDate, opinion} = details

    return (
      <div className={classNames(classes.mediaCard)}>
        <div>
          <Image
            src={picture}
            alt={picture}
            width={301}
            height={201}
            // unoptimized={true}
            className={classes.photoCard}
          />
        </div>
        <div className={classes.textContainer}>
          <Image
            src={LEAF}
            alt={'leaf'}
            width={30}
            height={30}
            className={classes.leaf_icon}
          />
          <div className={classes.quotationContainer}>
            {man && woman && <Typography classes={{root: classes.names,}}>{woman} &</Typography>}
            {man && woman && <Typography classes={{root: classes.names,}}>{man}</Typography>}
            {opinion && <Typography classes={{root: classes.quotation,}}>{opinion.slice(0, 40)}...</Typography>}
            <Typography classes={{root: classes.author,}}>{weddingDate}r.</Typography>
            <Button><Typography classes={{root: classes.more,}}>więcej...</Typography></Button>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div>
      <div className={classes.titleContainer}>
        <Image
          src={LOVE_LETTER}
          alt={'poem'}
          width={60}
          height={88}
          // unoptimized={true}
          // className={classes.leaf_icon}
        />
        <span>Kilka słów od naszych przyjaciół.</span>

      </div>
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
        {MARRIED_OPINIONS.map(item => Item(item))}
      </Carousel>
      <div className={classes.buttonMoreContainer}>
        <Button variant="outlined" > <Typography classes={{root: classes.moreOpinionsButton,}}>Zobacz więcej opinii</Typography></Button>
      </div>
    </div>
  )
}

OpinionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

OpinionsContainer.defaultProps = {};

OpinionsContainer.displayName = 'OpinionsContainer';

export default OpinionsContainer
