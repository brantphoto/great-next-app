'use client'
import { useRouter } from 'next/navigation';
import type {Character} from './page'

interface CharactersProps {
    peopleData: Character[];
}
export default function Characters ({peopleData}: CharactersProps) {
    const router = useRouter();
    const style = {
        background: 'cyan',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        maxWidth: '300px',
    }

    return (
        <>
            
            {peopleData.map((person, index) => (
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