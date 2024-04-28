// AddEditNoteForm.js

import React, { useState } from 'react';

const AddEditNoteForm = ({ mode }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'add') {
      console.log('Add Note:', { title, description, important });
    } else if (mode === 'edit') {
      console.log('Edit Note:', { title, description, important });
    }
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="importantCheck"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="importantCheck">
          Mark as Important
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        {mode === 'add' ? 'Add Note' : 'Save'}
      </button>
    </form>
  );
};

export default AddEditNoteForm;
