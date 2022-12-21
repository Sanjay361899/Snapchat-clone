import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlices';
const Login = () => {
    const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>dispatch(login({
         username: result.user.displayName,
         id:result.user.uid,
         profilePic:result.user.photoURL
        })))
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg' alt=''/>
            <Button variant='outline' onClick={signIn}>Sign In</Button>
        </div>
    </div>
  )
}

export default Login