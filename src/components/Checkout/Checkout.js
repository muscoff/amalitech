import React, {Component} from 'react';
import Footer from '../General/Footer';
import ListItems from './ListItems';
import MyContext from '../../MyContext';

export default class Checkout extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.divBreak();
    }

    divBreak(){
        let nav = document.querySelector('#navBar');
        let height = nav.offsetHeight + 40;
        let div = document.createElement('div');
        div.style.height = height+'px';
        div.style.width = 'width-100 green-bg';
        document.querySelector('#break').appendChild(div);
        console.log('executed', height);
    }

    render(){
        return (
            <div id="body">
            <div id="break"></div>
                <MyContext.Consumer>
                    {(content)=>(
                        <React.Fragment>
                            <ListItems onChange={content.onChange} onMinus={content.onMinus} onPlus={content.onPlus} cart={content.cart} totalPrice={content.totalPrice} totalQty={content.totalQty} removeItem={content.removeItem} onDiscount={content.discountAction} discount={content.discount} />
                            <Footer />
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}