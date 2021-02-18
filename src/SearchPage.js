import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js';
import Sort from './Sort.js';
import SearchBar from './SearchBar.js';
import './SearchPage.css';
import Spinner from './Spinner.js';
import request from 'superagent';

export default class SearchPage extends Component {
  state = {
    pokemon: [],
    sortOrder: 'ascending',
    sortBy: 'pokemon',
    query: '',
    loading: false,
  };

  componentDidMount = async () => {
    await this.fetchPokemon();
  };

  fetchPokemon = async () => {
    this.setState({ loading: true });

    const data = await request.get(
      `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&perPage=30`
    );

    this.setState({
      loading: false,
      pokemon: data.body.results,
    });
  };

  handleClick = () => {
    this.fetchPokemon();
  };

  handleSortOrder = (e) => {
    this.setState({ sortOrder: e.target.value });
  };
  handleChangeType = (e) => {
    this.setState({ sortBy: e.target.value });
  };

  handleChangeQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <div className="sortTools">
        <div class="searchTools">
          <SearchBar
            sortBy={this.state.sortBy}
            handleChangeType={this.handleChangeType}
            handleChangeQuery={this.handleChangeQuery}
          />
          <button onClick={this.handleClick}>Gotta Catch `Em All!</button>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <PokeList images={this.state.pokemon} />
        )}
      </div>
    );
  }
}
