import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => { 
  console.log({clicks})
  return <p>{clicks.join(", ")}</p>
}

// const INITIAL_COUNTER_STATE = {
//   left: 0,
//   right: 0,
//   mensaje: 'Mensajap'
// }

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)

  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    // const newCountersState = {
    //   ...counters, // Trae las propiedades del objeto faltantes
    //   left: counters.left + 1
    // }
    // setCounters(newCountersState)
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  const handleClickRight = () => {
    // setCounters({
    //   ...counters,
    //   right: counters.right + 1
    // })
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  const handleReset = () => {
    // setCounters(INITIAL_COUNTER_STATE)
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')

  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>
        <button onClick={handleReset}>reset</button>
      </p>
      <p>Clicks Totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
