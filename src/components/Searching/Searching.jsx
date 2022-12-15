import React from 'react'
import searchingImg from "../../assets/Searching.svg";
import './Searching.css'
export const Searching = () => {
    return (
        <div className='container_img'>
            <img src={searchingImg} alt="" />
            <div className='container_title_result'>
                <span>Buscando preguntas  </span>
            </div>
        </div>
    )
}
