import quiz_list from '../../data/quiz_questions.json';
import Modal from '../search/Modal';
import { useState } from 'react';

const Quiz = () => {
    const [used, setUsed] = useState([]);
    const [score, setScore] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [quiz, setQuiz] = useState({
        "question": "Start the quiz",
        "answer": "Begin",
        "options": ["Begin"],
        "description": ""
    });
    const [response, setResponse] = useState("");

    const getNewQuiz = () => {
        const randomItem = Math.floor(Math.random() * quiz_list.length);
        if (used.includes(randomItem)) {
            // If it has, find a new random item that hasn't been used
            return getNewQuiz();
        }
        setUsed((prevUsed) => [...prevUsed, randomItem]);
        setQuiz(quiz_list[randomItem])
    }

    const handleAnswer = () => {
        const selectedAnswer = event.target.innerText;
        if (selectedAnswer === "Begin") {
            getNewQuiz();
            return;
        } else if (selectedAnswer === quiz['answer']) {
            setScore((prevScore) => [...prevScore, true]);
            setResponse(<h2 className='text-success'>Correct!</h2>)
        } else {
            setScore((prevScore) => [...prevScore, false]);
            setResponse(<h2 className='text-danger'>Incorrect! The correct answer is {quiz['answer']}</h2>);
        }
        setIsOpen(true);
    }

    const nextQuestion = () => {
        setIsOpen(false);
        if (used.length >= 10) {
            setResponse("");
            setIsOpen(true);
            return;
        }
        getNewQuiz();
    }

    // getNewQuiz();

    let options = [quiz["answer"]];
    for (let i = 0; i < 3; i++) {
        if (quiz['answer'] === "Begin") {
            break; // No more options available
        } else {
            const randomNumber = Math.floor(Math.random() * quiz['options'].length);
            const randomOption = quiz["options"][randomNumber];
            if (options.includes(randomOption)){
                i--;
                continue;
            } else {
                options.push(randomOption);
            }
        }
    }
    // options.push(quiz["answer"]);
    options = options.sort(() => Math.random() - 0.5);

    const questionsLeft = () => {
        let remaining = []
        for (let i = used.length; i < 10; i++) {
            remaining.push(<span>⏺️</span>);
        }
        return remaining;
    }
    return (
        <>
            {isOpen && <Modal>
                    {response}
                    <h3>{score.map((score, index) => {
                        if (score) {
                            return <span key={index} className='text-success'>✅</span>;
                        } else {
                            return <span key={index} className='text-danger'>❌</span>;
                        }
                    })}{questionsLeft()}</h3>
                    {used.length >= 10 
                    ? <>
                        <h3>Quiz completed!</h3>
                        <p>Your score is {score.filter((s) => s).length} out of 10.</p>
                        <button className='btn btn-secondary text-dark' onClick={() => {
                            setUsed([]);
                            setScore([]);
                            setResponse("");
                            setIsOpen(false);
                            getNewQuiz();
                        }}>Play again?</button>
                    </>
                    : <>
                        <p>{quiz["description"]}</p> 
                        <button onClick={nextQuestion} className='btn btn-primary'>Next</button>
                    </>}
                    
            </Modal>}
            <h1 className='text-center text-primary'>Quiz</h1>
            <div className="card p-3 w-75 mx-auto my-3">
                <h2 className='p-2'>{quiz['question']}</h2>
                <div className='d-flex flex-wrap gap-2 justify-content-center'>
                    {options.map((option, index) => (
                        <button key={index} onClick={handleAnswer} className='btn btn-primary quiz-options'>{option}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Quiz;