'use client'
import React, { use } from 'react';
import { Starship } from './[id]/CharacterDetails';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface StarShipCardsProps {
  starShipsPromise: Promise<Starship[]>;
}

const StarShipCards: React.FC<StarShipCardsProps> = ({
  starShipsPromise
}) => {
  const router = useRouter()
  const starShips = use<Starship[]>(starShipsPromise) as Starship[];

  return (
    <ol className="space-y-2">
      {starShips.map(({ name, model, url }: Starship) => {
        const splitUrl = url.split('/');
        const id = splitUrl[splitUrl.length - 2]

        return (
          <li key={name}>
            <Button 
              variant="neutral" 
              className="w-full"
              onClick={() => router.push(`/starships/${id}`)}
            >
              <div className="flex flex-col items-start">
                <span className="font-bold">{name}</span>
                <span>{model}</span>
              </div>
            </Button>
          </li>
        )
      })}
    </ol>
  )
};

export default StarShipCards;
