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

		// Update the value shown in the input box.
		setFilterValue(event.target.value);

	}

	const handleFormSubmit = event => {
		event.preventDefault();
	}

	return (
		<main className="bg-secondary">
			<FilterForm handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit}/>
			<UserTable users={users}/>
		</main>
	);
}

export default MainSection;
