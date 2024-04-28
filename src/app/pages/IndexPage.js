// // page.js

// 'use client'
// import React, { useState } from 'react';
// import NoteList from '../components/NoteList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const IndexPage = () => {
// 	const [notes, setNotes] = useState([
// 		{
// 			id: 1, title: 'meeting',
// 			description: 'Review project, assign task',
// 			important: false
// 		},
// 		{
// 			id: 2, title: 'Grocery',
// 			description: 'Milk, Sugar, Apples, eggs',
// 			important: false
// 		},
// 	]);

// 	const deleteNote = (id) => {
// 		setNotes(notes.filter((note) => note.id !== id));
// 	};


// 	return (
// 		<div className="container col-md-9 mb-3 
// 			mt-5 bg-light border border-dark">
// 			<div class="col text-center">
// 				<h2 className='text-success mt-3'>
// 					GeekForGeeks
// 				</h2>
// 				<h4>Note Taking App</h4>
// 			</div>
// 			<NoteList notes={notes}
// 				setNotes={setNotes} onDelete={deleteNote} />
// 		</div>
// 	);
// };

// export default IndexPage;
