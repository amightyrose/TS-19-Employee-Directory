import React from 'react';
import SearchBar from './FilterForm';
import Table from './Table';

const Container = () => {
	return (
		<section className="container bg-secondary">
			<SearchBar/>
			<Table/>
		</section>
	);
}

export default Container;