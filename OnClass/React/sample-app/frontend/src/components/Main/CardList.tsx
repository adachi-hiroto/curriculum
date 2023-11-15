import React from 'react'
import './CardList.css';
import Card from './Card';
import { CardItem, Cards } from '../../interface';

type Props = {
  cards: Cards
}

const CardList: React.FC<Props> = ({cards}) => {
  return (
    <div className='card-wrapper'>
      {cards.map((cardItem: CardItem) => (
        <Card key={cardItem.id} cardItem={cardItem} ></Card>
      ))}
    </div>
  )
}

export default CardList