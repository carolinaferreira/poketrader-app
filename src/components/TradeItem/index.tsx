import React from 'react';
import './styles.css';
import moment from 'moment';

export interface Trade{
    id: number;
    offer_player_1: Array<Pokemon>;
    offer_player_2: Array<Pokemon>;
    is_fair: boolean;
    offer_1_experience: number;
    offer_2_experience: number;
    player_1_id: number;
    player_2_id: number;
    created_at: Date;
    player_1: Player;
    player_2: Player;
}

export interface Pokemon{
    id: number;
    name: string;
    base_experience: number;
}

interface Player{
    id: number;
    name: string;
}

interface TradeItemProps{
    trade:Trade;
}

const TradeItem:React.FC<TradeItemProps> = ({ trade }) => {
    return (
        <article className="trade-item">
            <header>
                <div>
                    <strong>{trade.player_1.name} x {trade.player_2.name}</strong>
                    <span><b>Data da troca:</b> {moment(trade.created_at).format('DD/MM/YYYY hh:mm a')}</span>
                </div>
            </header>
            <p>
            Oferta do Jogador 1: 
            {trade.offer_player_1.map(function(pokemon, i){
                return (<li><b>pokemon:</b> {pokemon.name} | <b>base experience:</b> {pokemon.base_experience}</li>)
            })}
            <br/>
            Total Experience: <strong>{trade.offer_1_experience}</strong>
            <br/> <br/>
            Oferta do Jogador 2: 
            {trade.offer_player_2.map(function(pokemon, i){
                return (<li><b>pokemon:</b> {pokemon.name} | <b>base experience:</b> {pokemon.base_experience}</li>)
            })}
            <br/>
            Total Experience: <strong>{trade.offer_2_experience}</strong>
            </p>
            <footer>
                <p>
                    Troca
                    <strong>{(trade.is_fair) ? 'justa :)' : 'não foi justa :('}</strong>
                </p>
            </footer>
        </article>
    )
}

export default TradeItem;