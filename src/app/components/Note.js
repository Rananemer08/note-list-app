

import { FaTrash, FaEdit, FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Note = ({ note, onDelete, onEdit, onMarkImportant }) => {
	const { id, title, description, important } = note;

	return (
		<div className={`card ${important ? 'border-dark' : 'border-dark'} 
						mb-3`} style={{ maxWidth: '18rem' }}>
			<div className="card-body d-flex justify-content-between 
							align-items-center">
				<div>
					<FaStar className={`me-2
		${important ? 'text-warning' : 'text-secondary'} `}
						onClick={() => onMarkImportant(id)} />
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
				<div>
					<button className="btn me-2 text-danger"
						onClick={() => onDelete(id)}
						style={{ backgroundColor: 'none', fontSize: '1rem' }}>
						<FaTrash style={{ fontSize: '1rem' }} />
					</button>
					<button className="btn text-primary"
						onClick={() => onEdit(id)}
						style={{ backgroundColor: 'none' }}>
						<FaEdit style={{ fontSize: '1rem' }} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;



// import { FaTrash, FaEdit, FaStar } from 'react-icons/fa';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Note = ({ note, onDelete }) => {
//  const { id, title, description, important } = note;

//  return (
//     <div className={`card ${important ? 'border-dark' : 'border-dark'} mb-3`} style={{ maxWidth: '18rem' }}>
//       <div className="card-body d-flex justify-content-between align-items-center">
//         <div>
//           <FaStar className={`me-2 ${important ? 'text-warning' : 'text-secondary'}`} />
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{description}</p>
//         </div>
//         <div>
//           <button className="btn me-2 text-danger" onClick={() => onDelete(id)} style={{ backgroundColor: 'none', fontSize: '1rem' }}>
//             <FaTrash style={{ fontSize: '1rem' }} />
//           </button>
//           <Link href={`/edit?id=${id}`}>
//             <a className="btn text-primary" style={{ backgroundColor: 'none' }}>
//               <FaEdit style={{ fontSize: '1rem' }} />
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//  );
// };

// export default Note;

