import Link from "next/link";
import type { Character } from "../page";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import CharacterDetails from './CharacterDetails'
import { Suspense } from "react";

const fetchCharacterById = async (id) => {
  'use cache'
  const characterById = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
  return characterById.json();
}



export default async function CharacterByIdPage({ params }) {
  const { id } = await params;
  const characterById = fetchCharacterById(id);


  return (
    <div className="container mx-auto">
      <PageTitle title={`Character Detail`} />
      <div>
        <BackButton />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterDetails characterPromise={characterById} />
      </Suspense>
    </div>
  );
}
