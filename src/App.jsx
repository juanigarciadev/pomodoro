import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const alarmClock = new Audio('https://res.cloudinary.com/diruiumfk/video/upload/v1708830349/alarm-sound_pawdvh.mp3')

  const [alarm, setAlarm] = useState(false)
  
  useEffect(() => {
    if (alarm) {
      alarmClock.play();
    } else {
      alarmClock.pause();
      alarmClock.currentTime = 0;
    }
  },[alarm]);

  return (
    <div className='flex flex-col gap-4 w-screen h-screen items-center justify-center bg-neutral-200 select-none'>
      <div className='inline-flex items-center gap-4'>
        <section className='flex flex-col items-center'>
          <h3 className='text-9xl font-bold'>25</h3>
          <span className='text-sm'>minutes</span>
        </section>
        <section>
          <span className='text-3xl'>:</span>
        </section>
        <section className='flex flex-col items-center'>
          <h3 className='text-9xl font-bold'>00</h3>
          <span className='text-sm'>seconds</span>
        </section>
      </div>
      <div className='flex gap-2'>
      <button className='border border-neutral-500 p-2 rounded-md font-medium hover:bg-black hover:border-black hover:text-white duration-200' onClick={()=> setAlarm(true)}>Play sound</button>
      <button className='border border-neutral-500 p-2 rounded-md font-medium hover:bg-black hover:border-black hover:text-white duration-200' onClick={()=> setAlarm(false)}>Stop sound</button>
      </div>
    </div>
  )
}

export default App
