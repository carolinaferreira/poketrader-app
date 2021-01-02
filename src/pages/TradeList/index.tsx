import React, { useState, useEffect } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TradeItem, { Trade } from '../../components/TradeItem';
import api from '../../services/api';

function TradeList(){
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        api
          .get("/trades")
          .then((response) => {
            setTrades(response.data.records);
          })
          .catch((error) => {
            alert("Ocorreu um erro ao buscar as trocas");
          });
      }, []);

    return (
        <div id="page-trade-list" className="container">
            <PageHeader title="Estas são as trocas feitas.">
            </PageHeader>
            <main>
                {trades.map((trade: Trade) => {
                    console.log({trade});
                    return <TradeItem key={trade.id} trade={trade}/>;
                })}
            </main>
        </div>
    ) 
}

export default TradeList;