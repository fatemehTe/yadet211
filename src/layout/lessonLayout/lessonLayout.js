import React, { useState, useEffect } from "react";
import { Container, ProgressBar, Col, Row } from "react-bootstrap";
import CheckCorrect from "../../components/checkCorrect/checkCorrect";
import Lesson from "../../pages/lesson/lesson";
import {
    BrowserRouter as Router, Link, useHistory
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cross from './../../assets/images/cross.png';
import { useSelector } from 'react-redux';
import { selectQuestions, selectInitialQuestionQueue } from '../../features/questions/questions.slice';
import './lessonLayout.css';

export default function LessonLayout(props) {
    //questions should be asked from data base. step is for the lesson and the degree and the progress 

    const { step } = useParams();
    
    let questions = useSelector(selectQuestions);
    let initialQuestionQueue = useSelector(selectInitialQuestionQueue)
    
    const [questionQueue, setQuestionQueue] = useState(initialQuestionQueue);

    const [progress, setProgress] = useState(0);
    const [varient, setVarient] = useState("secondary");
    const [userAnswer, setUserAnswer] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [status, setStatus] = useState("check");
    const [Continue, setContinue] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [optionClicked, setOptionClicked] = useState(0);



    const progressProgress = 100 / questions.length;
    const history = useHistory()

    const handleCheckClick = () => {
        setContinue(true)
        setVarient(() => (
            userAnswer === 1 ? "success" :
                (userAnswer === -1 ? "danger" :
                    ("secondary"))
        ))
        setStatus(() => (
            userAnswer === 1 ? "success" :
                (userAnswer === -1 ? "fail" : null)
        ))
        setProgress(progress + (userAnswer === 1 ? progressProgress : 0));

        if (optionClicked !== correctAnswer) {
            let newArray = [...questionQueue, questionQueue[questionCounter]];
            setQuestionQueue(newArray);
            
        }
    }
    const handleContinueClick = () => {
        setContinue(false)
        setOptionClicked(0)
        setQuestionCounter(() => (
            questionCounter + 1 < questionQueue.length ? questionCounter + 1 :
                (progress === 100 ?
                    history.push('/endLessonStep/' + step)
                    : null)

        ))
        setVarient("secondary")
        setStatus("check")
    }
    const handleCrossClick = () => {
        history.push('/')
    }
    const onClick = (i) => {
        setOptionClicked(i)
        setVarient("primary")
        if (i === correctAnswer) {
            setUserAnswer(1)
        } else {
            setUserAnswer(-1);
        }
    }


    const currentQuestion =
        questions.slice(questionQueue[questionCounter], questionQueue[questionCounter] + 1)
    let currentCorrectAnswer = 0;

    currentQuestion.map((question, key) => {
        currentCorrectAnswer = question.anwser
    })

    useEffect(() => {

        setCorrectAnswer(currentCorrectAnswer);
    });



    return (
        <div className='mainLesson'>
            <Row
                className='mainProgressBar'
            >
                {progress !== 100 ?
                    <Col sm={1} xs={1}
                        className='crossCol'
                    >
                        <img style={{ width: 20 }} src={cross} alt="cross"
                            onClick={handleCrossClick} />
                    </Col> :
                    ''}
                <Col sm={progress != 100 ? 11 : 12} xs={progress != 100 ? 11 : 12}
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <ProgressBar now={progress}
                        className={progress !== 100 ? 'progressBar' : 'progressBarNoCross'}
                    /></Col>
            </Row>
            {
                currentQuestion.map((question, key) => {
                    return (
                        <Container className='mainQuestion' key={key}>
                            <Lesson onClick={(i) => onClick(i)}
                                question={question.text}
                                options={question.options}
                                correct={currentCorrectAnswer}
                                status={status}
                                optionClicked={optionClicked}
                                Continue={Continue}
                            />
                        </Container>
                    )
                })
            }
            <CheckCorrect className='mainCheckCorrect'
                onClick={handleCheckClick}
                onContinueClick={handleContinueClick}
                varient={varient}
                status={status}
                Continue={Continue}
                optionClicked={optionClicked}
            />
        </div>
    )
}
