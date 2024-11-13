import React from 'react'
import { useNavigate } from "react-router-dom"
function AlbemItem({ image, name, desc, id }) {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate(`/albem/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-slate-800'>
                <img className='rounded' src={image} alt="" />
                <p className='font-bold mt-3 mb-1'>{name}</p>
                <p className='text-slate-200 text-sm'>{desc}</p>
            </div>
        </>
    )
}

export default AlbemItem