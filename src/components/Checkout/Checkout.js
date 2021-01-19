import React, {Component} from 'react';
import Footer from '../General/Footer';
import ListItems from './ListItems';
import MyContext from '../../MyContext';

export default class Checkout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <MyContext.Consumer>
                    {(content)=>(
                        <React.Fragment>
                            <ListItems onChange={content.onChange} onMinus={content.onMinus} onPlus={content.onPlus} cart={content.cart} setUp={content.setUp} totalPrice={content.totalPrice} totalQty={content.totalQty} cart={content.cart} removeItem={content.removeItem} onDiscount={content.discountAction} discount={content.discount} />
                            <Footer />
                    </React.Fragment>
                    )}
                </MyContext.Consumer>
            </React.Fragment>
        );
    }
}