import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/ProfileComponent';
import profileImg from './assets/profileImg.jpg';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Router>
      <nav className="flex justify-between align-items bg-black p-8">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
          KingBurger
          </Link>
        </div>
        <ul className="flex space-x-6 list-none">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300 text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300 text-white">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-300 text-white">Contact</Link>
          </li>
          <li>
            <Link to="/profile">
            <img src={profileImg} alt="my profile" 
           className="w-10 h-10 rounded-full object-cover border border-[#f3961c]"/>
            </Link>     
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
