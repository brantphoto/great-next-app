'use cache'
import React, { Suspense } from 'react'
import StarShipCards from '../StarShipCard';
import { Character } from '../page';

export interface Starship {
  name: string;
  model: string;
}

const fetchStarShip = async (starshipUrl: string) => {
  const starShip = await fetch(starshipUrl);
  return starShip.json();
}
const fetchStarShips = async (starshipsUrlArray: string[]): Promise<Starship[]> => {
  const promises = []
  for (const starshipUrl of starshipsUrlArray) {
    promises.push(fetchStarShip(starshipUrl));
  }
  return Promise.all(promises);
}

interface CharacterDetailsProps {
  characterPromise: Promise<Character>
}

const CharacterDetails = async ({ characterPromise }: CharacterDetailsProps) => {
  const { name, height, mass, starships } = await characterPromise;

  const starShipsPromise = fetchStarShips(starships);

  return (
    <div>
      <div><span className="font-bold">name: {name}</span></div>
      <div><span>height: {height}</span></div>
      <div><span>mass: {mass}</span></div>
      <div>Vehicles:</div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <StarShipCards starShipsPromise={starShipsPromise} />
        </Suspense>
      </div>
    </div>
  )
}

export default CharacterDetails
