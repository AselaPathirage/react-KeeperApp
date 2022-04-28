import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function expanded() {
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function handleRequest(event) {
        event.preventDefault();
        props.add(note);
        setNote({
            title: "",
            content: ""
        });

    }
    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                    <input
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange}
                    />
                }
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content}
                    onChange={handleChange}
                    onClick={expanded}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleRequest} aria-label="add">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
