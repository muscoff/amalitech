import React from 'react';
import Product from './Product';
import Footer from '../General/Footer';

export default function Products(){
    function divBreak(){
        let nav = document.querySelector('#navBar');
        let height = nav.offsetHeight;
        let div = document.createElement('div');
        div.style.height = height+'px';
        div.style.width = 'width-100';
        document.querySelector('#break').appendChild(div);
    }
    setTimeout(()=>{
        divBreak();
    },);
    
    return (
        <div id="body">
            <div id="break"></div>
            <Product />
            <Footer />
        </div>
    );
}