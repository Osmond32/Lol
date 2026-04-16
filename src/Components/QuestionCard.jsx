import { Card } from "react-bootstrap";

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer, isAnswered }) => {
    
    const getButtonStyle = (option) => {
        const baseStyle = {
            background: "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 100%)",
            border: "2px solid #d4af37",
            color: "#f5f5f5",
            padding: "15px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "500",
            fontSize: "15px",
            textAlign: "left",
            fontFamily: "Lora, serif",
            width: "100%"
        };

        if (!isAnswered) {
            if (selectedAnswer === option) {
                return {
                    ...baseStyle,
                    background: "#d4af37",
                    color: "#0a0e27",
                    fontWeight: "700",
                    transform: "translateX(5px)"
                };
            }
            return baseStyle;
        }
        
        if (option === question.correctAnswer) {
            return {
                ...baseStyle,
                background: "#28a745",
                borderColor: "#20c997",
                color: "#fff",
                fontWeight: "700"
            };
        }
        
        if (selectedAnswer === option && option !== question.correctAnswer) {
            return {
                ...baseStyle,
                background: "#dc3545",
                borderColor: "#c82333",
                color: "#fff",
                fontWeight: "700"
            };
        }
        
        return {
            ...baseStyle,
            opacity: 0.6
        };
    }

    return <>
        <div className="question-card">
            <div className="question-text">
                {question.question}
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px"}}>
                {question.options.map((option, index) => {
                    return <button
                        key={index}
                        onClick={() => onSelectAnswer(option)}
                        disabled={isAnswered}
                        style={getButtonStyle(option)}
                    >
                        {option}
                    </button>
                })}
            </div>
        </div>
    </>;
}

export default QuestionCard;