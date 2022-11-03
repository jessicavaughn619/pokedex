import React, { useState, useEffect } from 'react';
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import "./index.css"

const App = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const getAllPokemons = async () => {
        const res = await fetch(loadPoke)
        const data = await res.json()
        setLoadPoke(data.next)

        function createPokemonObject(result){
            result.forEach(async (pokemon) => {
                const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json();
                setAllPokemons(currentList => [...currentList,data])
            });
        }
        createPokemonObject(data.results)
        await console.log(allPokemons)
    }
    
    useEffect(() => {
        getAllPokemons()
    }, [])

    function search(allPokemons) {
        return allPokemons.filter((pokemon) => {
            if (pokemon.types[0].type.name == filterParam) {
                return filterParam.some((newPokemon) => {
                    return (
                        pokemon[newPokemon]
                    )
                })
            } else if (filterParam == "All") {
                return filterParam.some((newPokemon) => {
                    return (
                        pokemon[newPokemon]
                    )
                })
            }
        })
    }

  return (
    <>
    <Header />
    <Nav />
    <select className="type-filter"
    onChange={(e) => {
        setFilterParam(e.target.value);
    }}>
    <option value="All">Filter By Type</option>
    <option value="rock">Rock</option>
    <option value="ghost">Ghost</option>
    <option value="electric">Electric</option>
    <option value="bug">Bug</option>
    <option value="poison">Poison</option>
    <option value="normal">Normal</option>
    <option value="fairy">Fairy</option>
    <option value="fire">Fire</option>
    <option value="grass">Grass</option>
    <option value="water">Water</option>
    <option value="ground">Ground</option>
    </select>

    <div className="pokemon__container">
    {search(allPokemons).map((pokemon) => 
    <Card 
    id = {pokemon.type}
    name = {pokemon.name}
    />
    )}
    {allPokemons.map((pokemon,index) =>
    <Card 
    id = {pokemon.id}
    name = {pokemon.name}
    image = {pokemon.sprites.other.dream_world.front_default}
    type = {pokemon.types[0].type.name}
    key = {index}
    height = {pokemon.height}
    weight = {pokemon.weight}
    />
    )}
    </div>
    <div className="load-more">
    <button className="load-more-btn" onClick={()=>getAllPokemons()}><h3>Catch More Pokémon</h3></button>
    </div>
    <Footer />
    </>
  )
};

export default App