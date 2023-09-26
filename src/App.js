import Header from './componunts/common/header/header';
import Contact from './componunts/sub/contact/contact';
import Department from './componunts/sub/department/department';
import Gallery from './componunts/sub/gallery/gallery';
import Members from './componunts/sub/members/members';
import Youtube from './componunts/sub/youtube/youtube';
import './styles/Global.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			{/* Switch 안쪽에서 중첩되는 조건 라우트의 컴포넌트가 있을 때 위쪽의 조건 컴포넌트만 호출하고 나머지 무시 */}
			<Switch>
				<Route exact path='/'>
					{/* 메인페이지 전용 헤더 */}
					<Header isMain={true} />
				</Route>
				<Route path='/'>
					{/* 서브페이지 전용 헤더 */}
					<Header isMain={false} />
				</Route>
			</Switch>
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/members' component={Members} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/members' component={Contact} />
		</>
	);
}

export default App;
