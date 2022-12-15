import React, { useEffect, useState } from "react"
import { Questions } from "./components/Questions/Questions"
import { Results } from "./components/Results/Results"
import { Searching } from "./components/Searching/Searching"
import { data } from "./mock/data"
import { getData } from "./services/getData"

function App() {
  const [questions, setQuestions] = useState(data)
  const [cantAsked, setCantAsked] = useState(3)
  const [viewQuestions, setViewQuestions] = useState({})
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(true)
  const [point, setPoint] = useState(0)
  let positions = 0;


  const Asked = () => {
    positions = Math.floor(Math.random() * questions.length)
    setViewQuestions(questions[positions])
    setDisabled(true)
  }
  useEffect(() => {
    const getQuestions = async () => {
      await getData.get('/list')
        .then((resp) => {
          const { data } = resp;
          setQuestions(data)
        })
        .then(() => {
          Asked()
        })
    }
    getQuestions()

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const handleSelect = (e) => {
    if (e === viewQuestions.correctAnswer) {
      setPoint(point + 1)
    }
  }
  const reset = () => {
    setPoint(0)
    setLoading(true)
    setDisabled(true)
    setCount(1)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <div className="App">
      <div className='body-card'>
        <div className='container-info'>
          {loading ? (
            <Searching />
          ) : (count > 3 ? (
            <Results
              point={point}
              reset={reset}
            />
          ) : (<Questions
            handleSelect={handleSelect}
            viewQuestions={viewQuestions}
            disabled={disabled}
            Asked={Asked}
            cantAsked={cantAsked}
            count={count}
            setCount={setCount}
            setDisabled={setDisabled}
          />)
          )}
        </div>
      </div>
    </div>
  )
}

export default App
