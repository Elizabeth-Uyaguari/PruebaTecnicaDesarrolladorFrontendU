import React from "react";
import { useLocation } from 'react-router-dom';
import './Detalle.css'
const Detalle = (promp) => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div className="detalles">
            <div>
                <h1>{location.state?.name}</h1>
                <img src={location.state?.img} alt="pokemon..." />
                <p>Type: {location.state?.type}</p>
                <p>Weight: {location.state?.weight}</p>
                
                <p>Height: {location.state?.height}</p>
              
                <div>
                    <ul>
                        <h2>Abilities</h2>
                        {location.state?.abilities.map((ability) => (
                            <li key={ability.ability.name}>{ability.ability.name} </li>
                        ))}
                    </ul>
                    <ul>
                        <h2>Moves</h2>
                        {location.state?.moves.map((move) => (
                            <li key={move.move.name}> {move.move.name} </li>

                        )) }
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Detalle;
//nombre, imagen, tipo, peso, altura, habilidades, movimientos, evoluciones

//<p>{location.state?.moves}</p>
//<div className="lista">
  //          {pokemons.map((pokmon) => (
    //            <Card key={pokmon.url} pokemon={pokmon} />
      //      ))}
        //    </div>