import React, { Component } from 'react';

import './App.css';
import  Board from './components/Board.js'
import Header from './components/Header.js'
import data from './components/data'



class App extends Component {
  constructor(){
    super()

    this.state = {
         card: data
 }
}

handleSubmit = e => {
  e.preventDefault()
  this.refs.newItem.value
  
  const newItems= {
    key: this.state.card[0].articles.length +1 ,
    title: this.refs.newItem.value,
    tagged: '.internal'
  }
const newArticle = this.state.card[0].articles.push(newItems)
const newState= this.state.card

 this.setState ({
  projects: newState

})
   
 this.refs.newItem.value=''
}
  render() {
    return (
      <div>
        <Header/>
        <section>
          <div className='board'>
            <div className='board__form container'>
              <form onSubmit={this.handleSubmit}>
                <div className='form'>
                  <input ref='newItem' className='form__text' type='text' placeholder={this.state.placeholder} />
                  <button className='form__submit' type='submit'>New Article</button>
                </div>
              </form>
            </div>
            <Board data={ this.state.card }/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
