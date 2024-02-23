import "./App.css";
import { useState } from "react";
import { Note } from "./Note";

// <div>
//   {notes.map((note) => {
//     return <p><strong>{note.id}</strong></p>
//   })}
// </div>

export default function App(props) {
  // if (typeof notes === 'undefined' || notes.length === 0) {
  //   return 'no hay notas'
  // }
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // evita que por defecto el form al darle al submit recarge la pagina
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    console.log(noteToAddToState)

    setNotes([...notes, noteToAddToState])
    setNewNote('')

    // {
    //   id: 2,
    //   content: 'Browser can execute only JavaScript',
    //   date: '2019-05-30T18:39:34.091Z',
    //   important: false
    // }
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll? 'Show Only Important' : 'Show All'}</button>
      <ol>
        {notes
        .filter(note => {
          if (showAll === true) return true
          return note.important === true
        })
        .map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
  );
}
