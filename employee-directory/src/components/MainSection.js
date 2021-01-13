import React, { useEffect, useState } from 'react';
import FilterForm from './FilterForm';
import UserTable from './UserTable';
import { results } from '../users.json';

const MainSection = () => {

	// Tidy up the users array.
	const arrUsers = results.map(objUser => {
		return {
			fullName: `${objUser.name.first} ${objUser.name.last}`,
			email: objUser.email,
			phone: objUser.phone,
			image: objUser.picture.thumbnail
		}
	});


	// Set up the useState hooks and initial value for 'users'.
	const [users, setUsers] = useState(arrUsers);
	const [filterValue, setFilterValue] = useState("");
	const [sortOrder, setSortOrder] = useState("");


	// Set up a useEffect hook to filter the user list when the filterValue changes.
	useEffect(() => {

		const matchesFilter = objUser => {

			// Create an array of keys in the user object that we want to search.
			const userObjectKeys = ["fullName", "email", "phone"];

			// Iterate through each key and check the value against filterValue
			// using regex. Will return true or false.
			return userObjectKeys.some(key => objUser[key].toLowerCase().includes(filterValue.toLowerCase()));

		}

		// Set users to a filtered array.
		setUsers(arrUsers.filter(user => matchesFilter(user)));

	}, [filterValue]);


	// Function called when typing into filter form.
	const handleFormInput = event => {
		setFilterValue(event.target.value);
	}


	// Function to stop page reload when pressing enter.
	const handleFormSubmit = event => {
		event.preventDefault();
	}


	// Function called when sort button is clicked.
	const sortTable = () => {

		// Check current sort order and return the new sort order.
		(sortOrder !== "up") ? setSortOrder("up") : setSortOrder("down");
		let sortedUsers;

		// Sort the array of users
		if (sortOrder === "up") {
			sortedUsers = [...users].sort((a, b) => {
				const nameA = a.fullName.toUpperCase();
				const nameB = b.fullName.toUpperCase();
				if (nameA < nameB) { return 1; }
				if (nameA > nameB) { return -1; }
				return 0;
				});
		}
		else {
			sortedUsers = [...users].sort((a, b) => {
				const nameA = a.fullName.toUpperCase();
				const nameB = b.fullName.toUpperCase();
				if (nameA < nameB) { return -1; }
				if (nameA > nameB) { return 1; }
				return 0;
			});
		}

		setUsers(sortedUsers);

	}


	return (
		<main className="bg-secondary">
			<FilterForm handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit}/>
			<UserTable users={users} sortTable={sortTable}/>
		</main>
	);
}

export default MainSection;
