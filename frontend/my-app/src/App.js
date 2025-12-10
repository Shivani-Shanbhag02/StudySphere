 
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import NotesCard from './components/NotesCard';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#3a015c] to-[#190027]">

        {/* ROW layout for sidebar + content */}
        <div className="flex flex-1">
          <Navbar className="fix"/>

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </main>
       
 </div>
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;
