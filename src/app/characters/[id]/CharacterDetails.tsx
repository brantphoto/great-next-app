'use cache'
import React, { Suspense } from 'react'
import StarShipCards from '../StarShipCard';
import { Character } from '../page';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface Starship {
  name: string;
  model: string;
  url: string;
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
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>Character Details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-bold">Height:</span> {height} cm
            </div>
            <div>
              <span className="font-bold">Mass:</span> {mass} kg
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Starships:</h3>
            <Suspense fallback={<div>Loading starships...</div>}>
              <StarShipCards starShipsPromise={starShipsPromise} />
            </Suspense>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CharacterDetails
