import { NAVBAR_TAGS } from '../consts/navbar';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
	return (
		<nav className='bg-gray-400'>
			<ul className='flex justify-center gap-5'>
				{NAVBAR_TAGS.map(tag => (
					<NavbarLink key={tag.LABEL} route={tag.ROUTE} tag={tag.LABEL} />
				))}
			</ul>
		</nav>
	);
};
