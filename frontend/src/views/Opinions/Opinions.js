import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import PageWrapper from '../../components/PageWrapper';
import {LINKS, LOVE_LETTER, MARRIED_OPINIONS} from '../../constants'
import OpinionTaleMini from "../../components/OpinionTaleMini";
import Image from "next/image";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import {useRouter} from 'next/router'

const Opinions = ({classes}) => {
  const router = useRouter()
  const {weddingDate} = router.query

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (weddingDate) {
      const currentIndex = MARRIED_OPINIONS.findIndex((wedding) => wedding.weddingDate === weddingDate)
      setCurrentImage(currentIndex)
    }
  }, [weddingDate])

  //TODO ta fukcja sie powtarza-->zrobic z tego HOC-a
  const handleClick = (weddingDate) => {
    router.push({
      pathname: `${LINKS.OPINIONS.HREF}`,
      query: {weddingDate}
    })
  }

  const handleTileClick = (weddingDate) => {
    handleClick(weddingDate)
  }

  return (
    <PageWrapper>
      {currentImage >= 0
        ? <div>
          <div className={classes.loveLetterIconContainer}>
            <Image
              src={LOVE_LETTER}
              alt={'poem'}
              width={60}
              height={88}
              unoptimized={true}
            />
          </div>
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
                <Typography
                  classes={{root: classes.author,}}>{MARRIED_OPINIONS[currentImage].weddingDate}r.</Typography>
              </div>
            </div>
          </div>
        </div>
        : <div className={classes.warningMessage}>opinia o danym terminie przyjęcia NIE ISTNIEJE, wybierz inną
          opinię.</div>
      }
      <Divider/>

      {/*TODO to rozbic na idzielny komponent dla optymalizacji*/}
      <div className={classes.allOpinionTales}>
        {MARRIED_OPINIONS.map((item) =>
          <div key={item.weddingDate} onClick={() => handleTileClick(item.weddingDate)}>
            <OpinionTaleMini
              more={false}
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
