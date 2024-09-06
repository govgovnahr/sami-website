
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/publications" element={<Publications/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
