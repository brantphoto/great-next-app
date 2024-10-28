'use cache'
import React, { Suspense } from 'react'
import StarShipCards from '../StarShipCard';

const fetchStarShip = async (starship) => {
    const starShip = await fetch(starship);
    return starShip.json();
}
const fetchStarShips = async (starshipsArray) => {
    const promises = []
    for (const starship of starshipsArray) {
        promises.push(fetchStarShip(starship));
    }
    return Promise.all(promises);
}

const CharacterDetails = async ({characterPromise}) => {
    const {name, height, mass, starships} = await characterPromise;

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