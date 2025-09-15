import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Vito Pistelli</h1>
          <div>
            <Link href="/connections" className="text-blue-600 hover:text-blue-800">
              Projects
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vito Pistelli</h2>
          <p className="text-xl text-gray-600 mb-8">Developer</p>
          <a 
            href="https://github.com/viligante8/" 
            target="_blank"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
