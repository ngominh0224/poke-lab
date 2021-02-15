import React, { Component } from 'react'
import './App.css'
export default class HomePage extends Component {
    render() {
        const main = {
            height: '100%',
            backgroundColor:'#ffcb05',
            paddingTop: '12em'
        }
        return (
            <div style={main}>
                <img src='./Pokemon-Logo.png' alt="logo" style={{width: '70%'}}/>
            </div>
        )
    }
}