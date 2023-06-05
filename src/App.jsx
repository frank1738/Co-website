import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Menu from './components/Menu';
import { useStateContext } from './components/context/ContextProvider';
import { motion } from 'framer-motion';

function App() {
  const { toolbar, menu } = useStateContext();
  const [width, setWidth] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      <Router>
        <Menu />
        {width ? <MobileMenu /> : <NavBar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
