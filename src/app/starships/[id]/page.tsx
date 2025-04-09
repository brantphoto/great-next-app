'use cache'
import { API_ROOT } from '@/app/constants'
import { BreadcrumbNav } from "@/components/breadcrumb-nav";

interface StarshipByIdPageProps {
  params: Promise<{ id: string }>
}

export default async function StarshipByIdPage({ params }: StarshipByIdPageProps) {
  const { id } = await params;
  const starshipById = await fetch(`${API_ROOT}/starships/${id}/`);
  const starship = await starshipById.json();
  return (
    <div>
      <BreadcrumbNav items={[
        { label: "Home", href: "/" },
        { label: "Starships", href: "/starships" },
        { label: starship.name, isCurrentPage: true }
      ]} />
    </div>
  )
}
