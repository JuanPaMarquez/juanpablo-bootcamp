import { useEffect, useState } from "react";
import { Note } from "./Note";
import {
  create as createNote,
  getAll as getAllNotes,
} from "./services/notes/index";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  //Se ejecuta cuando ya ocurrio el renderizado
  useEffect(() => {
    console.log("useEfect");
    setLoading(true);
    console.log("Ahora");
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
    
    return () => { 
      console.log('removeEffect') //Ejecuta el return los useEffect cuando su estado dentro del [] es modificado 
    }
  }, [newNote]); //Solo se ejecuta una ves con el []

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita que por defecto el form al darle al submit recarge la pagina
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    };

    setError('')
    createNote(noteToAddToState)
      .then((newNote) => {
        // setNotes(notes.concat(newNote)); => otra forma de hacer lo de abajo pero lo que tenga "notes" no es seguro que sea lo ultimo
        setNotes((prevNotes) => prevNotes.concat(newNote)); // en cambio asi si se lo asegura, ya que son consultas asincronas
        // Si mas abajo se cambia "notes" el metodo asincrono lo tomara en cuenta, de la otra forma no.
      })
      .catch((error) => {
        console.error(error);
        setError('La API ha petado')
      });

    // console.log(noteToAddToState);

    // setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };
  console.log("render");

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
      {error ? <span style={{color: 'red'}}>{error}</span> : ''}
    </div>
  );
}
