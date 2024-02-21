const Mensaje = (props) => {
  const col = {
    color: props.color
  }

  return <h1 style={col}>{props.message}</h1>
}

export default Mensaje 
