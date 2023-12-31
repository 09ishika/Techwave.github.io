import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessories.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='hotaccess'>
        <Link className='HotAccessoriesLink' to='/music' >Music Store</Link>
        <Link className='HotAccessoriesLink' to='/smartDevice' >Smart Device</Link>
        <Link className='HotAccessoriesLink' to='/home' >Home</Link>
        <Link className='HotAccessoriesLink' to='/lifestyles' >Lifestyles</Link>
        <Link className='HotAccessoriesLink' to='/mobileAccessories' >Mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
