import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Página não encontrada</h1>
                <p className="text-gray-300 mb-8">A página que você está procurando não existe.</p>
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                    Voltar ao início
                </Link>
            </div>
        </div>
    )
} 