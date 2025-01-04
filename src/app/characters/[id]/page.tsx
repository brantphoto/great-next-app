import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import CharacterDetails from './CharacterDetails'
import { Suspense } from "react";
import { API_ROOT } from '@/app/constants'

interface CharacterByIdPageProps {
  params: Promise<{ id: string }>;
}

const fetchCharacterById = async (id: string) => {
  'use cache'
  const characterById = await fetch(`${API_ROOT}/people/${id}/`);
  return characterById.json();
}

export default async function CharacterByIdPage({ params }: CharacterByIdPageProps) {
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
