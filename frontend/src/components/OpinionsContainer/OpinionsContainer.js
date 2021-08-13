import React from 'react'
import PropTypes from "prop-types";
import {LINKS, LOVE_LETTER, MARRIED_OPINIONS} from "../../constants";
import Button from '@material-ui/core/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Typography from '@material-ui/core/Typography';
import Image from "next/image";
import OpinionTale from '../OpinionTale'
import Link from 'next/link'

const responsConfig = {
  superLargeDesktop: {
    breakpoint: {
      max: 3000,
      min: 1081
    },
    items: 4,
    partialVisibilityGutter: 20
  },
  desktop: {
    breakpoint: {
      max: 1080,
      min: 816
    },
    items: 3,
    partialVisibilityGutter: 20
  },
  tablet: {
    breakpoint: {
      max: 815,
      min: 541
    },
    items: 2,
    partialVisibilityGutter: 20
  },

  mobile: {
    breakpoint: {
      max: 540,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 40
  }
}


const OpinionsContainer = ({classes}) => (<div>
  <div className={classes.titleContainer}>
    <Image
      src={LOVE_LETTER}
      alt={'poem'}
      width={60}
      height={88}
      // unoptimized={true}
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
    // infinite
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
    {MARRIED_OPINIONS.slice(0, 6).map(item => <OpinionTale key={item.weddingDate} details={item}/>)}
  </Carousel>
  <div className={classes.buttonMoreContainer}>
    <Link href={LINKS.OPINIONS.HREF} passHref><Button variant="outlined"> <Typography
      classes={{root: classes.moreOpinionsButton}}>Zobacz więcej
      opinii</Typography></Button></Link>
  </div>
</div>)
OpinionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

OpinionsContainer.displayName = 'OpinionsContainer';

export default OpinionsContainer
