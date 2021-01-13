import React from 'react';

const UserTable = ({ users }) => {

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
						<th scope="col">Name</th>
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
