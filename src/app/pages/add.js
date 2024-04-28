// pages/add.js

import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNote = ({ onAddNote }) => {
 const [newTitle, setNewTitle] = useState('');
 const [newDescription, setNewDescription] = useState('');
 const [newImportant, setNewImportant] = useState(false);

 const handleAddNote = () => {
    const newNote = {
      id: Date.now(), // Simplified ID generation
      title: newTitle,
      description: newDescription,
      important: newImportant,
    };
    onAddNote(newNote);
    setNewTitle('');
    setNewDescription('');
    setNewImportant(false);
 };

 return (
    <div className="container">
      <h2>Add Note</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Note Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Note Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={newImportant}
          onChange={(e) => setNewImportant(e.target.checked)}
        />
        <label className="form-check-label">
          Mark as Important
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleAddNote}>
        Add Note
      </button>
    </div>
 );
};

export default AddNote;
