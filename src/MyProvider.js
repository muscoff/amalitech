import React from 'react';
import MyContext from './MyContext';

import img from './images/img.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            cart: [],
            discount: '',
            totalPrice: 0,
            totalQty: 0,
            msg: '',
            nav: ['new', 'men', 'women', 'boys', 'girls', 'more sizes', 'ties', 'sale', 'more'],
            bottomNav: false,
            search: '',
            email: '',
        };
    }

    componentDidMount(){
        this.setState({
            products: [
                {id: 1, name: "Offshore On-The-Go Crewneck", allImages: [img, img1, img2], price: 160.50, sizes: ['xl', 'l', 'm', 's', 'xs']},
                {id: 2, name: "Classic Fit Cotton Cashmere Cooper Shirt", allImages: [img4, img5, img6], price: 187.50, sizes: ['xl', 'l', 's', 'xs']},
                {id: 3, name: "Stillwater Sherpa Vest", allImages: [img6, img7, img1], price: 142.80, sizes: ['m', 's', 'xs']},
                {id: 4, name: "Grand Valley State University", allImages: [img3, img1, img1], price: 142.80, sizes: ['m', 's', 'xs', 'xxl']}
            ]
        });
    }
    
    render(){
        return (
            <MyContext.Provider value={{
                setSearchVisible: ()=>{
                    setTimeout(()=>{
                        let search = document.querySelector('#search');
                        if(search.classList.contains('display-none')){
                            search.classList.add('display-block');
                            search.classList.remove('display-none');
                        }else{
                            search.classList.add('display-none');
                            search.classList.remove('display-block');
                        }
                    });
                },
                email: this.state.email,
                onChangeEmail: (event)=>{
                    this.setState({email: event.target.value});
                },
                emailSubscription: ()=>{
                    let email = this.state.email;
                    alert(email);
                },
                bottomNav: this.state.bottomNav,
                state: this.state.products,
                nav: this.state.nav,
                msg: this.state.msg,
                single: (id)=>{
                    let item = this.state.products.filter(item=>item.id===id);
                    item = item[0];
                    return item;
                },
                discountAction: (discount) => {
                    this.setState({discount: discount});
                    setTimeout(()=>{
                        if(this.state.discount !== '' & this.state.discount.length === 5){
                            this.setState({totalPrice : this.state.totalPrice*0.5});
                        }else{
                            let totalPrice = 0;
                            this.state.cart.forEach(item=>{
                                totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                            });
                            totalPrice = totalPrice.toFixed(2);
                            this.setState({totalPrice});
                        }
                    },);
                },
                totalPrice: this.state.totalPrice,
                totalQty: this.state.totalQty,
                discount: this.state.discount,
                cart: this.state.cart,
                setUp: ()=>{
                    let discount = this.state.discount;
                    let totalPrice = 0;
                    let totalQty = 0;
                    this.state.cart.forEach(item=>{
                        totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                        totalQty = totalQty + parseInt(item.qty);
                    });
                    totalPrice = (discount !== '' & discount.length === 5) ? totalPrice * 0.5 : totalPrice;
                    totalPrice = totalPrice.toFixed(2);
                    this.setState({totalPrice, totalQty, cart: this.state.cart});
                },
                setCart: (item)=>{
                    this.setState({cart: item});
                },
                addToCart: (item)=>{

                    function checkCart(id, size, quantity, cart){
                        for(let i = 0; i < cart.length; i++){
                            if(cart[i].id === id & cart[i].size === size){
                                cart[i].toPay = parseFloat(cart[i].price) * quantity;
                                cart[i].qty = quantity;
                                return true;
                            }else{
                                continue;
                            }
                        }
                    }

                    let cart = this.state.cart;
                    if(cart.length === 0){
                        cart.push(item);
                        this.setState({cart, msg: 'Item added'});
                        setTimeout(()=>{this.setState({msg: ''})},1000);
                    }else{
                        if(checkCart(item.id, item.size, item.qty, cart)){
                            this.setState({cart, msg: 'Cart updated'});
                            setTimeout(()=>{this.setState({msg: ''})},1000);
                        }else{
                            cart.push(item);
                            this.setState({cart, msg: 'Item Added'});
                            setTimeout(()=>{this.setState({msg: ''})},1000);
                        }
                    }
                },
                removeItem: (index)=>{
                    let discount = this.state.discount;
                    let state = this.state.cart;
                    let copy = state.slice();
                    copy.splice(index, 1);

                    let totalPrice = 0;
                    let totalQty = 0;
                    copy.forEach(item=>{
                        totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                        totalQty = totalQty + parseInt(item.qty);
                    });
                    totalPrice = totalPrice.toFixed(2);
                    totalPrice = (discount !== '' & discount.length === 5) ? totalPrice * 0.5 : totalPrice;
                    this.setState({cart: copy, totalPrice, totalQty});
                },
                onPlus: (index)=>{
                    let discount = this.state.discount;
                    let cart = this.state.cart;
                    cart[index].qty = parseInt(cart[index].qty) + 1;
                    cart[index].toPay = parseFloat(cart[index].price) * parseInt(cart[index].qty);

                    let totalPrice = 0; let totalQty = 0;
                    cart.forEach(item=>{
                        totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                        totalQty = totalQty + parseInt(item.qty);
                    });
                    totalPrice = (discount !== '' & discount.length === 5) ? totalPrice * 0.5 : totalPrice;
                    totalPrice = totalPrice.toFixed(2);
                    this.setState({cart, totalPrice, totalQty});
                },
                onMinus: (index)=>{
                    let discount = this.state.discount;
                    let cart = this.state.cart;
                    cart[index].qty = parseInt(cart[index].qty) === 1 ? 1 : parseInt(cart[index].qty) - 1;
                    cart[index].toPay = parseFloat(cart[index].price) * parseInt(cart[index].qty);

                    let totalPrice = 0, totalQty = 0;
                    cart.forEach(item=>{
                        totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                        totalQty = totalQty + parseInt(item.qty);
                    });
                    totalPrice = (discount !== '' & discount.length === 5) ? totalPrice * 0.5 : totalPrice;
                    totalPrice = totalPrice.toFixed(2);
                    this.setState({cart, totalPrice, totalQty});
                },
                onChange: (value, index)=>{
                    let discount = this.state.discount;
                    let cart = this.state.cart;
                    cart[index].qty = value;
                    cart[index].toPay = parseFloat(cart[index].price) * parseInt(value);
                    let totalPrice = 0; let totalQty = 0;
                    cart.forEach(item=>{
                        totalQty = totalQty + parseInt(item.qty);
                        totalPrice = totalPrice + (parseFloat(item.price) * parseInt(item.qty));
                    });
                    totalPrice = (discount !== '' & discount.length === 5) ? totalPrice * 0.5 : totalPrice;
                    totalPrice = totalPrice.toFixed(2);
                    this.setState({cart, totalPrice, totalQty});
                },
                searchAction: ()=>{
                    let val = this.state.search;
                    alert(val);
                },
                onChangeSearch: (event)=>{
                    this.setState({search: event.target.value});
                },
                navScroll: (event)=>{
                    let nav = document.querySelector('#navBar');
                    let bottomN = document.querySelector('#bottomNav');
                    let first = document.querySelector('.first');
                    let second = document.querySelector('.second');
                    let height = nav.offsetHeight;
                    let scrolled = window.pageYOffset;

                    if(scrolled > height){
                        nav.classList.remove('fixed');
                        bottomN.classList.add('fixed');
                        first.classList.add('display-none');
                        first.classList.remove('display-block');
                        second.classList.add('display-block');
                        second.classList.remove('display-none');
                    }else{
                        nav.classList.add('fixed');
                        bottomN.classList.remove('fixed');
                        second.classList.add('display-none');
                        second.classList.remove('display-block');
                        first.classList.add('display-block');
                        first.classList.remove('display-none');
                    }
                }
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;