'use client'
import React, { use } from 'react';
import { Starship } from './[id]/CharacterDetails';

interface StarShipCardsProps {
  starShipsPromise: Promise<Starship[]>;
}

const StarShipCards: React.FC<StarShipCardsProps> = ({
  starShipsPromise
}) => {
  const starShips = use<Starship[]>(starShipsPromise) as Starship[];

  return (
    <ol style={{ margin: '20px' }}>
      {starShips.map(({ name, model }: Starship) => {
        return (
          <li key={name} className="starship-card">
            <h2 className="font-bold">{name}</h2>
            <p>Model: {model}</p>
          </li>

        )
      })}
    </ol>
  )
};

export default StarShipCards;
