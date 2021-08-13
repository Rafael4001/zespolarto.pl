import classNames from "classnames";
import Image from "next/image";
import {LEAF} from "../../constants";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";

const OpinionTale = ({details, classes, more=true}) => {
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
          {man && woman &&
          <Typography classes={{root: classes.names}}>{woman} &</Typography>}
          {man && woman &&
          <Typography classes={{root: classes.names,}}>{man}</Typography>}
          {opinion &&
          <Typography classes={{root: classes.quotation,}}>{opinion.slice(0, 40)}...</Typography>}
          <Typography classes={{root: classes.author,}}>{weddingDate}r.</Typography>
          {more &&
          <Tooltip title={opinion}>
            <Button><Typography classes={{root: classes.more}}>więcej...</Typography></Button>
          </Tooltip>
          }
        </div>
      </div>
    </div>
  )
}

OpinionTale.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object
};

export default OpinionTale