import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage.js';
import HomePage from '../HomePage/HomePage.js';
import Header from './Header.js';

export default class Routes extends Component {
    render() {
        return (
            <main className='site-grid-container'>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />}
                        />
                        <Route
                            path="/search"
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </main>
        )
    }
}