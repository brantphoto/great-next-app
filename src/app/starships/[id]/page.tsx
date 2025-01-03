'use cache'

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import { API_ROOT } from '@/app/constants'

export default async function StarshipByIdPage({ params }) {
  const { id } = await params;
  const characterById = await fetch(`${API_ROOT}/starships/${id}/`);
  const { name } = await characterById.json();
  return (
    <div>
      <PageTitle title={`Starship: ${name}`} />
      <BackButton />
    </div>
  )
}
