import React, { Component } from 'react';
import Home from '../pages/Home'
import '../App.css'


export default class Detail extends Component {
    state = {
        result: {},
    }

    async _fetchResult({ id }) {
        await fetch(`https://enigmatic-dusk-63573.herokuapp.com/api/items/${id}`)
            .then(res => res.json())
            .then(result => {
                this.setState(() => { return { result: result.item } })
                console.log(result)
            })
    }

    formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    componentDidMount() {
        const { id } = this.props.match.params
        this._fetchResult({ id })
    }

    render() {
        if (typeof this.state.result.price !== typeof undefined) {
            const { id, title, picture, price, condition, sold_quantity, free_shipping, description, categories } = this.state.result

            return (
                <div >
                    <Home />
                    <div className='ResultsContent'>
                        {id ?
                            <div >
                                <div className='Breadcrumb'>{categories.map((category, i) => {
                                    return (<div key={i}>
                                        {categories.length - 1 == i ? category : category + ' >'}
                                    </div>)
                                })}</div>
                                <div className='Card'>
                                
                                    <div className='CardDetail'>
                                        <div className='CardDetailLeft'>
                                            <img className='DetailImage' src={picture} />
                                            <h2 className='DescriptionTitle'>Descripción del producto</h2>
                                            <p className='Description'>{description}</p>
                                        </div>
                                        <div className='CardDetailRight'>
                                            <div className='ContentDetailRight'>
                                                <p><span className='DetailSubtitle'>{condition === 'new' ? 'Nuevo' : 'Usado'} | {sold_quantity} vendidos</span></p>
                                                <h3 className='DetailTitle' >{title}</h3>
                                                {free_shipping === true ? <p>Envío gratis</p> : null}
                                                <p className="DetailPrice">{this.formatter.format(price.amount)}</p>

                                                <button className='BuyButton'>
                                                    <span>
                                                        Comprar ahora
                                        </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            )
        }

        return null


    }
}