import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Bienvenido a Proyecto II
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Esta es una aplicación moderna construida con React, Vite, y Tailwind CSS.
            Incluye características como modo oscuro, barra lateral responsive, y una
            interfaz de usuario limpia y profesional.
          </p>
        </div>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
