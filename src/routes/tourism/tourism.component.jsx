import { Fragment, useContext } from 'react';
import { TOURISM_TYPE } from '../../apis/tourism.api';
import { tourismSearchContext } from '../../context/tourism-search.context';

import TourismSearchForm from '../../components/tourism-search-form/tourism-search-form.component';
import Directory from '../../components/directory/directory.component';
import ActivityCards from '../../components/activity-cards/activity-cards.component';
import TourismCards from '../../components/tourism-cards/tourism-cards.component';
import Loader from '../../components/loader/loader.component';

import { TourismBody } from './tourism.style';

const Tourism = () => {
	const { tourism } = useContext(tourismSearchContext);

	return (
		<Fragment>
			<TourismSearchForm />
			<TourismBody>
				{tourism.data ? (
					tourism.type === TOURISM_TYPE.ACTIVITY ? (
						<ActivityCards />
					) : (
						<TourismCards />
					)
				) : (
					<Directory />
				)}
			</TourismBody>
		</Fragment>
	);
};

export default Tourism;
