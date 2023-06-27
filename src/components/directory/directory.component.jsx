import { TOURISM_TYPE } from '../../apis/tourism.api';

import CityPreview from '../city-preview/city-preview.component';
import ActivityPreview from '../activity-preview/activity-preview.component';
import TourismPreview from '../tourism-preview/tourism-preview.component';

import { DirectoryContainer } from './directory.style';
const Directory = () => {
	return (
		<DirectoryContainer>
			<CityPreview />
			<ActivityPreview />
			<TourismPreview tourismType={TOURISM_TYPE.RESTAURANT} titleText="熱門美食" />
		</DirectoryContainer>
	);
};

export default Directory;
