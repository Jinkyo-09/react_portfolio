import style from './department.module.scss';
import clsx from 'clsx';

export default function Department() {
	return (
		<section className={clsx(style.department)}>
			<figure>
				<div className={clsx(style.content)}>
					<h1>Department</h1>
				</div>
			</figure>
		</section>
	);
}
