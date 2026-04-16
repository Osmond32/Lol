import { useEffect, useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import QuizData from "../Services/QuizData";
import QuestionCard from "../Components/QuestionCard";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Initialize quiz on component mount
  useEffect(() => {
    const randomQuestions = QuizData.getRandomQuestions(10);
    setQuestions(randomQuestions);
  }, []);

  // Handle answer selection
  const handleSelectAnswer = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  // Handle answer confirmation
  const handleConfirmAnswer = () => {
    setIsAnswered(true);

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Handle next question or finish quiz
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  // Handle quiz restart
  const handleRestartQuiz = () => {
    const randomQuestions = QuizData.getRandomQuestions(10);
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Generate score message based on performance
  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      return "Perfetto! Sei un esperto del lore!";
    }
    if (percentage >= 80) {
      return "Ottimo! Conosci molto bene il lore!";
    }
    if (percentage >= 60) {
      return "Buono! Hai una buona conoscenza del lore!";
    }
    if (percentage >= 40) {
      return "Discreto! Puoi migliorare!";
    }
    return "Devi studiare di più il lore!";
  };

  // Loading state - questions not yet loaded
  if (questions.length === 0) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0e27 0%, #16213e 100%)"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              color: "#d4af37",
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            Caricamento Quiz...
          </div>
        </div>
      </Container>
    );
  }

  // Finished state - show results
  if (quizFinished) {
    return (
      <Container
        fluid
        className="d-flex flex-column align-items-center pt-5 pb-5"
        style={{
          background: "linear-gradient(135deg, #0a0e27 0%, #16213e 100%)",
          minHeight: "100vh"
        }}
      >
        <h1 className="section-title">Quiz Completato!</h1>
        <div
          className="fantasy-card"
          style={{
            textAlign: "center",
            maxWidth: "600px"
          }}
        >
          <h2
            style={{
              color: "#d4af37",
              fontSize: "48px",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "2px",
              marginBottom: "20px"
            }}
          >
            {score}/{questions.length}
          </h2>
          <h3
            style={{
              color: "#f5f5f5",
              fontSize: "24px",
              marginBottom: "30px",
              lineHeight: "1.6"
            }}
          >
            {getScoreMessage()}
          </h3>
          <ProgressBar
            now={(score / questions.length) * 100}
            label={Math.round((score / questions.length) * 100) + "%"}
            style={{
              height: "25px",
              background: "linear-gradient(90deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1))",
              border: "2px solid #d4af37",
              marginBottom: "30px"
            }}
          />
          <button
            onClick={handleRestartQuiz}
            className="btn-fantasy"
            style={{ marginTop: "20px" }}
          >
            Riprova il Quiz
          </button>
        </div>
      </Container>
    );
  }

  // Active quiz state - display question and answers
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center pt-5 pb-5"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #16213e 100%)",
        minHeight: "100vh"
      }}
    >
      <h1 className="section-title">Quiz sul Lore di Runeterra</h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#d4af37",
          fontSize: "18px",
          fontFamily: "'Cinzel', serif",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}
      >
        Domanda {currentQuestionIndex + 1} di {questions.length}
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          marginBottom: "40px"
        }}
      >
        <ProgressBar
          now={((currentQuestionIndex + 1) / questions.length) * 100}
          style={{
            height: "10px",
            background: "linear-gradient(90deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1))",
            border: "1px solid #d4af37"
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          marginBottom: "40px"
        }}
      >
        <QuestionCard
          question={questions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          isAnswered={isAnswered}
        />
      </div>

      <div
        className="d-flex gap-3"
        style={{ marginBottom: "30px" }}
      >
        {!isAnswered && (
          <button
            className="btn-fantasy"
            onClick={handleConfirmAnswer}
            disabled={!selectedAnswer}
            style={{
              opacity: !selectedAnswer ? 0.5 : 1
            }}
          >
            Conferma Risposta
          </button>
        )}

        {isAnswered && (
          <button
            className="btn-fantasy"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < questions.length - 1
              ? "Prossima Domanda"
              : "Vedi Risultato"}
          </button>
        )}
      </div>

      <div
        style={{
          color: "#d4af37",
          fontSize: "16px",
          textAlign: "center",
          fontFamily: "'Cinzel', serif",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}
      >
        Punteggio Attuale: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
      </div>
    </Container>
  );
};

export default QuizPage;