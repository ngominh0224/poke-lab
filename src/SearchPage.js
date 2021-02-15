import React, { Component } from 'react'
import pokeData from './data.js'
import './App.css'
import PokeList from './PokeList.js'
import Sort from './Sort.js'
import SearchBar from './SearchBar.js'

export default class SearchPage extends Component {
    state={
        pokemon:pokeData,
        sortOrder:'ascending',
        sortBy:'pokemon',
        query:'',
    }
    handleSortOrder= (e)=>{
        this.setState({sortOrder: e.target.value})
    }
    handleChangeType=(e)=>{
        this.setState({sortBy: e.target.value})
    }
  
    handleChangeQuery=(e)=>{
        this.setState({
            query: e.target.value
        })
        console.log(this.state.query)
    }
   
    render() {
        if(this.state.sortOrder === 'ascending'){
            this.state.pokemon.sort((a,b)=>a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }else if(this.state.sortOrder === 'descending'){
            this.state.pokemon.sort((a,b)=>b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        }

        const filteredData = this.state.pokemon.filter(item=>
            item.pokemon.includes(this.state.query.toLowerCase())

        )
   
        return (
            <div className='pokedex'>

                <div className='sidebar'>
                    <p>Search by name</p>
                    <SearchBar handleChangeQuery = {this.handleChangeQuery}/>

                    <p>Sort by type!</p>
                    <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']} />

                    <p>Sort alphabetically!</p>
                    <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']} />

                </div>
                <div className="image-container">
                    <PokeList pokeArray={filteredData}/>
                </div>

            </div>
        )
    }
}