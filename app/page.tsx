import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <nav className="bg-gray-800 shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Vito Pistelli</h1>
          <div>
            <Link href="/connections" className="text-blue-400 hover:text-blue-300">
              Projects
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Vito Pistelli</h2>
          <p className="text-xl text-gray-300 mb-8">Developer</p>
          <a 
            href="https://github.com/viligante8/" 
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
