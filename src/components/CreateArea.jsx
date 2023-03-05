import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [Visibility,setVisibility]=useState(false)
  function handleClick(){
 setVisibility(true)
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{display: Visibility ? "inline":"none"
          }}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {Visibility ? "3":"1"}
          onClick={handleClick}
        />
        <Zoom in={Visibility ? true:false} >

        <Fab color="primary" aria-label="add" onClick={submitNote} style={{display:Visibility ? "inline": "none"}}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
