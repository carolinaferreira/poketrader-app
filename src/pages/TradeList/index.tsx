import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TradeItem from '../../components/TradeItem';

function TradeList(){
    return (
        <div id="page-trade-list" className="container">
            <PageHeader title="Estas são as trocas feitas.">
            </PageHeader>
            <main>
                <TradeItem/>
                <TradeItem/>
                <TradeItem/>
                <TradeItem/>
                <TradeItem/>
                <TradeItem/>
            </main>
        </div>
    ) 
}

export default TradeList;