import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

export default class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='app'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={(input) => this.setState({ searchField: input })}
        />
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}
