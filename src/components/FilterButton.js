const FilterButton = ({ title, onclick, filter }) => {
	return (
		<button
			type="button"
			className={`btn btn-outline-secondary + ${
				filter === title ? 'active' : ''
			}`}
			onClick={() => onclick(title)}
		>
			{title}
		</button>
	);
};

export default FilterButton;
