import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './header.css';

export default withRouter(
  class Header extends Component {
    render() {
      return (
        <header>
          <div class="headerLink">
            {this.props.location.pathname !== '/' && (
              <NavLink exact activeClassName="selected" to="/">
                HomePage
              </NavLink>
            )}

            {this.props.location.pathname !== '/search' && (
              <NavLink exact activeClassName="selected" to="/search">
                Pokedex
              </NavLink>
            )}
          </div>
        </header>
      );
    }
  }
);
