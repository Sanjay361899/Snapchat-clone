import React from 'react'
import './Chats.css'
import { Avatar } from '@mui/material'
import { ChatBubble, Search } from '@mui/icons-material'
const Chats = () => {
  return (
    <div className='chats'>
        <div className='chats__header'>
            <Avatar className='chats__avatar'/>
            <div className='chats__search'>
                <Search/>
                <input placeholder='Friends' type="text"/>
            </div>
            <ChatBubble className='chats__chatIcon'/>
        </div>
        <div className='chats__posts'>
            
        </div>
    </div>
  )
}

export default Chats