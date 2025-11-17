const quizQuestions = [
    {
        id: 1,
        question: "Chi è conosciuto come 'La Mano di Noxus'?",
        options: ["Darius", "Draven", "Swain", "Katarina"],
        correctAnswer: "Darius",
        difficulty: "facile"
    },
    {
        id: 2,
        question: "Quale champion è la Regina delle Isole Ombra?",
        options: ["Kalista", "Elise", "Morgana", "Non c'è una regina"],
        correctAnswer: "Non c'è una regina",
        difficulty: "media"
    },
    {
        id: 3,
        question: "Da quale regione proviene Ahri?",
        options: ["Demacia", "Noxus", "Ionia", "Targon"],
        correctAnswer: "Ionia",
        difficulty: "facile"
    },
    {
        id: 4,
        question: "Chi ha creato Blitzcrank?",
        options: ["Heimerdinger", "Viktor", "Jayce", "Orianna"],
        correctAnswer: "Viktor",
        difficulty: "media"
    },
    {
        id: 5,
        question: "Quale champion è un Aspetto di Targon?",
        options: ["Taric", "Leona", "Diana", "Tutti e tre"],
        correctAnswer: "Tutti e tre",
        difficulty: "difficile"
    },
    {
        id: 6,
        question: "Chi è il padre di Lux?",
        options: ["Garen", "Jarvan IV", "Non rivelato", "Sylas"],
        correctAnswer: "Non rivelato",
        difficulty: "difficile"
    },
    {
        id: 7,
        question: "Quale champion ha distrutto Zaun con un esperimento?",
        options: ["Viktor", "Singed", "Heimerdinger", "Jinx"],
        correctAnswer: "Singed",
        difficulty: "media"
    },
    {
        id: 8,
        question: "Chi è Yasuo per Yone?",
        options: ["Fratello minore", "Fratello maggiore", "Cugino", "Amico"],
        correctAnswer: "Fratello minore",
        difficulty: "facile"
    },
    {
        id: 9,
        question: "Quale arma usa Aphelios?",
        options: ["5 armi diverse", "Una spada", "Un arco", "Magia lunare"],
        correctAnswer: "5 armi diverse",
        difficulty: "media"
    },
    {
        id: 10,
        question: "Chi ha ucciso il drago Aatrox originale?",
        options: ["Pantheon", "Nessuno, Aatrox è ancora vivo", "Zoe", "Gli Aspetti"],
        correctAnswer: "Gli Aspetti",
        difficulty: "difficile"
    },
    {
        id: 11,
        question: "Qual è il vero nome di Twisted Fate?",
        options: ["Tobias Felix", "Malcolm Graves", "Gangplank", "Non rivelato"],
        correctAnswer: "Tobias Felix",
        difficulty: "difficile"
    },
    {
        id: 12,
        question: "Quale champion è conosciuto come 'L'Imperatore del Deserto'?",
        options: ["Nasus", "Renekton", "Azir", "Xerath"],
        correctAnswer: "Azir",
        difficulty: "facile"
    },
    {
        id: 13,
        question: "Chi è la sorella di Vi?",
        options: ["Caitlyn", "Jinx", "Seraphine", "Orianna"],
        correctAnswer: "Jinx",
        difficulty: "media"
    },
    {
        id: 14,
        question: "Quale champion cerca di scalare il Monte Targon?",
        options: ["Tutti possono scalarlo", "Solo gli Aspetti", "Chiunque sia abbastanza coraggioso", "Solo i mortali scelti"],
        correctAnswer: "Chiunque sia abbastanza coraggioso",
        difficulty: "media"
    },
    {
        id: 15,
        question: "Chi ha tradito Azir?",
        options: ["Nasus", "Renekton", "Xerath", "Sivir"],
        correctAnswer: "Xerath",
        difficulty: "facile"
    }
];

function getAllQuestions() {
    return quizQuestions;
}

function getRandomQuestions(count) {
    const shuffled = quizQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getQuestionsByDifficulty(difficulty) {
    return quizQuestions.filter((question) => question.difficulty === difficulty);
}

export default {
    getAllQuestions,
    getRandomQuestions,
    getQuestionsByDifficulty
}