import { ImageResponse } from 'next/og'
import { LAWYER_DATA } from '@/constants/data'

export const runtime = 'edge'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const name = searchParams.get('name') || LAWYER_DATA.lawyer.name
        const title = searchParams.get('title') || LAWYER_DATA.lawyer.title
        const service = searchParams.get('service')

        const serviceData = service
            ? LAWYER_DATA.services.find(s => s.id === service)
            : null

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1a1a1a',
                        backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        padding: '40px',
                        position: 'relative',
                        fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                >
                    {/* Background Pattern */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
                            opacity: 0.3,
                        }}
                    />

                    {/* Profile Image */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            marginBottom: '20px',
                            overflow: 'hidden',
                            border: '4px solid #ffc107',
                            boxShadow: '0 8px 32px rgba(255, 193, 7, 0.3)',
                        }}
                    >
                        <img
                            src="https://picsum.photos/200/200?random=1"
                            alt="Dra. Geovanna Nery"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    {/* Main Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            maxWidth: '800px',
                        }}
                    >
                        {/* Name */}
                        <h1
                            style={{
                                fontSize: '48px',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                margin: '0 0 10px 0',
                                lineHeight: 1.2,
                            }}
                        >
                            {name}
                        </h1>

                        {/* Title */}
                        <h2
                            style={{
                                fontSize: '24px',
                                fontWeight: 'normal',
                                color: '#ffc107',
                                margin: '0 0 20px 0',
                                lineHeight: 1.3,
                            }}
                        >
                            {title}
                        </h2>

                        {/* Service-specific content */}
                        {serviceData && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                    padding: '20px 30px',
                                    borderRadius: '15px',
                                    marginTop: '20px',
                                    border: '1px solid rgba(255, 193, 7, 0.3)',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '20px',
                                        color: '#ffc107',
                                        fontWeight: '600',
                                        marginBottom: '10px',
                                    }}
                                >
                                    {serviceData.title}
                                </span>
                                <span
                                    style={{
                                        fontSize: '14px',
                                        color: '#cccccc',
                                        textAlign: 'center',
                                        maxWidth: '400px',
                                    }}
                                >
                                    {serviceData.description}
                                </span>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        marginTop: '10px',
                                    }}
                                >
                                    {serviceData.features.slice(0, 3).map((feature, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                fontSize: '12px',
                                                color: '#ffc107',
                                                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                                padding: '4px 8px',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255, 193, 7, 0.3)',
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact Info */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '30px',
                                fontSize: '16px',
                                color: '#cccccc',
                                gap: '20px',
                            }}
                        >
                            <span>📞 {LAWYER_DATA.lawyer.contact.phone}</span>
                            <span>📍 {LAWYER_DATA.lawyer.credentials.location}</span>
                            <span>📧 {LAWYER_DATA.lawyer.contact.email}</span>
                        </div>

                        {/* Statistics */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '20px',
                                gap: '30px',
                                fontSize: '14px',
                                color: '#ffc107',
                            }}
                        >
                            <span>⭐ {LAWYER_DATA.lawyer.statistics.experience} Anos de Experiência</span>
                            <span>⚖️ {LAWYER_DATA.lawyer.statistics.casesResolved} Casos Resolvidos</span>
                            <span>📈 {LAWYER_DATA.lawyer.statistics.successRate} Taxa de Sucesso</span>
                        </div>

                        {/* OAB Credential */}
                        <div
                            style={{
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#999999',
                                fontWeight: '500',
                                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                            }}
                        >
                            {LAWYER_DATA.lawyer.credentials.bar}
                        </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '14px',
                            color: '#666666',
                        }}
                    >
                        <span>geovannanery.com</span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e) {
        console.log(`${e instanceof Error ? e.message : 'Unknown error'}`)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
} 