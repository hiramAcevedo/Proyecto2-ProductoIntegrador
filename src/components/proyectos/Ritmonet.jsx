import { ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Ritmonet = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        {/* Título y descripción */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Ritmonet
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Ritmonet es una plataforma web diseñada para ofrecer educación musical de calidad a la comunidad hispanohablante. 
          A diferencia de otras opciones existentes, Ritmonet combina cursos interactivos, teoría musical y herramientas 
          avanzadas de aprendizaje, adaptadas cultural y económicamente al público hispano. Nuestro objetivo es cerrar la 
          brecha educativa ofreciendo una solución accesible y completa que incluya ejercicios en línea, evaluaciones y 
          recursos multimedia, todo en un entorno diseñado para fomentar el desarrollo musical.
        </p>

        {/* Vista previa */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Vista Previa
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/RitmonetHomePage.jpeg"
              alt="Vista previa de Ritmonet"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Esta versión es una demo dinámica, desarrollada para mostrar las posibilidades técnicas y pedagógicas de la plataforma.
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
                href="https://ritmonetdeploy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Ver Proyecto Desplegado</span>
              </a>
              <a
                href="https://github.com/hiramAcevedo/ritmonetdeploy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Ver en GitHub</span>
              </a>
              <a
                href="/downloads/ritmonetdeploy-main.zip"
                download
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Descargar Código Fuente</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Documentación
            </h2>
            <div className="space-y-3">
              <a
                href="https://trello.com/b/gOAVAeon/ritmonet-historias-de-usuario-x-funci%C3%B3n-priorizaci%C3%B3n-u2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Tablero Trello</span>
              </a>
              <a
                href="https://hiramwoki1996.atlassian.net/jira/core/projects/S2R/board"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                <span>Proyecto en Jira</span>
              </a>
              <a
                href="/downloads/ritmonet-modificaciones.pdf"
                download
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Reporte de Modificaciones</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ritmonet;
