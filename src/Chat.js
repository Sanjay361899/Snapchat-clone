import { Avatar } from '@mui/material'
import React from 'react'
import './Chat.css'
const Chat = ({profilePic, username, timestamp, imageUrl, read}) => {
  return (
    <div className='chat'>
        <Avatar className='chat__avatar' src={profilePic}/>
        <h4>{username}</h4>
        <p>Tap to view - {new Date(timestamp?.toDate())?.toLocaleTimeString()} </p>
    </div>
  )
}

export default Chat