'use cache'

import { Suspense } from "react";
import Characters from "./Characters";
import PageTitle from "@/components/PageTitle";

export interface Character {
  name: string;
  height: string;
  mass: string;
  starships: string[];
}

export interface CharacterApiResponse {
  results: Character[];
}

const fetchPeopleData = async () => {
  const people = await fetch("https://swapi.dev/api/people/");
  return people.json();
}
export default async function GreetingsPage() {
  const peopleData: Promise<CharacterApiResponse> = fetchPeopleData();

  return (
    <div className="container mx-auto">
      <PageTitle title="Characters" />
      <Suspense fallback={<div>Loading...</div>}>
        <Characters peopleData={peopleData} />
      </Suspense>
    </div>
  )
}
