import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Starred() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl) //Nếu anchor có giả trị thì là true
  const handleClick = (event) => { //bắt sự kiện click
    setAnchorEl(event.currentTarget) //target của button
  }
  const handleClose = () => { //set anchor về null
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button href='/about' sx={{
        textTransform: 'capitalize',
        fontSize: '16px'
      }}>
        About
      </Button>
    </Box>
  )
}

export default Starred
