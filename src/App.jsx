import React, { useContext } from 'react'
import Sidebar from './component/Sidebar'
import Player from './component/player'
import Display from './component/Display'
import { PlayerContext } from './context/playerContext'

function App() {
  const { audioRef, track } = useContext(PlayerContext)
  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'>

        </audio>
      </div>
    </>
  )
}

export default App