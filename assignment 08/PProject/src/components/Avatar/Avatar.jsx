import React from 'react'
import './Avatar.css'

const Avatar = (props) => {
    const avatarStyle = {
        width : '45px', 
        height : '45px',
        borderRadius : '100%',
        objectFit : 'cover',
        border : '3px solid #ddd'
    }

  return (
    <>  
        
        <img style={avatarStyle} src={props.img ? props.img : 'https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-13.png'} alt="" />
    
    </>
  )
}

export default Avatar