import { useState } from "react";

const App = () => {
  let [count,setCount] = useState(0);

  const addOne = () => {setCount(count + 1)}
  const subOne = () => {setCount(count - 1)}
  const toZero = () => {setCount(0)}

  return(
    <>
    <h1>The Count is: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subOne}>-1</button>
    <button onClick={toZero}>reset</button>
    </>
  )
}

export default App;