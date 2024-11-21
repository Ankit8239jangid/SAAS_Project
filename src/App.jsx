import { useState } from 'react'

import './App.css'
// import Pills from './Mini=Projects/minniy/Pills'

function App() {
  const [input, setInput] = useState('')
  // const counter = () => {
  //   setCount(count + 1)


  return (
    <>
      <Pills input={input} setInput={setInput}>

        <h1 className='text-white'>this is the value frome the parent : {input}</h1>

      </Pills>

    </>
  )

}
export default App
