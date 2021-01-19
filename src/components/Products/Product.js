import React from 'react';
import Advert from './Advert';
import MyContext from '../../MyContext';

class Product extends React.Component{
    render(){
        return (
            <MyContext.Consumer>
                {(content)=>(
                    <React.Fragment>
                        <div className="width-90 width-m-100 width-s-100 margin-auto">
                            <div className="row">
                                <div className="col-3 col-l-12 col-m-12 col-s-12"></div>
                                <div className="col-9 col-l-12 col-m-12 col-s-12">
                                    <div className="width-95 width-lx-100 width-l-100 width-m-100 width-s-100 ">
                                        <Advert child={content.state} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {window.addEventListener('scroll', ()=>{content.navScroll()})}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Product;