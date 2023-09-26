import style from './header.module.scss';
import clsx from 'clsx';
//클래스 네임에 문자가 변수로 치환되고 있기 때문에 여려개의 변수값을 클래스로 등록하고 편하고, 클래스 연결으 ㄹ삼항연산자로 조건처리 가능
console.log(style);

export default function Header() {
	return (
		<Header className={clsx(style.header)}>
			<h1>LOGO</h1>
			<ul>
				<li>Department</li>
				<li>Gallery</li>
				<li>YouTube</li>
				<li>Members</li>
				<li>Comtact</li>
			</ul>
		</Header>
	);
}
