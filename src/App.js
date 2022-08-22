import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";

import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles({

})
function App() {
  const styles=useStyles();
  const isDark=useSelector(state=>state.toggle.isDark)
    const isloggedIn=useSelector(state=>state.auth.isloggedIn)
    const cart=useSelector(state=>state.cart);
   
   
    useEffect(()=>{
      fetch('https://redux-http-a123e-default-rtdb.firebaseio.com/cartItems.json',{
        method:'PUT',
        body:JSON.stringify(cart),
      })
    },[cart])

    return (
    <div style={{background: isDark ? 'black':'', color:isDark?'white':''}}>
      {/* which page to be shown while the app loaded initially it is auth */}
    <Navbar/>
      {!isloggedIn && <Auth />}
      
      {isloggedIn && <Layout/>}
     
    </div>
  );
}

export default App;
