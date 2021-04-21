import IRoute from 'app/types/IRoute';
import { Candidate } from './components/Candidate/Candidate';
import { DashBoard } from './components/DashBoard/DashBoard';

const routesAdmin: Array<IRoute> = [
	{
		path: '/admin/candidate',
		exact: false,
		component: Candidate,
	},
	{
		path: '/admin/dashboard',
		exact: false,
		component: DashBoard,
	},
];

export default routesAdmin;