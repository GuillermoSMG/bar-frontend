import { Link } from 'react-router-dom';

export const NavbarLink = ({ tag, route }) => {
	return (
		<li className='hover:underline'>
			<Link to={route}>{tag}</Link>
		</li>
	);
};
