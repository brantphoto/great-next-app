import CharacterDetails from './CharacterDetails'
import { Suspense } from "react";
import { API_ROOT } from '@/app/constants'
import { BreadcrumbNav } from "@/components/breadcrumb-nav";

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
  const character = await characterById;

  return (
    <div className="container mx-auto">
      <BreadcrumbNav items={[
        { label: "Home", href: "/" },
        { label: "Characters", href: "/characters" },
        { label: character.name, isCurrentPage: true }
      ]} />
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterDetails characterPromise={characterById} />
      </Suspense>
    </div>
  );
}
