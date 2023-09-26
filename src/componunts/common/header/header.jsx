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
					<navLink to='/department' activeClassName={style.active}>
						Department
					</navLink>
				</li>
				<li>Gallery</li>
				<li>
					<navLink to='/youtube' activeClassName={style.active}>
						YouTube
					</navLink>
				</li>
				<li>
					<navLink to='/members' activeClassName={style.active}>
						Members
					</navLink>
				</li>
				<li>
					<navLink to='/Contact' activeClassName={style.active}>
						Contact
					</navLink>
				</li>
				<li>
					<navLink to='/Gallety'>Gallery</navLink>
				</li>
			</ul>
		</Header>
	);
}
