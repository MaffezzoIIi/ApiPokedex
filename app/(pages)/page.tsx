"use client";

import Error from "@/components/error";
import Input from "@/components/input";
import Status from "@/components/stats";
import Tittle from "@/components/tittle";
import Types from "@/components/types";
import api from "@/service/api";
import { FormEvent, useState } from "react";

interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: ITypes[];
  stats: IStats[];
  abilities: IAbilities[];
}

interface ITypes {
  type: {
    name: string;
  };
}

interface IStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface IAbilities {
  ability: {
    name: string;
  };
}

function Dashboard() {
  const [inputError, setInputError] = useState("");

  const [pokemon, setPokemon] = useState<Pokemon>();

  async function handleChangePokemon(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const pokemonName = formData.get("pokemon") as string;

    if (!pokemonName) {
      setInputError("Digite o nome de um Pokemon! Para pesquisar.");
      return;
    }

    api
      .get<Pokemon>(`pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => {
        setPokemon(response.data);
        setInputError("");
      })
      .catch(() => {
        setInputError("Pokemon não encontrado!");
      });
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4 ">
      <div className="flex flex-col gap-2 items-center bg-slate-100 p-4 shadow-md rounded border ">
        <Tittle>Api POKEMON!</Tittle>
        <form onSubmit={handleChangePokemon} className="flex flex-col gap-2">
          <Input name="pokemon" label="Inofrme o Pokemon!" />
          <button type="submit" className="bg-blue-200 rounded p-1">
            Pesquisar
          </button>
        </form>
        {inputError && <Error>{inputError}</Error>}
      </div>
      <div className="bg-slate-100 p-4 shadow-sm rounded border flex flex-row gap-4">
        {pokemon ? (
          <>
            <div className="border-r-[1px] pr-2">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt={pokemon?.name}
                className="w-40 h-40"
              />
              <div className="grid grid-cols-2 gap-2 align-middle">
                {pokemon?.types.map((type) => {
                  return <Types key={type.type.name} type={type.type.name} />;
                })}
              </div>
            </div>
            <div className="grid grid-row-2 gap-2">
              <div>Status</div>
              <div className="flex flex-col gap-2">
                {pokemon?.stats.map((stat) => {
                  return (
                    <Status
                      key={stat.stat.name}
                      name={stat.stat.name}
                      base_stat={stat.base_stat}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 border-l-[1px] pl-2">
              <span>Número: {pokemon?.id}</span>
              <span className="capitalize">{pokemon?.name}</span>
              <span>Altura: {pokemon?.height / 10} m</span>
              <span>Peso: {pokemon?.weight / 10} kg</span>
              <hr />
              <div className="flex flex-col">
                <span>Habilidades</span>
                <div className="flex gap-2">
                  {pokemon?.abilities.map((ability) => {
                    return (
                      <span className="capitalize" key={ability.ability.name}>
                        {ability.ability.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Nenhuma informação encontrada!</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
