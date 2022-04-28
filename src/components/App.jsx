import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
    const [notess, setNotes] = useState(notes);
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea add={addNote} />
            {notess.map((note,index) => {
                return <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    delete={deleteNote}
                />
            })}
            <Footer />
        </div>
    );
}



export default App;