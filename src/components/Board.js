import React, { Component } from 'react';
import List from './List'

class Board extends Component {
  render() {
  	const data = this.props.data
    return (
      <div className='container grid'>
        {data.map(function(list){
        return <List title={list.title} articles={list.articles} />
      })}
      </div>
    );
  }
}

export default Board;