import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

export default class Result extends Component {

    render() {
        const { id, title, price, picture, condition, free_shipping, categories } = this.props

        return (
            <Link to={`/items/${id}`}>
                <div className='ResultItem'>
                    <div >
                        <figure >
                            <img
                                alt={title}
                                src={picture}
                                className='ImageList'
                            />
                        </figure>
                    </div>
                    <div >

                        <div >
                            <div >
                                <h2 className='Title'>{title}</h2>
                                <span className='Price'>${price.amount}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        )
    }
}