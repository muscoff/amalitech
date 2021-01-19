import React from 'react';
import {NavLink} from 'react-router-dom';

class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item,
            selectedSize: '',
            qty: 1,
        };
    }

    onClick(e){
        document.querySelectorAll('.size-list').forEach(item=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        });
        e.target.classList.add('active');
        this.setState({selectedSize: e.target.innerHTML});
    }

    onPlus(){
        this.setState({qty: ++this.state.qty});
    }

    onMinus(){
        this.state.qty === 1 ? this.setState({qty: 1}) : this.setState({qty: --this.state.qty});
    }

    onChange(e){
        if(e.target.value !== ''){
            this.setState({qty: e.target.value});
            setTimeout(()=>{
                let num = '';
                this.state.qty.split('').forEach((item, index)=>{
                    num = num + item;
                    if(isNaN(item)){
                        num = num.split('');
                        num.length = num.length > 1 ? num.length - 1 : num.length;
                        if(num.length === 1){
                            this.setState({qty: 1});
                        }else{
                            let numb = '';
                            num.forEach(item=>{
                                numb = numb + item;
                            });
                            numb = parseInt(numb);
                            this.setState({qty: numb});
                        }
                    }
                });
            },);
        }
        setTimeout(()=>{
            if(parseInt(this.state.qty) === 0){
                this.setState({qty: 1});
            }
        },);
    }

    addToCart(){
        let item = this.state.item;
        let id = item.id;
        let qty = this.state.qty;
        let name = item.name;
        let price = item.price;
        let size = this.state.selectedSize;
        let img = item.allImages[0];
        if(size !== ''){
            let local = localStorage.getItem('cart');
            local = local === null ? [] : local === "" ? [] : JSON.parse(local);
            let toPay = parseFloat(price) * parseInt(this.state.qty);
            let item = {
                id,
                name,
                price,
                qty,
                toPay,
                size,
                img: img
            }

            this.props.addToCart(item);
            console.log(this.props.cart);

            if(local.length === 0){
                local.push(item);
                localStorage.setItem('cart', JSON.stringify(local));
            }else{
                if(this.checkCart(id, size, qty, local)){
                    localStorage.setItem('cart', JSON.stringify(local));
                }else{
                    local.push(item);
                    localStorage.setItem('cart', JSON.stringify(local));
                }
            }
        }
    }

    checkCart(id, size, quantity, cart){
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

    render(){
        let {item, qty} = this.state;
        let listItem = item.sizes.map((item, index)=>{
            return (
                <div onClick={(e)=>this.onClick(e)} key={index.toString()} className="padding-all-10 size-list light-grey-bg margin-right-5">{item}</div>
            );
        });
        return (
            <div className="col-5 col-l-12 col-m-12 col-s-12">
                <div className="width-90 width-l-100 width-m-100 width-s-100 float-right">
                    <div className="font-gotham amali-blue font-25 font-m-20">{item.name}</div><br />
                    <div className="font-gothic uppercase light-grey-text font-14">
                        <span className="font-gotham red-text">free ground shipping</span> On all orders over $125
                    </div><br />
                    <div className="font-gotham bold-text amali-blue">${item.price}</div><br />
                    <div className="row">{listItem}</div><br />
                    <div className="row align-items-center">
                        <div>
                            <i onClick={()=>this.onMinus()} className="fas fa-minus-circle shadow amali-blue font-30"></i>
                        </div>
                        <div className="col-2 col-l-4">
                            <input onChange={(e)=>this.onChange(e)} type="text" name="qty" className="num" value={qty} />
                        </div>
                        <div>
                            <i onClick={()=>this.onPlus()} className="fas fa-plus-circle shadow amali-blue font-30"></i>
                        </div>
                    </div>
                    <div className="width-100 height-5 height-m-1 height-l-1"></div>
                    <div className="font-gotham capitalize green-text center-text">{this.props.msg}</div><br /><br />
                    <div>
                        <div className="addBtn" onClick={()=>this.addToCart()}>add to bag</div>
                        <div className="padding-all-10 blue-border-1 cursor-pointer amali-blue">
                            <div className="center-text font-gotham font-14">Buy online, free in-store pickup</div>
                            <div className="center-text font-10 font-gothic">Get it today at a store near you</div>
                        </div><br />
                        <NavLink to="/checkout">
                        <div className="padding-all-20 red-bg white-text font-gotham uppercase center-text btn cursor-pointer">
                            <div>checkout <i className="fas fa-cart-plus"></i></div>
                        </div>
                        </NavLink>
                        <br />
                        <NavLink to="/"><div className="amali-blue">Go Back</div></NavLink><br />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;