import { useContext } from 'react';
import { fetchTourismDataWithType, TOURISM_TYPE } from '../../apis/tourism.api';
import { tourismSearchContext } from '../../context/tourism-search.context';

import { ReactComponent as MapIcon } from '../../assets/icon/map_M.svg';

import { CityCardContainer, CardBody, ImageContainer, TextContainer } from './city-card.style';
const CityCard = ({ city }) => {
	const { setTourism } = useContext(tourismSearchContext);
	const onCityCardClick = () => {
		const setData = async () => {
			const data = await fetchTourismDataWithType(TOURISM_TYPE.SCENIC_SPOT, city.key);
			setTourism({ type: TOURISM_TYPE.SCENIC_SPOT, data });
		};

		setData();
	};

	return (
		<CityCardContainer onClick={onCityCardClick}>
			<CardBody>
				<ImageContainer>
					<img src={`https://picsum.photos/200/300?random=${city.id}`} alt={city.value} />
				</ImageContainer>
				<TextContainer>
					<MapIcon />
					<span>{city.value}</span>
				</TextContainer>
			</CardBody>
		</CityCardContainer>
	);
};

export default CityCard;
