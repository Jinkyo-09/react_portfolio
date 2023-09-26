import Header from './componunts/common/header/header';
import Department from './componunts/sub/department/department';
import Youtube from './componunts/sub/youtube/youtube';
import './styles/Global.scss';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Route path='/department'>
				<Department />
			</Route>
			<Route path='YouTube'>
				<Youtube />
			</Route>
		</>
	);
}

export default App;
