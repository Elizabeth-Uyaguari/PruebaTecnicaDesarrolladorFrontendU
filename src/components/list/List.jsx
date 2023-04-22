import React, { useEffect, useState } from "react";
import Card from "../card/card";
import './styleList.css';

export default function List() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [nextPages, setNextPages] = useState(null);
    const [prevPages, setPrevPages] = useState(null);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=3");

    const getPokemonsApi = async () => {
        return await fetch(currentPage)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setPokemons(data.results);
                setTotalPages(data.count);
                setNextPages(data.next);
                setPrevPages(data.previous);
            });
    };
    useEffect(() => {
        getPokemonsApi();
    }, [currentPage]);

    if (isLoading) {
        return (
            <p>Cargango...</p>
        )
    } console.log(pokemons);
    return (
        <div className="contenedorPrincipal">
            <div className="lista">
            {pokemons.map((pokmon) => (
                <Card key={pokmon.url} pokemon={pokmon} />
            ))}
            </div>
            
            {totalPages > 1 && (
                <div className="botones">
                    <button disabled={prevPage === null} onClick={prevPage}>
                        Anterior
                    </button>
                    <button disabled={nextPage === totalPages} onClick={nextPage} >
                        Siguiente
                    </button>
                </div>
            )}
            </div>
           
        
    );
    function nextPage() {
        setCurrentPage((currentPage) => nextPages);
    }
    function prevPage() {
        setCurrentPage((currentPage) => prevPages);
    }
}


