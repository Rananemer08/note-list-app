// NoteList.js

import React, { useState } from 'react';
import Note from './Note';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = ({ notes, setNotes, onDelete }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImportant, setNewImportant] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: newTitle,
      description: newDescription,
      important: newImportant,
    };
    setNotes([...notes, newNote]);
    setNewTitle('');
    setNewDescription('');
    setNewImportant(false);
  };

  const onMarkImportant = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note
      )
    );
  };

  const handleUpdateNote = (
    id,
    updatedTitle,
    updatedDescription,
    updatedImportant
  ) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            title: updatedTitle,
            description: updatedDescription,
            important: updatedImportant,
          }
        : note
    );
    setNotes(updatedNotes);
    setEditingNoteId(null);
    setNewTitle('');
    setNewDescription('');
    setNewImportant(false);
  };

  const handleDeleteNote = (id) => {
    // Display confirmation popup
    const deleteConfirmed = window.confirm('Are you sure you want to delete this note?');
    if (deleteConfirmed) {
      onDelete(id);
    }
  };

  return (
    <div className="container ">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Note Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Note Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="importantCheck"
              checked={newImportant}
              onChange={(e) => setNewImportant(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="importantCheck">
              Mark as Important
            </label>
          </div>
        </div>
        <div className="col">
          {editingNoteId ? (
            <button
              className="btn btn-success"
              onClick={() =>
                handleUpdateNote(
                  editingNoteId,
                  newTitle,
                  newDescription,
                  newImportant
                )
              }
            >
              Save
            </button>
          ) : (
           
  <button style={{ marginBottom: '60px ',width:'100px', justifyContent:'center', marginRight:'590px !important'}} className="btn btn-primary mt-4" onClick={handleAddNote}>
    Add Note
  </button>

          )}
        </div>
      </div>
      <div className="row">
        {notes.map((note) => (
          <div key={note.id} className="col-md-4 mb-3">
            <Note
              note={note}
              onMarkImportant={onMarkImportant}
              onDelete={() => handleDeleteNote(note.id)} // Pass the function reference instead of the ID directly
              onEdit={() => {
                setNewTitle(note.title);
                setNewDescription(note.description);
                setNewImportant(note.important);
                setEditingNoteId(note.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
NoteList.js

// import React from 'react';
// import Note from './Note';

// const NoteList = ({ notes, onDelete, onMarkImportant }) => {
//   return (
//     <div>
//       {notes.map((note) => (
//         <div key={note.id}>
//           <Note
//             note={note}
//             onDelete={() => onDelete(note.id)}
//             onMarkImportant={() => onMarkImportant(note.id)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoteList;
