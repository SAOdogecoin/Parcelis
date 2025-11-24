export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Parcelis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Built with AI Studio
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            The fastest path from prompt to production with Gemini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">🚀 Fast</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Deploy your ideas quickly and efficiently
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">🤖 AI-Powered</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built with cutting-edge AI technology
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">💡 Innovative</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Transform prompts into production apps
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://aistudio.google.com/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Start Building
          </a>
        </div>
      </main>
    </div>
  );
}
