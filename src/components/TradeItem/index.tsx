import React from 'react';
import './styles.css';

function TradeItem(){
    return (
        <article className="trade-item">
            <header>
                <div>
                    <strong>Player 1 x Player 2</strong>
                    <span><b>Data:</b> dd/mm/aaaa</span>
                </div>
            </header>
            <p>
            Oferta do Jogador 1:
            Total Experience:
            <br/> <br/>
            Oferta do Jogador 2:
            Total Experience:
            </p>
            <footer>
                <p>
                    Troca
                    <strong>Justa</strong>
                </p>
            </footer>
        </article>
    )
}

export default TradeItem; 