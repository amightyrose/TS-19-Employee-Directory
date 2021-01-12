import React, { useState } from 'react';

// Filter form component
const FilterForm = () => {

	// Set up the useState hook
	const [filter, setFilter] = useState();

	return (
		<div className="row">
			<form className="search">
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Filter"
						name="filter"
						id="filter"
						value={filter}
						onChange={e => setFilter(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

export default FilterForm;
