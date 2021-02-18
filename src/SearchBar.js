import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="searchbar"
            onChange={this.props.handleChangeQuery}
          />
        </form>
      </div>
    );
  }
}
