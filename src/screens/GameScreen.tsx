import { useEffect, useRef, useState } from "react";
import Timer from "../component/Timer";
import { Color, colorSet } from "../data/color-set";
import { genRandomNum } from "../helper/random";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { getTimeString } from "../helper/toString";
import { saveRecord } from "../helper/data";

const GameScreen = () => {
  const [question, setQuestion] = useState<Color| null>(null)
  const [background, setBackground] = useState<string>('')
  const score = useRef(0)
  const navigate = useNavigate()
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [finishedTime, setFinishedTime] = useState<number>(0)

  const initializeQuestions = () => {
    getBackground()
    getQuestion()
  }

  useEffect(() => {
    initializeQuestions()
  }, [])

  useEffect(() => {
    if(isFinished) 
      saveRecord({date: new Date(), timeUsed: finishedTime})
  }, [finishedTime])

  const getQuestion = () => {
    const num = genRandomNum(colorSet.length);
    setQuestion(colorSet[num])
  }

  const getBackground = () => {
    const num = genRandomNum(colorSet.length)
    setBackground(colorSet[num].code)
  }

  const checking = (value: boolean) => {
    //value == 0, user input no, value == 1, user input yes
    if(background === question?.code && value)
      score.current += 1
    else if(background !== question?.code && !value)
      score.current += 1

    if(score.current == 10) {
      setIsFinished(true)
      return
    }

    initializeQuestions()
  }

  return (
    <div className="container">
      <div className="question" hidden={isFinished}>
        <Timer isActive={!isFinished} onFinished={(time: number) => setFinishedTime(time)} />
        <div style={{backgroundColor: background, width: '10vw', height: '10vw', margin: '0 auto'}}></div>
        <h1>{question?.name}?</h1>
        <div className="card">
          <button onClick={() => checking(true)}>Yes</button>
          <button onClick={() => checking(false)}>No</button>  
        </div>
      </div>
      <div className="result" hidden={!isFinished}>
        {finishedTime === 0 ? <h1>Getting result...</h1> :
        <h2>You Finished in {getTimeString(finishedTime)}</h2>}
        <button onClick={() => navigate('/')}>Back To Home</button>
      </div>
    </div>
  )
}

export default GameScreen;