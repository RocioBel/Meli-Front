import React, { Component } from 'react';
import Result from './Result'
import '../App.css';

export default class ResultsList extends Component {
    render() {
        const { results, categories } = this.props
 
        if (categories !== undefined) {
            return (
                <div className='ResultsContent'>
                    <div className='List'>
                        <div className='Breadcrumb'>
                            {categories.map((category, i) => { 
                                return (<div key={i}>
                                            {categories.length-1 == i ? category: category+' >'} 
                                        </div>) 
                            })}
                        </div>
                        {results.map(result => {
                            return (
                                <div key={result.id} >
                                    <Result
                                        id={result.id}
                                        title={result.title}
                                        price={result.price}
                                        picture={result.picture}
                                        condition={result.condition}
                                        free_shipping={result.free_shipping}
                                        categories={result.categories}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

        return null

    }


}