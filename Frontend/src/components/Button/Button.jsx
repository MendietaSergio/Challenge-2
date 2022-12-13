import React from 'react'

export const Button = ({
    text,
    className,
    disabled
}) => {
    return (
        <div className='btn-card'>
            <button className={`btn-next ${className} `}>
                {text}
            </button>
        </div>
    )
}
