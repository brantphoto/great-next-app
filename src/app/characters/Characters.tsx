'use client'
import { useRouter } from 'next/navigation';
import type {CharacterApiResponse} from './page'
import { use } from 'react';

interface CharactersProps {
    peopleData: Promise<CharacterApiResponse>;
}
export default function Characters ({peopleData}: CharactersProps) {
    const { results } = use(peopleData);
    const router = useRouter();
    const style = {
        border: '2px solid black',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        maxWidth: '300px',
    }

    return (
        <>
            {results.map((person, index) => (
                <div key={person.name} style={style}>
                    <button style={{width: '100%'}} onClick={() => {
                        router.push(`/characters/${index + 1}`);
                    }}  >
                        {person.name}
                    </button>
                </div>
            ))}
        </>
    )
}