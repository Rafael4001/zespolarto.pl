import React from 'react'
import PropTypes from "prop-types";

import {SMILE, IMAGE_3} from "../../constants";
import Divider from "@material-ui/core/Divider";
import Image from "next/image";


const PlayedWeddingInformationContainer = ({classes}) => (
  <div>
    <div className={classes.mainContainer}>
      <div className={classes.iconContainer}>
        <div className={classes.imageWrapperContainerMain}>
          <div className={classes.imageWrapperContainer}>
            <Image
              src={SMILE}
              alt={'smile'}
              width={75}
              height={75}
              loading="eager"
            />
          </div>

          <div className={classes.text}>
            <p>Zaufało nam już <span className={classes.happyPairs}>ponad
                <span className={classes.happyPairsTextNUmber}> 250 </span>
                par młodych</span></p>
            Kilkanaście lat doświadczenia, które zbudowały wiele pozytywnych wspomnień sprawiło, że doskonale wiemy jak
            poprowadzić Waszą
            uroczystość,
            tak jak sobie wymarzyliście...

            <p> To z Wami ustalamy jak ma wyglądać Wasze wesele...</p>
            <p> To dla Was gramy...</p>
          </div>
        </div>
      </div>
      <div className={classes.class2}>
        <div className={classes.class1}>
          <Image
            src={IMAGE_3}
            alt={'band_3'}
            layout="responsive"
            width={768}
            height={510}
          />
        </div>
      </div>
    </div>
    <Divider/>
  </div>
)

PlayedWeddingInformationContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

PlayedWeddingInformationContainer.defaultProps = {};

PlayedWeddingInformationContainer.displayName = 'PlayedWeddingInformationContainer';

export default PlayedWeddingInformationContainer
