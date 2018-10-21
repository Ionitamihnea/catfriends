import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { cats } from '../cats';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: cats,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredcats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    const { cats } = this.state;
    return !cats.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList cats={filteredcats} />
          </Scroll>
        </div>
      );
  }
}

export default App;