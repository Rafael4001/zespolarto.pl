import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

class BlockView extends Component {
  render() {
    return (
      <div className={this.props.classes.mainContainer}>

        <div className={this.props.classes.textContainer}>
          <Typography
            classes={{
              root: this.props.classes.subTitle1,
            }}>Twoje wesele...</Typography>
          <Typography
            classes={{
              root: this.props.classes.subTitle2,
            }}>Nasza muzyka</Typography>
        </div>
        <div>
          {/*<img*/}
          {/*  // onClick={onImageClick}*/}
          {/*  src={IMAGE_1}*/}
          {/*  alt={'dodane zdjęcie'}*/}
          {/*  // className={classes.image}*/}
          {/*/>*/}
          <Typography
            typeof={'p'}
            classes={{
              root: this.props.classes.title2,
            }}>
            Arto...
          </Typography>
          <Divider/>
          <Typography
            classes={{
              root: this.props.classes.text,
            }}>
            To nie tylko zespół, to grupa przyjaciół, którzy mają to szczęście łączenia hobby z pracą.
            Zespół muzyczny niesie ze sobą profesjonalizm,brzmienie, talent i niezapomniane wrażenia!
            Zgrany zespół zaskoczył już nie jedną osobę, robiąc to, co lubi, z pasją i precyzją!
            Dysponujemy wysokiej klasy sprzętem, który zapewni dobrą jakość dźwięku nawet w najgorszych warunkach.
            Zespół pochodzi z Werbkowic
          </Typography>


        </div>
      </div>
    )
  }
}

export default BlockView
