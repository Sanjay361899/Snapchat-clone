import React from 'react'
import './ChatView.css'
import { useSelector } from 'react-redux'
import { selectSelectedImage } from './features/appSlices'
const ChatView = () => {
const selectedImage= useSelector(selectSelectedImage)
  return (
    <div className='chatView'>
        <img src={selectedImage} alt=""/>
    </div>
  )
}

export default ChatView