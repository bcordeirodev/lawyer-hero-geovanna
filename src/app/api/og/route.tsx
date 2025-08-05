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

                    {/* Logo/Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#ffc107',
                            borderRadius: '50%',
                            marginBottom: '20px',
                            fontSize: '40px',
                            fontWeight: 'bold',
                            color: '#1a1a1a',
                        }}
                    >
                        ⚖️
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
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                    padding: '15px 25px',
                                    borderRadius: '10px',
                                    marginTop: '20px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '18px',
                                        color: '#ffc107',
                                        fontWeight: '500',
                                    }}
                                >
                                    {serviceData.title}
                                </span>
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
                            }}
                        >
                            <span>📞 {LAWYER_DATA.lawyer.contact.phone}</span>
                            <span style={{ margin: '0 15px' }}>•</span>
                            <span>📍 {LAWYER_DATA.lawyer.credentials.location}</span>
                        </div>

                        {/* OAB Credential */}
                        <div
                            style={{
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#999999',
                                fontWeight: '500',
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