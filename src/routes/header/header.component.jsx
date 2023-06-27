import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/taiwan-tourguide-logo.svg';

import { HeaderContainer, LogoNavigationContainer } from './header.style';

import Navigation from '../navigation/navigation.component';

const Header = () => {
	return (
		<Fragment>
			<HeaderContainer>
				<LogoNavigationContainer>
					<Link to={'/'}>
						<Logo />
					</Link>
					<Navigation />
				</LogoNavigationContainer>
			</HeaderContainer>
		</Fragment>
	);
};

export default Header;
