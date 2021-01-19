import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: 0
        }
    }

    componentDidMount(){
        this.ID = setInterval(()=>{
            this.getCartItems();
        },200);
    }

    getCartItems(){
        let local = localStorage.getItem('cart');
        local = local === null ? [] : local === "" ? [] : JSON.parse(local);
        let qty = 0;
        if(local.length ===0 & this.props.cart.length === 0){
            this.setState({cart: 0});
        }else if(local.length > 0 & this.props.cart.length === 0){
            this.props.setCart(local);
            local.forEach(item=>{
                qty = qty + parseInt(item.qty);
            });
            this.setState({cart: qty});
        }else{
            this.props.cart.forEach(item=>{
                qty = qty + parseInt(item.qty);
            });
            this.setState({cart: qty});
        }
    }

    componentWillUnmount(){
        clearInterval(this.ID);
    }

    onChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        const {cart} = this.state;
        return (
            <div id="topnav" className="width-90 margin-auto">
                <div className="width-100 height-2"></div>
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="row align-items-center">
                            <div className="font-gotham font-12">Find a Store | </div>
                            <div className="font-gotham font-12 margin-right-5">Contact | </div>
                            <div className="font-gotham font-13">
                                <div className="row align-items-center">
                                    <div className="col-8 underline">
                                        <input placeholder="Email Address" className="nav" onChange={(e)=>this.onChange(e)} type="email" value={this.props.email} />
                                    </div>
                                    <div className="underline"><button className="join">JOIN</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="flex-row-reverse font-12 font-gotham light-grey-text">
                            <div className="padding-all-3 underline-text">
                                <NavLink to="/">Welcome, Sign In</NavLink>
                            </div>
                            <div className="padding-all-3 underline-text">Ship To | </div>
                            <div className="padding-all-3 underline-text">
                                <NavLink to="/checkout"><i className="fas fa-shopping-bag amali-blue"></i>({cart})</NavLink> | 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}