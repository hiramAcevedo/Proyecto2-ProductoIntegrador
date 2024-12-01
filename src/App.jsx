import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Actividades from './components/Actividades';
import Ritmonet from './components/proyectos/Ritmonet';
import Natare from './components/proyectos/Natare';

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
            <Route path="/proyectos/ritmonet" element={<Ritmonet />} />
            <Route path="/proyectos/natare" element={<Natare />} />
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
