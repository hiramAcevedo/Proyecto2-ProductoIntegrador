import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Actividades from './components/Actividades';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actividades-realizadas" element={<Actividades />} />
            <Route path="/actividades-realizadas/unidad:id" element={<Actividades />} />
            <Route path="/proyectos" element={<div>Proyectos</div>} />
            <Route path="/proyectos/ritmonet" element={<div>Proyecto Ritmonet</div>} />
            <Route path="/proyectos/ritmonet/codigo" element={<div>Código fuente de Ritmonet</div>} />
            <Route path="/proyectos/natare" element={<div>Proyecto Natare</div>} />
            <Route path="/proyectos/natare/codigo" element={<div>Código fuente de Natare</div>} />
            <Route path="/documentacion" element={<div>Documentación</div>} />
            <Route path="/documentacion/trello" element={<div>Trello</div>} />
            <Route path="/documentacion/jira" element={<div>Jira</div>} />
            <Route path="/documentacion/reporte" element={<div>Reporte de modificaciones</div>} />
            <Route path="/github" element={<div>Github</div>} />
            <Route path="/github/ritmonet" element={<div>Github Ritmonet</div>} />
            <Route path="/github/natare" element={<div>Github Natare</div>} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
