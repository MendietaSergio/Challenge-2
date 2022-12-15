import React from 'react'

export const Button = ({
    text,
    className,
    disabled,
    Asked,
    setSelect,
    setCount,
    count,
    handleSelect,
    select,
    reset,
    btn_reset
}) => {
    const changeState = () => {
        handleSelect(select)
        setSelect('')
        Asked()
        setCount(count + 1)
    }
    if (btn_reset) {
        return (

            <div className='btn-card' onClick={() => reset()}>
                <button className={`btn-next ${className} `} type="button">
                    {text}
                </button>
            </div>
        )
    }
    return (
        <div className='btn-card' onClick={() => disabled ? null : changeState()}>
            <button className={`btn-next ${className} `} type="button">
                {text}
            </button>
        </div>
    )
}
