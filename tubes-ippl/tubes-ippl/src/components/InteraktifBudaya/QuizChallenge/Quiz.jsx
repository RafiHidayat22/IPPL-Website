import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Quiz.css';
import { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa salah satu contoh warisan budaya tak benda yang berasal dari Banyumas?",
      options: [
        "A. Tari Kecak",
        "B. Ebeg",
        "C. Wayang Golek",
        "D. Tari Piring"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang dimaksud dengan 'Ebeg' dalam tradisi Banyumas?",
      options: [
        "A. Tarian sakral untuk upacara panen",
        "B. Pertunjukan wayang dengan tokoh boneka",
        "C. Kesenian kuda lumping yang dimainkan dengan iringan gamelan",
        "D. Alat musik khas Banyumas"
      ],
      correctAnswer: 2
    },
    {
      question: "Berikut ini yang termasuk warisan budaya tak benda Banyumas adalah, kecuali...",
      options: [
        "A. Lengger",
        "B. Calung",
        "C. Angklung",
        "D. Kenthongan"
      ],
      correctAnswer: 2
    },
    {
      question: "Tari Lengger biasanya ditampilkan dalam konteks apa di masyarakat Banyumas?",
      options: [
        "A. Festival modern",
        "B. Upacara kerajaan",
        "C. Hiburan rakyat dan perayaan tradisional",
        "D. Pembukaan sekolah"
      ],
      correctAnswer: 2
    },
    {
      question: "Apa fungsi dari kenthongan dalam kehidupan masyarakat tradisional Banyumas?",
      options: [
        "A. Pengiring tari Lengger",
        "B. Alat komunikasi dan penanda bahaya",
        "C. Alat musik pengiring wayang",
        "D. Media hiburan di televisi"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="page-container">
      <Header />
      <main className="content-wrap">
        <div className="quizchallenge-container">
          <h1 className="quizchallenge-title">KUIS BUDAYA BANYUMAS</h1>

          {!showResult ? (
            <div className="quizchallenge-box">
              <div className="quizchallenge-card quiz-side" style={{ width: '100%' }}>
                <h3 className="video-title">Soal {currentQuestion + 1}</h3>
                <p>{questions[currentQuestion].question}</p>
                
                <div className="options-container">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <button 
                  className="quizchallenge-button" 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil'}
                </button>
              </div>
            </div>
          ) : (
            <div className="quizchallenge-box">
              <div className="quizchallenge-card quiz-side" style={{ width: '100%' }}>
                <h3 className="video-title">Hasil Kuis</h3>
                <p>Skor Anda: {score} dari {questions.length}</p>
                <p>Persentase: {Math.round((score / questions.length) * 100)}%</p>
                <button 
                  className="quizchallenge-button" 
                  onClick={restartQuiz}
                >
                  Ulangi Kuis
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;