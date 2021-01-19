import React, {Component} from 'react';
import TopNav from './TopNav';
import MyContext from '../../MyContext';

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }

    // componentDidMount(){
    //     this.ID = setInterval(()=>{
    //         this.getCart();
    //     },1000);
    // }

    // getCart(){
    //     let local = localStorage.getItem('cart');
    //     let qty = 0;
    //     local = local === null ? [] : JSON.parse(local);

    //     if(local.length === 0){
    //         this.setState({cart: qty});
    //     }else{
    //         local.forEach(item=>{
    //             qty = qty + parseInt(item.qty);
    //         });
    //         this.setState({cart: qty});
    //     }
    // }

    // componentWillUnmount(){
    //     clearInterval(this.ID);
    // }

    onChange(email){
        this.setState({email: email});
    }
    render(){
        return (
            <MyContext.Consumer>
                {(content)=>(
                    <React.Fragment>
                        <TopNav setCart={content.setCart} name={this.state.email} cart={content.cart} onChange={this.onChange.bind(this)} /><br />
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}