import classNames from "classnames";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";
import {LEAF} from "../../constants";

const OpinionTaleMini = ({details, classes, more = true}) => {
  const {man, woman, picture, weddingDate, opinion} = details

  const weddingDateUrlFormat = weddingDate.split('-')
  const formatedWeddingDate = `${weddingDateUrlFormat[0]}.${weddingDateUrlFormat[1]}.${weddingDateUrlFormat[2]}`


  return (
    <div className={classNames(classes.mediaCardTaleMini)}>
      <div>
        <Image
          src={picture}
          alt={picture}
          width={301}
          layout="responsive"
          height={201}
        />
      </div>
      <div className={classes.leafIcon}>
        <Image
          src={LEAF}
          alt={'leaf'}
          width={30}
          height={30}
        />
      </div>
      <Typography classes={{root: classes.names}}>{woman} & {man}</Typography>
      <div className={classes.quotationContainer}>
        {opinion && <Typography classes={{root: classes.weedingDateText,}}>{formatedWeddingDate}r.</Typography>}
      </div>
    </div>
  )
}

OpinionTaleMini.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object
};

export default OpinionTaleMini