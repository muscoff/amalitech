import React, {Component} from 'react';
import MyContext from '../../MyContext';

export default class ListItems extends Component{

    onMinus(index){
        this.props.onMinus(index);
        let box = document.querySelectorAll('input[type=text].num');
        box[index].value = parseInt(box[index].value) <= 1 ? 1 : parseInt(box[index].value) - 1;
        setTimeout(()=>{
            let cart = this.props.cart;
            localStorage.setItem('cart', JSON.stringify(cart));
        },);
    }

    onChange(e, index){
        if(e.target.value !== ''){
            setTimeout(()=>{
                let num = '';
                e.target.value.split('').forEach((item, index)=>{
                    num = num + item;
                    if(isNaN(item)){
                        num = num.split('');
                        num.length = num.length > 1 ? num.length - 1 : num.length;
                        if(num.length === 1){
                            e.target.value = 1;
                        }else{
                            let numb = '';
                            num.forEach(item=>{
                                numb = numb + item;
                            });
                            numb = parseInt(numb);
                            e.target.value = numb;
                        }
                    }
                });
                if((parseInt(e.target.value) === 0)){
                    e.target.value = 1;
                    this.props.onChange(e.target.value, index);
                }else{
                    this.props.onChange(e.target.value, index);
                }
            },);
        }else{
            e.target.value = 1;
            this.props.onChange(e.target.value, index);
        }

        setTimeout(()=>{
            let cart = this.props.cart;
            localStorage.setItem('cart', JSON.stringify(cart));
        },);
        
    }

    onPlus(index){
        this.props.onPlus(index);
        let box = document.querySelectorAll('input[type=text].num');
        box[index].value = parseInt(box[index].value) + 1;
        setTimeout(()=>{
            let cart = this.props.cart;
            localStorage.setItem('cart', JSON.stringify(cart));
        },);
    }

    onDiscount(e){
        this.props.onDiscount(e.target.value);
    }

    removeItem(index){
        let local = localStorage.getItem('cart');
        local = local === null ? [] : JSON.parse(local);
        let copy = local.splice();
        copy.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(copy));
        this.props.removeItem(index);
    }

    render(){
        let listItem = this.props.cart.map((item, index)=>{
            return (
                <div key={index.toString()} className="row align-items-center card">
                    <div className="col-1 col-l-2 col-m-2 col-s-3">
                        <div className="max-img">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <div className="col-5 col-l-6 col-m-10 col-s-9 padding-all-10 font-gotham">
                        <div className="margin-bottom-10 font-13 font-s-12 amali-blue uppercase">{item.name}</div>
                        <div className="font-12 uppercase light-grey-text">Unit Price: <span className="black-text">${item.price}</span></div>
                        <div className="font-12 uppercase light-grey-text">Size: <span className="black-text">{item.size}</span></div>
                        <div className="font-12 uppercase light-grey-text">Quantity: <span className="black-text">{item.qty}</span></div>
                    </div>
                    <div className="col-5 col-l-3 col-m-8 col-s-10">
                        <div className="row align-items-center">
                            <div>
                                <i onClick={()=>this.onMinus(index)} className="fas fa-minus-circle cursor-pointer shadow amali-blue font-30"></i>
                            </div>
                            <div className="col-2 col-l-5 col-m-8 col-s-8">
                                <input onChange={(e)=>this.onChange(e, index)} type="text" value={item.qty} className="num" />
                            </div>
                            <div>
                                <i onClick={()=>this.onPlus(index)} className="fas fa-plus-circle cursor-pointer shadow amali-blue font-30"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-m-2 col-s-2">
                        <div><i onClick={()=>this.removeItem(index)} className="fas fa-trash-alt red-text font-20"></i></div>
                    </div>
                    <div className="col-12 width-100 height-2"></div>
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="width-90 margin-auto">
                <div className="row align-items-center">
                    <div className="col-9 col-l-12 col-m-12 col-s-12">{listItem}</div>
                    <div className="col-3 col-l-12 col-m-12 col-s-12">
                        <div className="width-90 width-l-100 width-m-100 width-s-100 float-right discount-card">
                            <div className="width-100 height-5"></div>
                            <div className="font-gotham font-14 light-grey-text">Total Items: <span className="amali-blue">{this.props.totalQty}</span></div>
                            <div className="font-gotham font-14 light-grey-text">Total Price to Pay: <span className="amali-blue">${this.props.totalPrice}</span></div><br />
                            <div className="font-gotham">Discount Code</div>
                            <div><input placeholder="enter discount code here" type="text" maxLength="5" name="discount" className="discount" value={this.props.discount} onChange={(e)=>this.onDiscount(e)} /></div>
                            <div className="width-100 height-5"></div>                        
                        </div>
                    </div>
                </div>
                <div className="width-100 height-10"></div>
            </div>
            </React.Fragment>
        );
    }
}