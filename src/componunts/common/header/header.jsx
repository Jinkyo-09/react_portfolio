import style from './header.module.scss';
import clsx from 'clsx';
import { link, NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<Header className={clsx(style.header)}>
			<h1>
				<link to='/'>LOGO</link>
			</h1>
			<ul>
				<li>
					<navLink to='/department'>Department</navLink>
				</li>
				<li>Gallery</li>
				<li>
					<navLink to='/youtube'>YouTube</navLink>
				</li>
				<li>
					<navLink to='/members'>Members</navLink>
				</li>
				<li>
					<navLink to='/Contact'>Contact</navLink>
				</li>
				<li>
					<navLink to='/Gallety'>Gallery</navLink>
				</li>
			</ul>
		</Header>
	);
}
