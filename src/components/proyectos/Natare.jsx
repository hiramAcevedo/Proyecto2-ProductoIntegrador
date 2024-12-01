import { ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Natare = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        {/* Título y descripción */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Natare
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Concebida inicialmente como un ejercicio de aprendizaje en metodologías ágiles, Natare evolucionó hacia un 
          producto tangible que prioriza la experiencia de compra intuitiva y personalizada. Aunque actualmente se centra 
          en funcionalidades esenciales, sienta las bases para futuras expansiones con el objetivo de cubrir las 
          necesidades específicas de este nicho.
        </p>


        {/* Vista previa */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Vista Previa
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/natare.jpeg"
              alt="Vista previa de Natare"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          La versión principal de Natare utiliza HTML y CSS, reflejando su enfoque en funcionalidad básica y accesible.
          </p>
        </div>

        {/* Enlaces y recursos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Enlaces del Proyecto
            </h2>
            <div className="space-y-3">
              <a
                href="https://luism-code-star.github.io/natare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Ver Proyecto Desplegado</span>
              </a>
              <a
                href="https://github.com/LuisM-code-star/natare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Ver en GitHub</span>
              </a>
              <a
                href="/downloads/natare-main.zip"
                download
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Descargar Código Fuente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Natare;
