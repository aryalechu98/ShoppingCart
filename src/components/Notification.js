import React from 'react'
import Alert from '@mui/material/Alert'
import { useSelector } from 'react-redux'
const Notification = ({type,message}) => {
  const notification=useSelector(state=>state.ui.notification)
  return (
    <div>
      {notification.open && <Alert severity={type} >{message}</Alert>}
    </div>
  )
}

export default Notification