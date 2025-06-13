import './App.css';
import Programs from './pages/Programs'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Exercises from "./pages/Exercises"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

function AppContent() {
  const location = useLocation();
  
  console.log('test', location.pathname);
  
  return (
    <div className="App">
      <nav className="navigation">
         <Link to="/home" className={location.pathname === '/home' ? "selected" : "nav-link"}>Home</Link>
        <Link to="/program"  className={location.pathname === '/program' ? "selected" : "nav-link"}>Programs</Link>
        <Link to="/exercises"  className={location.pathname === '/exercises' ? "selected" : "nav-link"}>Exercises</Link>
        <Link to="/about"  className={location.pathname === '/about' ? "selected" : "nav-link"}>AboutMe</Link>
      </nav>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/program" element={<Programs />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;