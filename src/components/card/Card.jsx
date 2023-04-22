import React, { useEffect, useState } from "react";
import './styleCard.css';
import { Link } from 'react-router-dom';
export default function Card(promp) {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({
        name:'',
        weight: '',
        height: '',
        type: '',
        img: '',
        moves:'',
        abilities:'',
        

    });

    const getPokemonCard = async () => {
        return await fetch(promp.pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setPokemon({
                    name: data.name,
                    weight: data.weight,
                    height: data.height,
                    type: data.types[0].type.name,
                    img: data.sprites.front_default,
                    moves:data.moves,
                    abilities:data.abilities,
                });
            });
    }
    useEffect(() => {
        getPokemonCard();
    }, []);

    if (isLoading) {
        return (
            <div className="card">
                <h1>Nombre</h1>
                <p>{promp.pokemon.name}</p>
            </div>

        )
    }
    return (
        <div className="card">
            
            <h2>{promp.pokemon.name}</h2>
            <img src={pokemon.img} alt="pokemon..." />
            <p>Type: {pokemon.type}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
            <Link to="/pokemon" state={pokemon} ><button>Ver Detalle</button></Link>
        </div>

    )
} 