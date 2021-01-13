import React, { useState } from 'react';

// Filter form component
const FilterForm = ( {filterValue, handleFormInput, handleFormSubmit }) => {

	return (
		<div>
			<form>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Type here to start filtering"
						name="filter"
						id="filter"
						value={filterValue}
						onChange={handleFormInput}
						onSubmit={handleFormSubmit}
					/>
				</div>
			</form>
		</div>
	);
}

export default FilterForm;
