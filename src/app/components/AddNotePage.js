// AddNotePage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js

const AddNotePage = () => {
    const router = useRouter(); // Initialize useRouter hook
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImportant, setNewImportant] = useState(false);

    const handleAddNote = () => {
        const newNote = {
            id: Date.now(),
            title: newTitle,
            description: newDescription,
            important: newImportant,
        };
        // Here you would typically send the newNote to a server or save it in a state management library
        // For simplicity, let's just navigate back to the index page
        router.push('/'); // Use router to navigate back to the index page
    };

    return (
        <div className="container">
            <h2>Add Note</h2>
            <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={newImportant}
                    onChange={(e) => setNewImportant(e.target.checked)}
                />
                Important
            </label>
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    );
};

export default AddNotePage;
