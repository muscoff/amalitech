import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Advert(props){
    const {child, className} = props;
    function onClickItem(item){
        localStorage.setItem('item', JSON.stringify(item));
        window.location = `/viewproduct`;
    }

    let listItems = child.map((item, index)=>{
        let image = item.allImages;
        return (
            <div className="col-3 col-l-4 col-m-6 col-s-12 padding-all-10" key={index.toString()}>
                <div className="width-100 overflow-hidden flex-column align-items-center relative p-item">
                    <div className="width-100 height-60 relative" data-status={true}>
                        {
                            image.map((item, index)=>{
                                if(index <=1){
                                    return (
                                        <React.Fragment key={index.toString()}>
                                            <div className={index === 0 ? "absolute full product": "absolute full product img-item"} style={{backgroundImage: "url("+item+")" }}></div>
                                        </React.Fragment>
                                    )
                                }
                            })
                        }
                    </div>
                    
                    <div className="absolute p-child bottom-10 white-bg round-5 padding-all-5 amali-blue font-gotham">
                        <NavLink to={`/viewproduct/${item.id}`}>QUICK VIEW</NavLink>
                    </div>
                    
                </div>
                <div className="font-roboto amali-blue left-text">{item.name}</div>
                <div className="font-gotham amali-blue left-text">${item.price}</div>
            </div>
        );
    });
    return (
        <div>
            <div className={className ? className : 'row'}>
                <div className="col-3 col-l-12 col-m-12 col-s-12 padding-all-10 flex-column white-text justify-content-center align-items-center1 amali-blueBg">
                    <div className="width-90 margin-auto center-text">
                        <div className="font-gotham font-40 font-lx-30 font-l-30 font-m-30 font-s-30 uppercase">same day delivery is here!</div>
                        <div><i className="fas fa-shopping-cart font-30"></i></div>
                        <div className="font-gothic">*Available to customers within 10miles of a retail store</div>
                    </div>
                </div>
                {listItems}
            </div>
        </div>
    );
}