import reactLogo from './assets/favicon.ico'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex gap-6 mb-6">
            <a href="https://github.com/apustovitovsky" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="w-12 h-12 hover:scale-110 transition-transform" alt="React logo" />
            </a>
            <a href="https://github.com/apustovitovsky" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="w-12 h-12 hover:scale-110 transition-transform" alt="React logo" />
            </a>
            <a href="https://github.com/apustovitovsky" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="w-12 h-12 hover:scale-110 transition-transform" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-center">Алексей Пустовитовский</h1>
          <p className="text-gray-400 text-sm mt-2">QA-инженер, исследователь, на связи</p>
        </header>

        {/* Контакты */}
        <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Контакты</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="http://t.me/apustovitovsky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="mailto:a.pustovitovsky@gmail.com"
                className="text-blue-400 hover:underline"
              >
                a.pustovitovsky@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/apustovitovsky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/apustovitovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/apustovitovsky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>

        {/* Чем занимаюсь */}
        <section className="bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Чем занимаюсь</h2>
          <p>
            <a
              href="https://www.qa.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Прохожу курс QA.Studio
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default App
