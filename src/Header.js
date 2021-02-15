import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'

export default class withRouter( class Header extends React.Component {
    render(){
        return(
            <>
                <header className='header'>
                    <div className='nav-div'>
                        <NavLink className='nav-link' exact activeClassName='selected' to='/'>
                            <p>Home</p>
                        </NavLink>
                        <NavLink classname='nav-link' exact activeClassName='selected' to='/search'>
                            <p>Search</p>
                        </NavLink>
                    </div>
                </header>
            </>
        )
    }
})