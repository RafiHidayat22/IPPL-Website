import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/AuthForm/AuthForm';
import Jelajah from './components/JelajahWarisanBudaya/Jelajah';
import Edukasi from './components/EdukasiWarisanBudaya/Edukasi';
import Katalog from './components/KatalogWarisanBudaya/Katalog';
import QuizChallenge from './components/InteraktifBudaya/QuizChallenge';
import Quiz from './components/InteraktifBudaya/QuizChallenge/Quiz';
import Challenge from './components/InteraktifBudaya/QuizChallenge/Challenge'
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
          <Route path="/quizchallenge" element={<QuizChallenge />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
