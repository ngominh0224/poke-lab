import React, { Component } from 'react';
import './App.css';

export default class PokeItem extends Component {
  render() {
    return (
      <div>
        <li>
          <img
            alt="string"
            src={this.props.pokeProp['url_image']}
            className="poke-images"
          />
        </li>
        <p>Pokemon: {this.props.pokeProp['pokemon']}</p>
        <p>Shape: {this.props.pokeProp['shape']}</p>
        <p>Ability: {this.props.pokeProp['ability_1']}</p>
        <p>Type: {this.props.pokeProp['type_1']}</p>
      </div>
    );
  }
}
