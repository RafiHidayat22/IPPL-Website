import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/AuthForm/AuthForm';
import Jelajah from './components/JelajahWarisanBudaya/Jelajah'; // pastikan ini path-nya benar
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/jelajah" element={<Jelajah />} /> {/* tambahkan rute ini */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
