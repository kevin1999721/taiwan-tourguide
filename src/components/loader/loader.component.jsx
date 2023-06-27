import { ReactComponent as RedTriangle } from '../../assets/icon/red_triangle.svg';
import { ReactComponent as YellowSquare } from '../../assets/icon/yellow_square.svg';
import { ReactComponent as GreenCircle } from '../../assets/icon/green_circle.svg';

import { LoaderContainer, IconContainer } from './loader.style';

const Loader = () => {
	return (
		<LoaderContainer>
			<IconContainer>
				<RedTriangle />
				<YellowSquare />
				<GreenCircle />
			</IconContainer>
		</LoaderContainer>
	);
};

export default Loader;
