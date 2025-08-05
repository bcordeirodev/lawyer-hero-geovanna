import { generateStructuredData } from '@/lib/metadata'

export function StructuredData() {
    const structuredData = generateStructuredData()

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    )
} 