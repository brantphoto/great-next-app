'use cache'
import Link from "next/link";
import type { Character } from "../page";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
export default async function CharacterByIdPage({params}) {
  const { id } = await params;
  const characterById = await fetch(`https://swapi.dev/api/people/${id}/`);
  const {name, height, mass, starships} : Character = await characterById.json();
  return (
        <div className="container mx-auto">
            <PageTitle title={`Character: ${name}`} />
           <div>
            <BackButton />
           </div>
           <div><span>height: {height}</span></div>
           <div><span>mass: {mass}</span></div>
           <div>Vehicles:</div>
           <ul>
            {starships.map((starship) => {
                const starshipId = starship.split('/')[5]
                return (
                    <li key={starship}>
                        <Link  href={`/starships/${starshipId}`}>
                            {starshipId}
                        </Link>
                    </li>
            )
})}
           </ul>
        </div>
  );
}