import { LAWYER_CONFIG } from '@/config'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const name = searchParams.get('name') || LAWYER_CONFIG.lawyer.name
        const title = searchParams.get('title') || LAWYER_CONFIG.lawyer.title

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
                        backgroundColor: '#0f172a',
                        backgroundImage: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                        padding: '40px',
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
                            opacity: 0.1,
                        }}
                    />

                    {/* Main Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            maxWidth: '1000px',
                            position: 'relative',
                            zIndex: 1,
                            padding: '40px 40px 80px 40px',
                        }}
                    >
                        {/* Professional Legal Icon */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                            }}
                        >
                            <div
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #eab308, #b45309)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '3px solid rgba(234, 179, 8, 0.4)',
                                    boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)',
                                }}
                            >
                                <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
                                    {/* Base da balança */}
                                    <rect x="45" y="85" width="10" height="8" fill="white" fillOpacity="0.9" />
                                    <rect x="35" y="90" width="30" height="4" fill="white" fillOpacity="0.9" />

                                    {/* Haste central */}
                                    <rect x="48" y="25" width="4" height="65" fill="white" fillOpacity="0.9" />

                                    {/* Barra horizontal */}
                                    <rect x="25" y="28" width="50" height="3" fill="white" fillOpacity="0.9" />

                                    {/* Prato esquerdo */}
                                    <ellipse cx="35" cy="40" rx="12" ry="3" fill="white" fillOpacity="0.8" />
                                    <line x1="35" y1="31" x2="35" y2="37" stroke="white" strokeWidth="2" opacity="0.9" />

                                    {/* Prato direito */}
                                    <ellipse cx="65" cy="40" rx="12" ry="3" fill="white" fillOpacity="0.8" />
                                    <line x1="65" y1="31" x2="65" y2="37" stroke="white" strokeWidth="2" opacity="0.9" />

                                    {/* Ornamento superior */}
                                    <circle cx="50" cy="22" r="3" fill="white" fillOpacity="0.9" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontSize: '44px',
                                fontWeight: 'bold',
                                color: '#f8fafc',
                                margin: '0 0 16px 0',
                                lineHeight: '1.1',
                            }}
                        >
                            {name}
                        </h1>

                        {/* Decorative Line */}
                        <div
                            style={{
                                width: '250px',
                                height: '4px',
                                background: 'linear-gradient(90deg, transparent, #eab308, #ca8a04, #eab308, transparent)',
                                margin: '0 auto 20px auto',
                                borderRadius: '2px',
                            }}
                        />

                        {/* Subtitle */}
                        <p
                            style={{
                                fontSize: '22px',
                                fontWeight: '600',
                                color: '#eab308',
                                margin: '0 0 20px 0',
                                lineHeight: '1.3',
                            }}
                        >
                            {title}
                        </p>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: '14px',
                                color: '#cbd5e1',
                                margin: '0 0 24px 0',
                                lineHeight: '1.5',
                                maxWidth: '600px',
                                textAlign: 'center',
                            }}
                        >
                            {LAWYER_CONFIG.lawyer.description}
                        </p>

                        {/* Contact Info - Compact */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '32px',
                                marginTop: '16px',
                                marginBottom: '20px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#e2e8f0',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    padding: '10px 16px',
                                    backgroundColor: 'rgba(234, 179, 8, 0.15)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(234, 179, 8, 0.4)',
                                }}
                            >
                                <span style={{ fontSize: '16px', color: '#eab308' }}>✉️</span>
                                <span>{LAWYER_CONFIG.lawyer.contact.email}</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#e2e8f0',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    padding: '10px 16px',
                                    backgroundColor: 'rgba(234, 179, 8, 0.15)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(234, 179, 8, 0.4)',
                                }}
                            >
                                <span style={{ fontSize: '16px', color: '#eab308' }}>📱</span>
                                <span>{LAWYER_CONFIG.lawyer.contact.phone}</span>
                            </div>
                        </div>

                        {/* Compact Credentials */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                marginTop: '12px',
                                padding: '12px 24px',
                                backgroundColor: 'rgba(234, 179, 8, 0.2)',
                                borderRadius: '8px',
                                border: '2px solid rgba(234, 179, 8, 0.6)',
                            }}
                        >
                            <span style={{ fontSize: '16px', color: '#eab308' }}>⚖️</span>
                            <span style={{ fontSize: '15px', color: '#f8fafc', fontWeight: '700' }}>
                                {LAWYER_CONFIG.lawyer.credentials.bar}
                            </span>
                            <span style={{ fontSize: '14px', color: '#cbd5e1' }}>•</span>
                            <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                                {LAWYER_CONFIG.lawyer.credentials.location}
                            </span>
                        </div>
                    </div>

                    {/* Fixed Footer */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '52.5%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            color: '#94a3b8',
                            fontWeight: '500',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            borderRadius: '8px',
                            border: '1px solid rgba(234, 179, 8, 0.4)',
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Dra. Geovanna Nery • Advocacia com transparência e dedicação
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (error) {
        console.error('OG Image generation error:', error)
        return new Response('Error generating image', { status: 500 })
    }
}