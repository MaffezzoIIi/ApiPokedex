import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import { Colors } from './colors';
import { Tittle, Card, Form, Error } from './style';
import { Hp, Att, Def, SpA, SpD, Spd} from './style';
import { linearGradient } from 'polished';
import { type } from 'os';

interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    };
    types: ITypes[];
    stats: IStats[];
};

interface ITypes{
    type: {
        name: string;
    }
};

interface IStats{
    base_stat: number;
};

const Dashboard: React.FC = () => {

    const [newPokemon, setNewPokemon] = useState('');
    const [inputError, setInputError] = useState('');


    const [infos, setInfos] = useState<Pokemon>(() =>{

        const storagePokemon = localStorage.getItem(
            '@PokemonExplore:infos'
        );

        if(storagePokemon){
            return JSON.parse(storagePokemon);
        }
        return "";   
    });

    useEffect(() => {
        localStorage.setItem(
            '@PokemonExplore:infos',
            JSON.stringify(infos)
        );
    });

    const [types, setTypes] = useState<ITypes[]>([]);

    async function handleAddCnpj(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if(!newPokemon){
            setInputError("Digite o nome de um Pokemon! Para pesquisar.");
            return;
        }

        try {
            const response = await api.get<Pokemon>(`pokemon/${newPokemon}`);
            const pokemon = response.data;

            setInfos(pokemon);
            setTypes(pokemon.types);

            setNewPokemon('');
            setInputError('');
        } catch (err) {
            setInputError("Digite o nome de um Pokemon! Para pesquisar.");
        }
    }

    function typePokemon(type: ITypes) {
        for (var i = 0; i < Colors.length; i++){
            if(type.type.name.toLocaleUpperCase() === Colors[i].name){
                return <div style={{background: Colors[i].color}}>{type.type.name.toLocaleUpperCase()}</div>
            }
        }
    }

    function setBackGroundColor(type: ITypes[]){
        var cor1 = " ";
        var cor2 = " ";

        if(type.length == 1){
            for (let j = 0; j < Colors.length; j++) {
                if(type[0].type.name.toLocaleUpperCase() === Colors[j].name){
                    cor1 = Colors[j].color;
                }      
            }  

            return 'linear-gradient(to top, '+ cor1 +' , #fff)';                       
        } else {
            for (var i = 0; i < Colors.length; i++) {
                if(type[0].type.name.toLocaleUpperCase() === Colors[i].name){
                    cor1 = Colors[i].color;
                }
                if(type[1].type.name.toLocaleUpperCase() === Colors[i].name){
                    cor2 = Colors[i].color;
                }                      
            }

            return 'linear-gradient(to top, '+ cor1 +' , #fff, '+ cor2 +')';
        }
    }  

    console.log(setBackGroundColor(infos.types));
    
    return(
        <>
            <Tittle>Pesquisa de POKEMON</Tittle>

            {inputError && <Error>{inputError}</Error>}
            <Form hasError={!!(inputError)} onSubmit={handleAddCnpj}>
                <input 
                    value={newPokemon}
                    onChange={e => setNewPokemon(e.target.value)}
                    placeholder="Informe o pokemon!"
                    />
                <button type="submit">Pesquisar</button>
            </Form>

            {infos?
            <Card>
                
                <Link to={'/'} style={{background: setBackGroundColor(infos?.types)}}>
                    <div id= "img-type">
                        <img src={infos?.sprites.other["official-artwork"].front_default} alt=""/> 
                        <div id="types">
                            {types.map(types => (
                                typePokemon(types)
                            ))} 
                        </div> 
                    </div>
                    <div id="datails">
                        <p>Nome: {infos?.name[0].toUpperCase()}{infos?.name.substring(1)}</p>
                        <p>NRº {infos?.id}</p>
                        <p>Altura: {Number(infos?.height) / 10} m</p>
                        <p>Peso: {Number(infos?.weight) / 10} kg</p>
                    </div>
                    <div id="stats">
                        <strong>STATS: </strong>
                    </div>
                    <div id="values">
                        <Hp style={{width: Number(infos?.stats[0].base_stat) * 1.3}}><span>HP:</span><p>{infos?.stats[0].base_stat}</p></Hp>
                        <Att style={{width: Number(infos?.stats[1].base_stat) * 1.3}}><span>Attack: </span><p>{infos?.stats[1].base_stat}</p></Att>
                        <Def style={{width: Number(infos?.stats[2].base_stat) * 1.3}}><span>Defense: </span><p>{infos?.stats[2].base_stat}</p></Def>
                        <SpA style={{width: Number(infos?.stats[3].base_stat) * 1.3}}><span>Sp. Atk: </span><p>{infos?.stats[3].base_stat}</p></SpA>
                        <SpD style={{width: Number(infos?.stats[4].base_stat) * 1.3}}><span>Sp. Def: </span><p>{infos?.stats[4].base_stat}</p></SpD>
                        <Spd style={{width: Number(infos?.stats[5].base_stat) * 1.3}}><span>Speed:  </span><p>{infos?.stats[5].base_stat}</p></Spd>
                    </div>
                </Link>
            </Card>
            :""}
        </>
    );
}

export default Dashboard;