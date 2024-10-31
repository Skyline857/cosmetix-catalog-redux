import { NavLink } from 'react-router-dom';

const NavigationLink = ({title, link}) => {
	return (
		<NavLink
			to={`/${link}`}
			className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
		>
			{title}
		</NavLink>
	);
};

export default NavigationLink;
