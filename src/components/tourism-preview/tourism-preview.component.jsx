import { useState, useEffect, useContext } from 'react';
import { fetchTourismDataWithType, convertTourismDataField } from '../../apis/tourism.api';

import { ReactComponent as TitleIcon } from '../../assets/icon/yellow_square.svg';
import TourismCard from '../tourism-card/tourism-card.component';
import TypeTitle from '../type-title/type-title.component';
import Loader from '../loader/loader.component';

import { TourismPreviewContainer, TourismCardsContainer } from './tourism-preview.style';

const TourismPreview = ({ tourismType, titleText }) => {
	const [tourismItems, setTourismItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const setData = async () => {
			setIsLoading(true);
			const tourismData = await fetchTourismDataWithType(tourismType, '', {
				$top: '10',
			});
			setTourismItems(tourismData);
			setIsLoading(false);
		};
		setData();
	}, []);

	return (
		<TourismPreviewContainer>
			<TypeTitle Icon={TitleIcon} text={titleText} />
			<TourismCardsContainer>
				{isLoading ? (
					<Loader />
				) : (
					tourismItems.map(item => {
						const newFieldItem = convertTourismDataField(tourismType, item);
						return <TourismCard key={newFieldItem.id} tourismItem={newFieldItem} />;
					})
				)}
			</TourismCardsContainer>
		</TourismPreviewContainer>
	);
};

export default TourismPreview;
