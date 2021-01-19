import React from 'react';
import Footer from '../General/Footer';
import LeftImages from './LeftImages';
import Image from './Image';
import ProductDetails from './ProductDetails';
import MyContext from '../../MyContext';

class ViewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    onClick(e, index){
        let count = document.querySelectorAll('.it').length;
        let calc = 100/count;
        let fig = calc * index;
        document.querySelector('#trans').style.transform = `translateX(-${fig}%)`;
    }

    render(){
        let {id} = this.state;
        id = parseInt(id);
        return(
            <MyContext.Consumer>
                {(content)=>(
                    <React.Fragment>
                        <div>
                            <div className="width-90 margin-auto">
                                <div className="row">
                                    <LeftImages onClick={this.onClick} list={content.single(id).allImages} />
                                    <Image img={content.single(id).allImages}/>
                                    <ProductDetails msg={content.msg} cart={content.cart} addToCart={content.addToCart} item={content.single(id)} />
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}

export default ViewProduct;