import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/drivers" element={<Drivers />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
