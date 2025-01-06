'use client'
import React, { use } from 'react';
import { Starship } from './[id]/CharacterDetails';
import { useRouter } from 'next/navigation';

interface StarShipCardsProps {
  starShipsPromise: Promise<Starship[]>;
}

const StarShipCards: React.FC<StarShipCardsProps> = ({
  starShipsPromise
}) => {
  const router = useRouter()
  const starShips = use<Starship[]>(starShipsPromise) as Starship[];

  return (
    <ol style={{ margin: '20px' }}>
      {starShips.map(({ name, model, url }: Starship) => {

        // consider moving to utility
        const splitUrl = url.split('/');
        const id = splitUrl[splitUrl.length - 2]

        return (
          <li key={name} className="starship-card">
            <button onClick={() => router.push(`/starships/${id}`)}>
              <h2 className="font-bold">{name}</h2>
              <p>Model: {model}</p>
            </button>
          </li>
        )
      })}
    </ol>
  )
};

export default StarShipCards;
