import React, { useContext } from 'react';
import { List, ListItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { menuItemsList } from './helpers/items';
import NavItem from './NavItem';
import { SideBarListItemIcon, SideBarListItemText } from './components';
import { authContext } from '../../../context/AuthLoggedContext';

export const NavList: React.FunctionComponent = () => {
	const history = useHistory();
	const { auth, logOut } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const menuItems = menuItemsList[role];

	const leavePage = () => {
		history.push('/login');
		logOut?.();
	};
	return (
		<List>
			{menuItems.map((item) => (
				<NavItem
					key={item.title}
					href={item.href}
					title={item.title}
					icon={item.icon}
				/>
			))}
			<ListItem button onClick={leavePage}>
				<SideBarListItemIcon>
					<ExitToAppIcon />
				</SideBarListItemIcon>
				<SideBarListItemText primary="Logout" />
			</ListItem>
		</List>
	);
};
