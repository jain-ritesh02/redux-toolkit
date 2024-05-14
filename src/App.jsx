import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/Reducers/counterSlice'

const App = () => {
 const { value } =  useSelector((state) => state.counter)
 const dispatch = useDispatch()

 const incrementby1Handler = () => {
  dispatch(increment(value+1))
 }
 const decrementby1Handler = () => {
  dispatch(increment(value-1))
 }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementby1Handler} style={{padding: "10px", backgroundColor: "green", color: "white", border: "none",}}>Increment By 1</button> <br /><br />
      <button onClick={decrementby1Handler} style={{padding: "10px", backgroundColor: "green", color: "white", border: "none"}}>Decrement By 1</button>
    </div>
  )
}

export default App
