import React, { useEffect, useState } from 'react';
import FilterForm from './FilterForm';
import UserTable from './UserTable';
import { results as arrUsers } from '../users.json';

const MainSection = () => {

	console.log(arrUsers);

	return (
		<main className="bg-secondary">
			<FilterForm/>
			<UserTable/>
		</main>
	);
}

export default MainSection;
