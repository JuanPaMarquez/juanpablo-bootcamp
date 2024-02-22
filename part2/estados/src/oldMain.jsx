import { useState } from 'react'

const Counter = ({ number }) => {
  console.log('counter render')
  return <h1>{number}</h1>
}

const App = () => {
  const [contador, setContador] = useState(0)

  console.log('render')
  
  const handleClick = () =>{
    setContador(contador + 1)
    // setContador(prevContador => prevContador + 1)
  } 

  const handleClickReset = () =>{
    setContador(0)
  } 

  const isEven = contador % 2 === 0
  const mensajePar = isEven ? 'Es Par' : 'Es Impar'

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={2} />
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Sumar + 1</button>
      <button onClick={handleClickReset}>Reset</button>
      <h2>Magia de React</h2>
    </div>  
  )
}

