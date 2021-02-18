import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const headerContents={
            backgroundColor: '#3366b0',
            height: '5em',
            display: 'flex',
            justifyContent:'center',
        }
        const linkContainer={
            display:'flex',
            alignItems: 'center',
            width: '12em',
            justifyContent: 'space-between',
            fontSize: '1.5rem',
            fontDecoration: 'none'
        }
        return (
            <div>
                <div style={headerContents}>
                    <div style={linkContainer}>
                        <Link to='./' style={{textDecoration: 'none'}}>Home</Link>
                        <Link to="./search" style={{textDecoration: 'none'}}>Pokédex</Link>
                    </div>
                </div>
            </div>
        )
    }
}