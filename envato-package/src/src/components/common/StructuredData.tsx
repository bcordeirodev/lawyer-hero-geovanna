import { generateStructuredData } from '@/lib/seo/metadata'

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