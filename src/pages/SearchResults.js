import React, { PureComponent } from 'react'

import SearchBox from '../components/SearchBox';
import ResultsList from '../components/ResultsList';
import Home from '../pages/Home'
export default class SearchResults extends PureComponent {
    state = { results: [], inputSearch: '', categories: [] }


    componentDidMount() {
        const querystring = window.location.search
        const params = new URLSearchParams(querystring)
        const inputSearch = params.get('search')
        this._updateState(inputSearch) 
    }

     _updateState({inputSearch}){
         this.setState({ inputSearch: inputSearch })
         this._fetchResult()
    }

    _fetchResult() {
        if(this.state.inputSearch !== undefined){
            console.log('fetch')
            fetch(`https://enigmatic-dusk-63573.herokuapp.com/api/items?q=${this.state.inputSearch}`)
                .then(res => res.json())
                .then(data => {
                    const search = data
                    this.setState(() => { return { results: search.items } })
                    this.setState(() => { return { categories: search.categories} })
                })
        }  
    }

    componentDidUpdate(prevProps, prevState) {
        const querystring = window.location.search
        const params = new URLSearchParams(querystring)
        const inputSearch = params.get('search')
        
        if (prevState.inputSearch != '') {
            if (inputSearch !== prevState.inputSearch) {
                this._updateState({inputSearch})
            }
        }
    }

    render() {
        console.log('render')
        
        if (typeof this.state.results !== typeof undefined) {
            return (
                <div >
                    <Home />
                    {this.state.results === 0
                        ? <p>Sorry! Results not found</p>
                        : <ResultsList 
                            results={this.state.results} 
                            categories={this.state.categories}/>}
                </div>
            )
        }

        return null
    }
}