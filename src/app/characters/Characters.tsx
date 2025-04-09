'use client'
import { useRouter } from 'next/navigation';
import type { CharacterApiResponse } from './page'
import { use } from 'react';
import { Button } from '@/components/ui/button';

interface CharactersProps {
  peopleData: Promise<CharacterApiResponse>;
}
export default function Characters({ peopleData }: CharactersProps) {
  const { results } = use(peopleData);
  const router = useRouter();

  return (
    <>
      {results.map((person, index) => (
        <div key={person.name}>
          <Button className="mb-2" onClick={() => {
            router.push(`/characters/${index + 1}`);
          }}  >
            {person.name}
          </Button>
        </div>
      ))}
    </>
  )
}
