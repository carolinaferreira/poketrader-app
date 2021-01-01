import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TradeList from './pages/TradeList';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/trades-history" component={TradeList}/>
        </BrowserRouter>
    )
}

export default Routes;