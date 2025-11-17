import { Card, Button } from "react-bootstrap";

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer, isAnswered }) => {
    
    const getButtonVariant = (option) => {
        if (!isAnswered) {
            return selectedAnswer === option ? "primary" : "outline-primary";
        }
        
        if (option === question.correctAnswer) {
            return "success";
        }
        
        if (selectedAnswer === option && option !== question.correctAnswer) {
            return "danger";
        }
        
        return "outline-secondary";
    }

    return <>
        <Card className="col-8">
            <Card.Body>
                <Card.Title>
                    <h3>{question.question}</h3>
                </Card.Title>
                <div className="d-flex flex-column gap-2 mt-4">
                    {question.options.map((option, index) => {
                        return <Button
                            key={index}
                            variant={getButtonVariant(option)}
                            onClick={() => onSelectAnswer(option)}
                            disabled={isAnswered}
                            className="text-start"
                        >
                            {option}
                        </Button>
                    })}
                </div>
            </Card.Body>
        </Card>
    </>;
}

export default QuestionCard;