import React, { useState, FormEvent } from 'react';
import api from '../../service/api';
import { Colors } from './colors';
import { Tittle, Card, Form } from './style';
import { Hp, Att, Def, SpA, SpD, Spd} from './style';

interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        other: {
            'official-artwork': {
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

    const [infos, setInfos] = useState<Pokemon>();
    const [types, setTypes] = useState<ITypes[]>([]);

    async function handleAddCnpj(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get<Pokemon>(`pokemon/${newPokemon}`);
        const pokemon = response.data;
        console.log(pokemon);

        setInfos(pokemon);
        setTypes(pokemon.types);

        setNewPokemon('');
    }

    function typePokemon(type: ITypes) {
        for (var i = 0; i < Colors.length; i++){
            if(type.type.name.toLocaleUpperCase() === Colors[i].name){
                return <div style={{background: Colors[i].color}}>{type.type.name.toLocaleUpperCase()}</div>
            }
        }
    }

    return(
        <>
            <Tittle>Pesquisa de POKEMON</Tittle>
            <Form onSubmit={handleAddCnpj}>
                <input 
                    value={newPokemon}
                    onChange={e => setNewPokemon(e.target.value)}
                    placeholder="Informe o pokemon!"
                    required
                    />
                <button type="submit">Pesquisar</button>
            </Form>

            <Card>
                <a href="">
                    <div id= "img-type">
                        <img src={infos?.sprites.other['official-artwork'].front_default} alt=""/> 
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
                        <Hp><span>HP:</span><p>{infos?.stats[0].base_stat}</p></Hp>
                        <Att><span>Attack: </span><p>{infos?.stats[1].base_stat}</p></Att>
                        <Def><span>Defense: </span><p>{infos?.stats[2].base_stat}</p></Def>
                        <SpA><span>Sp. Atk: </span><p>{infos?.stats[3].base_stat}</p></SpA>
                        <SpD><span>Sp. Def: </span><p>{infos?.stats[4].base_stat}</p></SpD>
                        <Spd><span>Speed:  </span><p>{infos?.stats[5].base_stat}</p></Spd>
                    </div>
                </a>
            </Card>
        </>
    );
}

export default Dashboard;