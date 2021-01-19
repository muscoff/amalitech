import React, {Component} from 'react';
import TopNav from './TopNav';
import MyContext from '../../MyContext';
import BottomNav from './BottomNav';

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <div id="navBar" className="display-block width-100 z-index-999 white-bg fixed top-0">
                    <MyContext.Consumer>
                        {(content)=>(
                            <React.Fragment>
                                <TopNav emailSubscription={content.emailSubscription} onChangeEmail={content.onChangeEmail} setUp={content.setUp} setCart={content.setCart} email={content.email} cart={content.cart} /><br />
                                <BottomNav setSearchVisible={content.setSearchVisible} onChangeSearch={content.onChangeSearch} searchAction={content.searchAction} search={content.search} bottomNav={content.bottomNav} totalQty={content.totalQty} />
                            </React.Fragment>
                        )}
                    </MyContext.Consumer>
                </div>
            </div>
        );
    }
}