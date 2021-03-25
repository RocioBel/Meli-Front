import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch';


export default class SearchBox extends Component {
    
    state = {
        inputSearch: ''
    }
     

    _handleChange = (e) => {
        this.setState({ inputSearch: e.target.value })
        
    }

    render() {
        console.log('SearchBox')
        const inputSearch = this.state.inputSearch
        return (
            <form >
                <div className="Background-search-box">
                    <Link to={`/`}>
                        <img
                            src="https://d1.awsstatic.com/case-studies/LATAM/mercadolibre.1d9d3766bb06e60948f1c5ce8851ce0eac63b349.png"
                            className="Logo" />
                    </Link>

                    <div className="Search-box">
                        <div className='Search-button'>
                            <Link to={`/items?search=${inputSearch}`}>
                                <button className='Search-button'>
                                    <AiOutlineSearch />
                                </button>
                            </Link>
                        </div>

                        <input
                            className="Input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Nunca dejes de buscar"
                        />
                    </div>
                </div>
            </form>
        )
    }
}