import React from 'react';

export default function LeftImages(props){
    const {list} = props;
    function onClick(e, index){
        props.onClick ? props.onClick(e, index) : alert('no function passed');
    }

    let listItems = list.map((item, index)=>{
        return (
            <div className="max-img it" key={index.toString()}>
                <img src={item} alt="" onClick={(e)=>onClick(e, index)} />
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className="col-1 col-l-1 col-m-1 col-s-2">
                {listItems}
            </div>
            <div className="col-1 col-l-1 col-m-1 col-s-2"></div>
        </React.Fragment>
    );
}