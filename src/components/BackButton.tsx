'use client'

export default function BackButton() {
    return (
        <button style={{paddingBottom: '20px', paddingTop: '20px'}} className="text-2xl" onClick={() => window.history.back()}>Go Back</button>
    )
}