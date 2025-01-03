'use cache'

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";

export default async function StarshipByIdPage({ params }) {
  const { id } = await params;
  const characterById = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
  const { name } = await characterById.json();
  return (
    <div>
      <PageTitle title={`Starship: ${name}`} />
      <BackButton />
    </div>
  )
}
