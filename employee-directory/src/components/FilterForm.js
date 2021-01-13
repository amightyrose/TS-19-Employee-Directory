import React from 'react';

// Filter form component
const FilterForm = ({ filterValue, handleFormInput, handleFormSubmit }) => {

	return (
		<form>
			<div className="form-group d-flex justify-content-center">
				<input
					className="form-control w-50"
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
	);
}

export default FilterForm;
