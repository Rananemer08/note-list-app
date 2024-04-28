// EditNotePage.js

import React from 'react';
import AddEditNoteForm from '../components/AddEditNoteForm'; // Import the form component
import Link from 'next/link'; // Import Link from Next.js

const EditNotePage = () => {
  return (
    <div className="container col-md-9 mb-3 mt-5 bg-light border border-dark">
      <div className="col text-center">
        <h2 className='text-success mt-3'>GeekForGeeks</h2>
        <h4>Edit Note</h4>
      </div>
      <AddEditNoteForm mode="edit" /> {/* Pass mode as "edit" */}
      <Link href="/"> {/* Add Link to navigate back to the list */}
        <button className="btn btn-secondary mt-3">Back to List</button>
      </Link>
    </div>
  );
};

export default EditNotePage;

