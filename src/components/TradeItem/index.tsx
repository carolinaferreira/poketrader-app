import React from 'react';
import './styles.css';
import PokemonItem, { Pokemon } from '../PokemonItem';

export interface Trade{
    id: number;
    offer_player_1: Array<string>;
    offer_player_2: Array<string>;
    is_fair: boolean;
    offer_1_experience: number;
    offer_2_experience: number;
    player_1_id: number;
    player_2_id: number;
    created_at: Date;
}

interface TradeItemProps{
    trade:Trade;
}

const TradeItem:React.FC<TradeItemProps> = ({ trade }) => {
    return (
        <article className="trade-item">
            <header>
                <div>
                    <strong>{trade.player_1_id} x {trade.player_2_id}</strong>
                    <span><b>Data:</b> {trade.created_at}</span>
                </div>
            </header>
            <p>
            Oferta do Jogador 1: 
            {trade.offer_player_1}
            <br/>
            Total Experience: <strong>{trade.offer_1_experience}</strong>
            <br/> <br/>
            Oferta do Jogador 2: {trade.offer_player_2}
            <br/>
            Total Experience: <strong>{trade.offer_2_experience}</strong>
            </p>
            <footer>
                <p>
                    Troca
                    <strong>{trade.is_fair}</strong>
                </p>
            </footer>
        </article>
    )
}

export default TradeItem;