import React from 'react';

const UserTable = ({ users }) => {

	console.log(users);

	const userRows = users.map((user, index) => {
		const fullName = `${user.name.first} ${user.name.last}`
		return (
			<tr key={index}>
				<td><img src={user.picture.thumbnail} alt={fullName}></img></td>
				<td>{fullName}</td>
				<td>{user.phone}</td>
				<td>{user.email}</td>
			</tr>
		)
	});

	console.log(userRows);

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
