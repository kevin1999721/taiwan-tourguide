import { useEffect, useState } from 'react';
import {
	fetchTourismDataWithType,
	TOURISM_TYPE,
	convertTourismDataField,
} from '../../apis/tourism.api';

import { ReactComponent as TitleIcon } from '../../assets/icon/yellow_square.svg';
import ActivityCard from '../activity-card/activity-card.component';
import TypeTitle from '../type-title/type-title.component';
import Loader from '../loader/loader.component';

import { ActivityPreviewContainer, ActivityCardsContainer } from './activity-preview.style';

const ActivityPreview = () => {
	const [activityItems, setActivityItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const setData = async () => {
			setIsLoading(true);
			const data = await fetchTourismDataWithType(TOURISM_TYPE.ACTIVITY, '', {
				$top: '6',
			});
			setIsLoading(false);
			setActivityItems(data);
		};
		setData();
	}, []);

	return (
		<ActivityPreviewContainer>
			<TypeTitle Icon={TitleIcon} text="熱門活動" />
			<ActivityCardsContainer>
				{isLoading ? (
					<Loader />
				) : (
					activityItems.map(item => {
						const newFieldItem = convertTourismDataField(TOURISM_TYPE.ACTIVITY, item);
						return <ActivityCard key={newFieldItem.id} tourismItem={newFieldItem} />;
					})
				)}
			</ActivityCardsContainer>
		</ActivityPreviewContainer>
	);
};

export default ActivityPreview;
