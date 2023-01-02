import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
	Drawer,
	DrawerOverflow,
	DrawerToC,
	DrawerToggle,
} from 'react-bootstrap-drawer';

import CustomNavigation from './CustomNavigation';

export const CustomDrawer = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<Drawer className={ props.className }>
			<DrawerToggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<DrawerOverflow>
					<DrawerToC>
						{ /* Your Navigation Goes Here */ }
						<CustomNavigation />
					</DrawerToC>
				</DrawerOverflow>
			</Collapse>
		</Drawer>
	);
};