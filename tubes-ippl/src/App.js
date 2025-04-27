import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/AuthForm/AuthForm';
import Jelajah from './components/JelajahWarisanBudaya/Jelajah';
import Edukasi from './components/EdukasiWarisanBudaya/Edukasi';
import Katalog from './components/KatalogWarisanBudaya/Katalog';
import './App.css';
import Forum from './components/Forum/Forum';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/jelajah" element={<Jelajah />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
