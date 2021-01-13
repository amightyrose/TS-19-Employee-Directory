import React, { useEffect, useState } from 'react';
import FilterForm from './FilterForm';
import UserTable from './UserTable';
import { results as arrUsers } from '../users.json';

const MainSection = () => {

	console.log(arrUsers);

	// Set up the useState hook initial value for 'users'.
	const [users, setUsers] = useState(arrUsers);

	return (
		<main className="bg-secondary">
			<FilterForm/>
			<UserTable users={users}/>
		</main>
	);
}

export default MainSection;
