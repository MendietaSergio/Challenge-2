import React from 'react'
import { Button } from '../Button/Button'
import './Questions.css'
export const Questions = () => {
    return (
        <div className='container-questions'>
            <div>
                <span className='number-questions'>1/5</span>
            </div>
            <div >
                <span className='questions'>
                    ¿Que hace un programador?
                </span>
            </div>
            <div className='options-select'>
                <div className='option'>
                    <div className='number-option'>1</div>
                    <span>NADA</span>
                </div>
                <div className='option'>
                    <div className='number-option'>2</div>
                    <span>PROGRAMA</span>
                </div>
                <div className='option'>
                    <div className='number-option'>3</div>
                    <span>JUEGA</span>
                </div>
            </div>
            <Button text="SIGUIENTE"/>
        </div>
    )
}
