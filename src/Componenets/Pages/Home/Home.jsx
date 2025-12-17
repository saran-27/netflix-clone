import React from 'react'
import './Home.css'
import NavBar from '../../NavBar/NavBar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import info_icon from '../../../assets/info_icon.png'
import play_icon from '../../../assets/play_icon.png'
import TitleCard from '../../TitleCard/TitleCard'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <div><NavBar></NavBar>
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'></img>
        <div className="here-caption">
          <img src={hero_title} alt='' className='caption-img'></img>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt=''></img>Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt=''></img>More Info</button>
        </div>
        <TitleCard></TitleCard>
        </div>
      </div>
     <div className="container">
       <div className="more-cards">
        <TitleCard title={'BlockBaster Movie'}></TitleCard>
      <TitleCard title={'Upcoming'}></TitleCard>
      <TitleCard title={'Only On Netflix'}></TitleCard>
       </div>
     </div>
      <Footer></Footer>
    </div>
  )
}
export default Home