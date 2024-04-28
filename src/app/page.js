// page.js

'use client'
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => {
	const [notes, setNotes] = useState([
		{
			id: 1, title: 'meeting',
			description: 'Review project, assign task',
			important: true
		},
		{
			id: 2, title: 'Grocery',
			description: 'Milk, Sugar, Apples, eggs',
			important: false
		},
    {
			id: 3, title: 'meeting2',
			description: 'important meeting with my supervisor at 2 pm',
			important: false
		},
    {
			id: 4, title: 'shopping',
			description: 'buy all the important stuff on sturday',
			important: false
		},
    {
			id: 5, title: 'urgent call',
			description: 'call my mum today at 8 am',
			important: false
		},
    {
			id: 6, title: 'to memorize',
			description: 'read thlink that i saved on computer',
			important: true
		},
    {
			id: 7, title: 'friends',
			description: 'I have a party with my friends at night, friday',
			important: false
		},
	]);

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};


	return (
		<div style={{backgroundColor:'#f399b9'}} className="container col-md-9 mb-3 mt-5 bg-dark-pink border border-dark">
			<div className="col text-center">
				<h2 style={{ marginBottom: '50px', fontWeight: 'bold' }} className='text-success mt-5'>
        Note Taking App
				</h2>
        {/* <Link href={`/edit/${id}`}>
  <a className="btn text-primary">
    <FaEdit style={{ fontSize: '1rem' }} />
  </a>
</Link> */}

			</div>
			<NoteList notes={notes}
				setNotes={setNotes} onDelete={deleteNote} />
		</div>
	);
};

export default IndexPage;
// 'use client'

// // pages/index.js

// import React, { useState } from 'react';
// import NoteList from './components/NoteList';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const IndexPage = () => {
//  const [notes, setNotes] = useState([
//   {
//     id: 1, title: 'meeting',
//     description: 'Review project, assign task',
//     important: false
// },
// {
//     id: 2, title: 'Grocery',
//     description: 'Milk, Sugar, Apples, eggs',
//     important: false
// },
//  ]);

//  const deleteNote = (id) => {
//     setNotes(notes.filter((note) => note.id !== id));
//  };

//  const addNote = (newNote) => {
//     setNotes([...notes, newNote]);
//  };

//  const updateNote = (updatedNote) => {
//     setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
//  };

//  return (
//     <div className="container">
//       <h2>Note List</h2>
//       <Link href="/add">
//         <a className="btn btn-primary">Add Note</a>
//       </Link>
//       <NoteList notes={notes} onDelete={deleteNote} />
//     </div>
//  );
// };

// export default IndexPage;
