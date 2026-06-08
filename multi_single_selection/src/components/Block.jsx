import React, { useState } from 'react'

function Block({id,question,answer,isOpen,handleClick}) {
    return (
        <div className='flex flex-col items-center'>
            <button 
                className='bg-amber-950 text-white 
                flex-row flex justify-between items-center px-6 py-4 w-125 cursor-pointer'
                onClick={()=>{
                    handleClick(id);
                }}
            >
                <div className='flex-1 text-left'>
                    {question}
                </div>

                <div className='shrink-0 ml-4'>
                    +
                </div>

            </button>
            {
                isOpen && 
                <div 
                    className='bg-amber-950 text-white w-125 px-6 py-4'
                >
                    {answer}
                </div>
            }
        </div>
    )
}

export default Block