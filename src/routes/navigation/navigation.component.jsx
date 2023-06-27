import { useLocation } from 'react-router-dom';

import { ReactComponent as CircleIcon } from '../../assets/icon/circle.svg';
import { ReactComponent as TriangleIcon } from '../../assets/icon/triangle.svg';
import { ReactComponent as SquareIcon } from '../../assets/icon/square.svg';

import { NavigationContainer, LinkContinaer } from './navigation.style';

const getClassName = (pathName, searchPathName) => {
	if (searchPathName === '/') {
		return pathName === searchPathName ? 'active' : '';
	} else {
		return pathName.includes(searchPathName) ? 'active' : '';
	}
};

const Navigation = () => {
	const { pathname } = useLocation();

	return (
		<NavigationContainer>
			<LinkContinaer to={'/'} className={getClassName(pathname, '/')}>
				<TriangleIcon />
				<span>台灣旅遊</span>
			</LinkContinaer>
			<LinkContinaer to={'/trip'} className={getClassName(pathname, '/trip')}>
				<SquareIcon />
				<span>景點交通</span>
			</LinkContinaer>
		</NavigationContainer>
	);
};

export default Navigation;
