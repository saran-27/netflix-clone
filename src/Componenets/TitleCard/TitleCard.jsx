import React,{useEffect,useRef} from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

function TitleCard({title,category}) {
  const cardsRef=useRef();

 const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])
  return (
    <div className='title-card'>
      <h2>{title?title:'Popular On Netflix'}</h2>
      <div className="card_list" ref={cardsRef}>
        {cards_data.map((cards,index)=>{
          return <div className="card" key={index}>
            <img src={cards.image} alt=''></img>
            <p>{cards.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard