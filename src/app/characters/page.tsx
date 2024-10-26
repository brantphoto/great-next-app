'use cache'

import Characters from "./Characters";
import PageTitle from "@/components/PageTitle";

export interface Character {
    name: string;
    height: string;
    mass: string;
}

interface CharacterApiResponse {
    results: Character[];
}
export default async function GreetingsPage() {
    const people = await fetch("https://swapi.dev/api/people/");
    const peopleData : CharacterApiResponse = await people.json();

    return (
        <div className="container mx-auto">
            <PageTitle title="Characters" />
            <Characters peopleData={peopleData.results} />
        </div>
    )
}
