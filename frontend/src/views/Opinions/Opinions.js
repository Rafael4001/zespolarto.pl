import React, {useState} from 'react';
import PropTypes from "prop-types";
import PageWrapper from '../../components/PageWrapper';
import {LOVE_LETTER, MARRIED_OPINIONS} from '../../constants'
import OpinionTale from "../../components/OpinionTale/OpinionTale.style";
import Image from "next/image";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";


const Opinions = ({classes}) => {
  const [currentImage, setCurrentImage] = useState(0)

  const handleTileClick = (id) => {
    setCurrentImage(id)
    window.scrollTo(0, 0);
  }

  return (
    <PageWrapper>
      <Image
        src={LOVE_LETTER}
        alt={'poem'}
        width={60}
        height={88}
        // unoptimized={true}
      />
      <div className={classes.detailsContainer}>
        <div className={classes.imageContainer}>
          <Image
            src={MARRIED_OPINIONS[currentImage].picture}
            alt={MARRIED_OPINIONS[currentImage].picture}
            width={602}
            height={400}
            layout="responsive"
            unoptimized={true}
          />
        </div>
        <div className={classes.textContainer}>
          <h2>{MARRIED_OPINIONS[currentImage].woman} & {MARRIED_OPINIONS[currentImage].man}</h2>
          <p>{MARRIED_OPINIONS[currentImage].opinion}</p>
          <div className={classes.weddingDate}>
            <Typography classes={{root: classes.author,}}>{MARRIED_OPINIONS[currentImage].weddingDate}r.</Typography>
          </div>
        </div>
      </div>
      <Divider/>
      <div className={classes.allOpinionTales}>
        {MARRIED_OPINIONS.map((item, index) =>
          <div onClick={() => handleTileClick(index)}>
            <OpinionTale
              more={false}
              key={item.weddingDate}
              details={item}
            />
          </div>
        )}
      </div>
    </PageWrapper>
  )
};


Opinions.propTypes = {
  classes: PropTypes.object.isRequired,
};

Opinions.displayName = 'Opinions';

export default Opinions;
