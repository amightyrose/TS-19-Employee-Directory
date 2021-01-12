import React from 'react';
import FilterForm from './FilterForm';
import UserTable from './UserTable';

const Container = () => {
	return (
		<section className="container bg-secondary">
			<FilterForm/>
			<UserTable/>
		</section>
	);
}

export default Container;