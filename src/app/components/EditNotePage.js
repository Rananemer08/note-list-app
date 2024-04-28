// EditNotePage.js

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditNotePage = ({ notes, onUpdateNote }) => {
    const history = useHistory();
    const { id } = useParams();
    const note = notes.find(note => note.id === parseInt(id));
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedImportant, setUpdatedImportant] = useState(false);

    useEffect(() => {
        if (note) {
            setUpdatedTitle(note.title);
            setUpdatedDescription(note.description);
            setUpdatedImportant(note.important);
        }
    }, [note]);

    const handleUpdateNote = () => {
        onUpdateNote(note.id, updatedTitle, updatedDescription, updatedImportant);
        history.push('/');
    };

    return (
        <div className="container">
            <h2>Edit Note</h2>
            <input
                type="text"
                placeholder="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={updatedImportant}
                    onChange={(e) => setUpdatedImportant(e.target.checked)}
                />
                Important
            </label>
            <button onClick={handleUpdateNote}>Update Note</button>
        </div>
    );
};

export default EditNotePage;
