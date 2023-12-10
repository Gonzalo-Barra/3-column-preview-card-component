import React from 'react'
import Sedan from './assets/icon-sedans.svg'
import Suvs from './assets/icon-suvs.svg'
import Luxury from './assets/icon-luxury.svg'
import './App.css'

const Card = ({ img, title, text, style }) => {
  return (
    <div className={`card ${style}`}>
      <img src={img}/>
      <h1>{title}</h1>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  )
}

const cardData = [
  {
    img: Sedan,
    title: 'SEDANS',
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    style: 'sedan'
  },
  {
    img: Suvs,
    title:'SUVS',
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    style: 'suvs'
  },
  {
    img: Luxury,
    title: 'LUXURY',
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    style: 'luxury'
  }
]
export default function App() {
  return (
    <main>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </main>
    
  );
}



