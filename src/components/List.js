import React, { Component } from 'react';
import Card from './Card.js'

  
class List extends Component {
  render() {
   const cardTitle = this.props.title
   const cardArticles = this.props.articles


    return (
      <article className='card'>
          <header>
            <div className='grid'>
              <strong className='card__title'>{cardTitle}</strong>
              <span className='card__quantity'>{cardArticles.length} articles</span>
            </div>
            <ul className='card__content'>
              {cardArticles.map(function(card){
                return <Card data={card}/>
              })}
            </ul>
          </header>
        </article>
    );
  }
}

export default List;