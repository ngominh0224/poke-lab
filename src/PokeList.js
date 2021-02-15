import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        
        return (
            <div>
                 <ul>
                {this.props.pokeArray.map(pokeObject => {
                    return <PokeItem pokeProp={pokeObject} key={pokeObject['id']}/>
                })}
                </ul>
            </div>
        )
    }
}