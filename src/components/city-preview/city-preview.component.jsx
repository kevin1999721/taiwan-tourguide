import { ReactComponent as TitleIcon } from '../../assets/icon/red_triangle.svg';
import taiwanCityData from '../../data/taiwan-city-county-data.json';

import TypeTitle from '../type-title/type-title.component';
import CityCard from '../city-card/city-card.component';

import { CityPreviewContainer, CityCardsContainer } from './city-preview.style';

const CityPreview = () => {
	return (
		<CityPreviewContainer>
			<TypeTitle Icon={TitleIcon} text="熱門城市" />
			<CityCardsContainer>
				{taiwanCityData.map(item => {
					return <CityCard key={item.key} city={item} />;
				})}
			</CityCardsContainer>
		</CityPreviewContainer>
	);
};

export default CityPreview;
