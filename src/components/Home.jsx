import { UserIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Lado izquierdo */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12 md:border-r border-gray-200 dark:border-gray-700">
            <div className="w-full h-full flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-none">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-700 dark:text-primary-400">
                  Producto Integrador
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
                  El final del proceso
                </h2>
              </div>
              
              <div className="flex-1 min-h-0 relative">
                <img 
                  src="/img/udgplus.jpg" 
                  alt="udgplus Logo"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-none">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-200">
                  Licenciatura en desarrollo de sistemas web
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12 bg-gray-50 dark:bg-gray-800/50">
            <div className="w-full h-full flex flex-col gap-4 sm:gap-6 lg:gap-8">
              {/* Sección superior - Equipo */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-6">
                  Equipo 3
                </h2>
                
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <UserIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 dark:text-gray-200">
                      HIRAM AGUSTIN ACEVEDO LOPEZ
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <UserIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 dark:text-gray-200">
                      LUIS FERNANDO MORENO LOPEZ
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-700 dark:text-primary-400 mb-2 sm:mb-4">
                    Asesora
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 dark:text-gray-200">
                    ELIZABETH CRISTINA HERNÁNDEZ HERNÁNDEZ
                  </p>
                </div>
              </div>

              {/* Sección inferior - Proyectos */}
              <div className="mt-8">
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Proyectos Desarrollados
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Esta web tiene como propósito mostrar el trabajo realizado durante el semestre 
                    de Desarrollo de Sistemas Web del Equipo 3 para la clase de Proyectos 2. 
                    Durante este periodo, hemos desarrollado dos proyectos principales que 
                    demuestran nuestras capacidades y aprendizaje:
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-gray-700/50 border border-blue-100 dark:border-gray-600 flex flex-col min-h-[180px]">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">
                        RitmoNet
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Plataforma web para el aprendizaje de música y teoría musical.
                      </p>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://ritmonetdeploy.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors text-center"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-purple-50 dark:bg-gray-700/50 border border-purple-100 dark:border-gray-600 flex flex-col min-h-[180px]">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-purple-900 dark:text-purple-400 mb-2">
                        Natare
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Sistema de gestión para escuelas de natación.
                      </p>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://luism-code-star.github.io/natare/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors w-full text-center"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
