import style from './layout.module.scss';
import clsx from 'clsx';

export default function Layout({ title, children, styleName }) {
	return (
		<section className={clsx(style.layout, styleName)}>
			<figure></figure>

			<div className={clsx(style.content)}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
