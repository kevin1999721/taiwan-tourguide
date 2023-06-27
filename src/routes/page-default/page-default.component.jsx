import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Footer from '../footer/footer.component';
import Header from '../header/header.component';

const PageDefault = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default PageDefault;
