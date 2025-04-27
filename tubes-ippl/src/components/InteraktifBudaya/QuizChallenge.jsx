import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './QuizChallenge.css';
import { Link } from 'react-router-dom';

const QuizChallenge = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="content-wrap">
        <div className="quizchallenge-container">
          <h1 className="quizchallenge-title">INTERAKTIF BUDAYA</h1>

          <div className="quizchallenge-box">
            <div className="quizchallenge-card quiz-side">
              <h3 className="video-title">Quiz</h3>
              <Link to="../../quiz">
                <button className="quizchallenge-button">Mulai Quiz</button>
              </Link>
            </div>

            <div className="quizchallenge-card challenge-side">
              <h3 className="video-title">Challenge</h3>
              <Link to="../../challenge">
              <button className="quizchallenge-button">Mulai Challenge</button>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizChallenge;
