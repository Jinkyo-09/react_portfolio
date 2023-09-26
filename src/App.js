import Header from './componunts/common/header/header';
import Contact from './componunts/sub/contact/contact';
import Department from './componunts/sub/department/department';
import Gallery from './componunts/sub/gallery/gallery';
import Members from './componunts/sub/members/members';
import Youtube from './componunts/sub/youtube/youtube';
import './styles/Global.scss';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/members' component={Members} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/members' component={Contact} />
		</>
	);
}

export default App;
