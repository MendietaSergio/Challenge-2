import React, { useState } from 'react'
import { Button } from '../Button/Button'
import './Questions.css'
export const Questions = ({
    viewQuestions,
    handleSelect,
    disabled,
    Asked,
    cantAsked,
    count,
    setCount,
    setDisabled
}) => {
    const { question, options } = viewQuestions;
    const [select, setSelect] = useState('')

    const selectOption = (e) => {
        setSelect(e)
        setDisabled(false)

    }
    return (
        <div className='container-questions'>
            <div>
                <span className='number-questions'>{count}/{cantAsked}</span>
            </div>
            <div className='container-question'>
                <span className='questions'>
                    {question}
                </span>
            </div>
            <div className='options-select'>
                <div className={`option ${select === "a" ? ('option-select') : null}`} id='a' onClick={(e) => selectOption("a")}>
                    <div className='number-option'>1</div>
                    <span>{options.a}</span>
                </div>
                <div className={`option ${select === "b" ? ('option-select') : null}`} id='b' onClick={(e) => selectOption("b")}>
                    <div className='number-option'>2</div>
                    <span>{options.b}</span>
                </div>
                <div className={`option ${select === "c" ? ('option-select') : null}`} id='c' onClick={(e) => selectOption("c")}>
                    <div className='number-option'>3</div>
                    <span>{options.c}</span>
                </div>
            </div>
            <Button
                text="SIGUIENTE"
                className={disabled ? 'disabled' : ''}
                Asked={Asked}
                disabled={disabled}
                setSelect={setSelect}
                setCount={setCount}
                count={count} 
                handleSelect={handleSelect}
                select={select}/>
        </div>
    )
}
