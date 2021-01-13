import React from 'react';

const UserTable = ({ users, sortTable, sortOrder }) => {

	// Choose a sort icon to use according to sort order.
	let iconClass;

	switch (sortOrder) {
		case "up":
			iconClass = "bi bi-caret-up-fill"
			break;
		case "down":
			iconClass = "bi bi-caret-down-fill"
			break;
		default:
			iconClass = "d-none"
			break;
	}


	const userRows = users.map((user, index) => {
		return (
			<tr key={index}>
				<td><img src={user.image} alt={user.fullName}></img></td>
				<td>{user.fullName}</td>
				<td>{user.phone}</td>
				<td>{user.email}</td>
			</tr>
		)
	});

	return (
		<>
			<table className="table table-dark table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">Image</th>
						<th scope="col"><a href="#" className="text-decoration-none text-white" onClick={sortTable}>Name</a>
							<i className={`${iconClass} ml-2 text-secondary`}></i></th>
						<th scope="col">Phone</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					{userRows}
				</tbody>
			</table>
			<p></p>
		</>
	);
}

export default UserTable;
