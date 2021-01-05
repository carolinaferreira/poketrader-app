import React, { useState, useEffect, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import AsyncSelect from 'react-select/async';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { Pokemon } from '../../components/TradeItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
   
library.add(faTrashAlt)

function TradeForm(){
    const history = useHistory();

    const [player_1_name, setName] = useState('');
    const [player_2_name] = useState('');

    const [offerPlayer1, setOffer1] = useState<Array<any>>([]);
    const [offerPlayer2, setOffer2] = useState<Array<any>>([]);

    const mapOptions = (pokemons: Array<Pokemon>) => {
        return pokemons.map(pokemon => ({label: pokemon.name, value: pokemon.name}));
    
    }
    
    const setPokemons1 = (pokemons: any) => {
        if (offerPlayer1.length <= 5) {
            console.log(offerPlayer1.length);
            setOffer1([...offerPlayer1, pokemons[0].value]);
        } else {
            console.log('chegou no limite!');
        }
    }

    const setPokemons2 = (pokemons: any) => {
        if (offerPlayer1.length <= 5) {
            console.log(offerPlayer2);
            setOffer2([...offerPlayer2, pokemons[0].value]);
        } else {
            console.log('chegou no limite!');
        }
    }
    
    const loadOptions = async (inputValue: string, callback: any) => {
        const {data: {records}} = await api.get('/pokemons', {params: {'search[name_cont]': inputValue}});
        callback(mapOptions(records))
    }

    function handleDelete(pokemon: any){
        console.log(pokemon);
    }
    
    function handleCreateTrade(e: FormEvent){
        e.preventDefault();

        api.post('trades', {
            player_1_name,
            player_2_name,
            offer_player_1: offerPlayer1,
            offer_player_2: offerPlayer2,
        }).then(()=>{
            alert('Troca registrada com sucesso!')
            history.push('/');
        }).catch(()=> {
            alert('Erro na troca!')
        })

        console.log(
            player_1_name,
            player_2_name,
            offerPlayer1,
            offerPlayer2,
        )
    }

    return (
        <div id="page-trade-list" className="container">
            <PageHeader title="Faça sua troca aqui!">
            </PageHeader>
            <main>
                <form onSubmit={handleCreateTrade}>
                    <fieldset>
                        <legend>Player 1</legend>
                        <Input 
                            name="player_1_name" 
                            label="Nome"
                            value={player_1_name}
                            onChange={(e) => {setName(e.target.value)}}    
                        />
                        <br/>
                        <legend>Adicione pokemons</legend>
                        <AsyncSelect  
                            loadOptions={loadOptions}
                            value={[]}
                            onChange={(pokemon) => {
                                setPokemons1(pokemon);
                                }
                            }
                            isMulti 
                        />
                        <br/>
                        <legend>Oferta atual</legend>
                        <br/>
                        {offerPlayer1.map(function(pokemon, i){
                            return (
                                <table>
                                    <tbody>
                                        <td><b>{i+=1}:</b> {pokemon}</td>
                                        <td>
                                            <span onClick={() => handleDelete(pokemon)}>
                                            <FontAwesomeIcon icon="trash-alt"/>
                                            </span>
                                        </td>
                                    </tbody>
                                </table>
                            )
                        })}
                    </fieldset>
                    <fieldset>
                        <legend>Player 2</legend>
                        <Input 
                            name="player_2_name" 
                            label="Nome"
                            value={player_2_name}
                            onChange={(e) => {setName(e.target.value)}}    
                        />
                        <legend>Adicione pokemons</legend>
                        <AsyncSelect  
                            loadOptions={loadOptions}
                            value={[]}
                            onChange={(pokemon) => {
                                setPokemons2(pokemon);
                                }
                            }
                            isMulti 
                        />
                    </fieldset>
                    <footer>
                        <button type="button">
                            Fazer troca!
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )  
}

export default TradeForm;