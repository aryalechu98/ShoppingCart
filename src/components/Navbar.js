import React from 'react'
import  Container  from '@mui/material/Container'
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from '../store/toggle-slice';
const Navbar = () => {
const isDark=useSelector(state=>state.toggle.isDark)
const dispatch=useDispatch();
const toggleHandle=()=>{
dispatch(toggleActions.setDark())
}
  return (
    <Container maxWidth='md' >
        <div className="nav">
            <div className='logo'>Redux</div>
            <div className='toggle' onClick={toggleHandle}>
                {!isDark && <ToggleOffOutlinedIcon/>}
                {isDark && <ToggleOnOutlinedIcon/>}
            </div>
        </div>
    </Container>
  )
}

export default Navbar