import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import DisplayHome from './DisplayHome'
import DisplauAlbem from './DisplauAlbem'
import { albumsData } from '../assets/assets'
function Display() {
    const displayRef = useRef()
    const location = useLocation()
    const isAblum = location.pathname.includes("album")
    // console.log(isAblum)
    const albemId = isAblum ? location.pathname.slice(-1) : " "
    // console.log(albemId)

    const bgcolor = albumsData[Number(albemId)].bgColor;
    // console.log(bgcolor)
    useEffect(() => {
        if (isAblum) {
            displayRef.current.style.background = `linear-gradient(${bgcolor};#121212)`
            // displayRef.current.style.background = `linear-gradient(${bgcolor};#121212)`
        }
        else {
            displayRef.current.style.background = `#121212`
            // displayRef.current.style.background = '#121212'
        }
    })
    return (
        <>
            <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
                <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/albem/:id' element={<DisplauAlbem />} />

                </Routes>
            </div>
        </>
    )
}

export default Display