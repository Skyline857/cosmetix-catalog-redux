import FilterButton from './FilterButton';

const Filter = ({ filter, setFilter }) => {
	return (
		<div className="btn-group" role="group">
			<FilterButton title="All" onclick={setFilter} filter={filter} />
			<FilterButton title="Cream" onclick={setFilter} filter={filter} />
			<FilterButton
				title="Lipstick"
				onclick={setFilter}
				filter={filter}
			/>
			<FilterButton title="Perfume" onclick={setFilter} filter={filter} />
			<FilterButton title="Powder" onclick={setFilter} filter={filter} />
		</div>
	);
};

export default Filter;
