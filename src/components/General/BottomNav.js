import React from 'react';
import MyContext from '../../MyContext';
import {NavLink} from 'react-router-dom';

export default function BottomNav(props){
    const {totalQty, search} = props;
    function searchAction(){
        props.searchAction();
    }
    function onChangeSearch(event){
        props.onChangeSearch(event);
    }
    function setSearchVisible(){
        props.setSearchVisible();
    }
    return (
        <div id="bottomNav" className="underline width-100 top-0 white-bg z-index-999">
            <div className="width-90 margin-auto">
                <div className="row align-items-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="flex-row align-items-center">
                            <MyContext.Consumer>
                                {(content)=>(
                                    content.nav.map((item, index)=>{
                                        return (
                                            <div key={index.toString()} className="nav-item">{item}</div>
                                        )
                                    })
                                )}
                            </MyContext.Consumer>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="second display-none">
                            <div className="flex-row-reverse">
                                <div className="col-3">
                                    <NavLink to="/checkout"><div><i className="fas fa-shopping-bag amali-blue"></i>({totalQty})</div></NavLink>
                                </div>
                                <div className="col-3">
                                    <div><i className="fas fa-search" onClick={()=>setSearchVisible()}></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="first display-block">
                            <div className="flex-row-reverse align-items-center">
                                <div className="">
                                    <div>
                                        <button onClick={()=>searchAction()} className="search"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                                <div className="col-9 underline">
                                    <div><input type="search" className="search" placeholder="Search" onChange={(e)=>onChangeSearch(e)} defaultValue={search} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="search" className="width-90 margin-auto display-none">
                <div className="row align-items-center">
                    <div className="col-11"><input placeholder="Search.." type="search" className="search" onChange={(e)=>onChangeSearch(e)} defaultValue={search} /></div>
                    <div className="col-1 padding-all-5"><i className="fas fa-search font-20"></i></div>
                </div>
            </div>
        </div>
    );
}