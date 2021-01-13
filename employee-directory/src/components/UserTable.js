import React from 'react';

const UserTable = ( {arrUsers} ) => {

	// console.log(arrUsers);

	// const userRows = arrUsers.map(user =>
	// 	<tr>
	// 		<td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
	// 		<td>{user.name.first} {user.name.last}</td>
	// 		<td>{user.phone}</td>
	// 		<td>{user.email}</td>
	// 	</tr>
	// );

	// console.log(userRows);

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
				{/* {userRows} */}
			</tbody>
		</table>
		<p></p>
		</>
	);
}

export default UserTable;
