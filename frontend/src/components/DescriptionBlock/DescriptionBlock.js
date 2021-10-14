import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const DescriptionBlock = ({ classes }) => (
  <div>
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <Typography
          classes={{ root: classes.title }}
          variant="h1"
        >Arto</Typography>
      </div>

      <div className={classes.text}>
        <p>To więcej niż zespół muzyczny, to grupa przyjaciół, którzy mają to szczęście łączenia hobby z pracą.</p>
        Arto niesie ze sobą talent, profesjonalizm i brzmienie.<br/>
        Zgrany zespół przypadł do gustu już nie jednej osobie, robiąc to, co lubi, z pasją i precyzją.
        <br/>Dysponujemy wysokiej klasy sprzętem, który zapewni dobrą jakość dźwięku w każdych warunkach.
      </div>
    </div>
    <Divider/>
  </div>
)

DescriptionBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

DescriptionBlock.defaultProps = {}

DescriptionBlock.displayName = 'DescriptionBlock'

export default DescriptionBlock
