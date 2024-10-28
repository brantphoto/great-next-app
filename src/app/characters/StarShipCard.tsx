'use client'
import React, { use } from 'react';

interface StarShipCardsProps {
    starShipsPromise: Promise<any>;
}

const StarShipCards: React.FC<StarShipCardsProps> = ({
    starShipsPromise
}) => {
     const starShips = use(starShipsPromise);

     return (
        <ol style={{margin: '20px'}}>
            {starShips.map(({name, model}) => {
                return (
                    <li key={name} className="starship-card">
                        <h2 className="font-bold">{name}</h2>
                        <p>Model: {model}</p>
                    </li>
                
            )})}
        </ol>
     )
};

export default StarShipCards;