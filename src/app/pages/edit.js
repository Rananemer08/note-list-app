// pages/edit.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditNote = ({ note, onUpdateNote }) => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [important, setImportant] = useState(false);
 const router = useRouter();

 useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setImportant(note.important);
    }
 }, [note]);

 const handleUpdateNote = () => {
    const updatedNote = {
      ...note,
      title,
      description,
      important,
    };
    onUpdateNote(updatedNote);
    router.push('/'); // Redirect back to the list page after updating
 };

 return (
    <div className="container">
      <h2>Edit Note</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Note Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        <label className="form-check-label">
          Mark as Important
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleUpdateNote}>
        Update Note
      </button>
    </div>
 );
};

export default EditNote;
