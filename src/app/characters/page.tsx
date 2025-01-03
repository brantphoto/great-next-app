
import { Suspense } from "react";
import Characters from "./Characters";
import PageTitle from "@/components/PageTitle";
import { API_ROOT } from '@/app/constants'

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
  const people = await fetch(`${API_ROOT}/people/`);
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
