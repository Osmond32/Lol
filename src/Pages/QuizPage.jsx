import { useEffect, useState } from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import QuizData from "../Services/QuizData";
import QuestionCard from "../Components/QuestionCard";

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        const randomQuestions = QuizData.getRandomQuestions(10);
        setQuestions(randomQuestions);
    }, [])

    const handleSelectAnswer = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
        }
    }

    const handleConfirmAnswer = () => {
        setIsAnswered(true);
        
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer("");
            setIsAnswered(false);
        } else {
            setQuizFinished(true);
        }
    }

    const handleRestartQuiz = () => {
        const randomQuestions = QuizData.getRandomQuestions(10);
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswer("");
        setIsAnswered(false);
        setScore(0);
        setQuizFinished(false);
    }

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return "Perfetto! Sei un esperto del lore!";
        if (percentage >= 80) return "Ottimo! Conosci molto bene il lore!";
        if (percentage >= 60) return "Buono! Hai una buona conoscenza del lore!";
        if (percentage >= 40) return "Discreto! Puoi migliorare!";
        return "Devi studiare di più il lore!";
    }

    if (questions.length === 0) {
        return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <p>Caricamento quiz...</p>
        </Container>
    }

    if (quizFinished) {
        return <>
            <Container fluid className="d-flex flex-column align-items-center pt-5 gap-4">
                <h1>Quiz Completato!</h1>
                <div className="col-6 text-center">
                    <h2>Il tuo punteggio: {score}/{questions.length}</h2>
                    <h3>{getScoreMessage()}</h3>
                    <ProgressBar 
                        now={(score / questions.length) * 100} 
                        label={(score / questions.length) * 100 + "%"}
                        variant={score >= 8 ? "success" : score >= 6 ? "warning" : "danger"}
                        className="mt-4 mb-4"
                        style={{ height: "30px" }}
                    />
                    <Button variant="primary" size="lg" onClick={handleRestartQuiz}>
                        Riprova il Quiz
                    </Button>
                </div>
            </Container>
        </>;
    }

    return <>
        <Container fluid className="d-flex flex-column align-items-center pt-3 gap-3">
            <h1>Quiz sul Lore di League of Legends</h1>
            <p>Domanda {currentQuestionIndex + 1} di {questions.length}</p>
            
            <ProgressBar 
                now={((currentQuestionIndex + 1) / questions.length) * 100} 
                className="col-8"
                style={{ height: "20px" }}
            />

            <QuestionCard 
                question={questions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                isAnswered={isAnswered}
            />

            <div className="d-flex gap-3">
                {!isAnswered && (
                    <Button 
                        variant="success" 
                        onClick={handleConfirmAnswer}
                        disabled={!selectedAnswer}
                    >
                        Conferma Risposta
                    </Button>
                )}
                
                {isAnswered && (
                    <Button variant="primary" onClick={handleNextQuestion}>
                        {currentQuestionIndex < questions.length - 1 ? "Prossima Domanda" : "Vedi Risultato"}
                    </Button>
                )}
            </div>

            <div className="mt-3">
                <p>Punteggio attuale: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}</p>
            </div>
        </Container>
    </>;
}

export default QuizPage;