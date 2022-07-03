import React from 'react'
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare} from 'react-icons/ai';
import './socialMedia.css';
function SocialMedia() {
  return (
    <div className='media-container'>
    <div  className='media-icon'>
<AiFillFacebook size={30}/>
    </div>
    <div  className='media-icon'>
<AiFillLinkedin size={30}/>
    </div>
    <div  className='media-icon'>
<AiFillTwitterSquare size={30}/>
    </div>
    </div>
  )
}

export default SocialMedia
