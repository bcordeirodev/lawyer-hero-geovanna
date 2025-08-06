import { ImageResponse } from 'next/og'
import { lawyerConfig } from '@/lib/core/config'

export const runtime = 'edge'

export async function GET() {
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
                    backgroundColor: '#f8fafc',
                    backgroundImage: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
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
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
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
                        padding: '40px',
                        maxWidth: '800px',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {/* Logo/Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                            marginBottom: '24px',
                            boxShadow: '0 10px 25px rgba(234, 179, 8, 0.3)',
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M7 12h10" />
                            <path d="M10 18h4" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: '#1e293b',
                            margin: '0 0 16px 0',
                            lineHeight: '1.2',
                        }}
                    >
                        {lawyerConfig.name}
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '24px',
                            color: '#64748b',
                            margin: '0 0 32px 0',
                            lineHeight: '1.4',
                            maxWidth: '600px',
                        }}
                    >
                        {lawyerConfig.title}
                    </p>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: '18px',
                            color: '#475569',
                            margin: '0 0 32px 0',
                            lineHeight: '1.6',
                            maxWidth: '700px',
                        }}
                    >
                        {lawyerConfig.description}
                    </p>

                    {/* Contact Info */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            marginTop: '32px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#64748b',
                                fontSize: '16px',
                            }}
                        >
                            <span>📧</span>
                            <span>{lawyerConfig.contact.email}</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#64748b',
                                fontSize: '16px',
                            }}
                        >
                            <span>📞</span>
                            <span>{lawyerConfig.contact.phone}</span>
                        </div>
                    </div>

                    {/* Credentials */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginTop: '24px',
                            padding: '12px 24px',
                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                            borderRadius: '12px',
                            border: '1px solid rgba(234, 179, 8, 0.2)',
                        }}
                    >
                        <span style={{ fontSize: '16px', color: '#eab308' }}>⚖️</span>
                        <span style={{ fontSize: '16px', color: '#1e293b', fontWeight: '600' }}>
                            {lawyerConfig.credentials.bar}
                        </span>
                        <span style={{ fontSize: '16px', color: '#64748b' }}>
                            • {lawyerConfig.credentials.location}
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: '#64748b',
                    }}
                >
                    <span>Advocacia Especializada</span>
                    <span>Assessoria Jurídica Personalizada</span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
} 