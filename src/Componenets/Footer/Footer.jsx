import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube_icon} alt=''></img>
        <img src={instagram_icon} alt=''></img>
        <img src={facebook_icon} alt=''></img>
        <img src={twitter_icon} alt=''></img>
      </div>
      <ul>
        <li>audio description</li>
        <li>Help Center</li>
        <li>Gifts Card</li>
        <li>media center</li>
        <li>Cookie Prefrence</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Contact us</li>
        <li>Corporate Information</li>
      </ul>
      <p className='copyright-text'>@ 1997-2003 Netflix, Inc.</p>
    </div>
  )
}

export default Footer