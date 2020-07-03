import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const CityAddButton = (props) => {
  const { clickHandler } = props

  return (
    <div className="add-button">
      <Button
        variant="contained"
        color="primary"
        startIcon={<Icon>add_circle</Icon>}
        onClick={clickHandler}
      > Add&nbsp;Location </Button>
    </div>
  )
}

export default CityAddButton
