import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from './components/Products/Products';
import ViewProduct from './components/Products/ViewProduct';
import Checkout from './components/Checkout/Checkout';
import Nav from './components/General/Nav';

export default function Routes(){
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact strict path="/" component={Products} />
                <Route exact strict path="/viewproduct/:id" component={ViewProduct} />
                <Route exact strict path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    );
}