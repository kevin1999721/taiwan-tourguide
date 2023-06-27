import { useState, useContext, useEffect, Fragment } from 'react';
import { convertTourismDataField } from '../../apis/tourism.api';
import { tourismSearchContext } from '../../context/tourism-search.context';

import { ReactComponent as TitleIcon } from '../../assets/icon/yellow_square.svg';
import ActivityCard from '../activity-card/activity-card.component';
import TypeTitle from '../type-title/type-title.component';
import PageController, { PAGE_BUTTON_TYPE } from '../page-controller/page-controller.component';
import Loader from '../loader/loader.component';
import SearchFail from '../search-fail/search-fail.component';

import {
	ActivityContainer,
	ActivityCardsContainer,
	PageControllersContainer,
	PreviewContainer,
} from './activity-cards.style';

const ActivityCards = () => {
	const { tourism, isSearching } = useContext(tourismSearchContext);
	const [pageIndex, setPageIndex] = useState(0);

	const previewCount = 9;
	const previewItems = tourism.data.filter(
		(_, index) => (index >= pageIndex * previewCount) & (index < (pageIndex + 1) * previewCount)
	);

	useEffect(() => {
		setPageIndex(0);
	}, [tourism]);

	const onPageControllerClick = direction => {
		return () => {
			if (pageIndex + direction < 0 || pageIndex + direction >= tourism.data.length / previewCount)
				return;
			setPageIndex(pageIndex + direction);
		};
	};

	return (
		<ActivityContainer>
			<TypeTitle Icon={TitleIcon} text="熱門活動" />
			{isSearching ? (
				<PreviewContainer>
					<Loader />
				</PreviewContainer>
			) : previewItems.length <= 0 ? (
				<PreviewContainer>
					<SearchFail />
				</PreviewContainer>
			) : (
				<Fragment>
					<ActivityCardsContainer>
						{previewItems.map(item => {
							const newFieldItem = convertTourismDataField(tourism.type, item);
							return <ActivityCard key={newFieldItem.id} tourismItem={newFieldItem} />;
						})}
					</ActivityCardsContainer>
					<PageControllersContainer>
						<PageController
							pageButtonType={PAGE_BUTTON_TYPE.PREVIOUSE}
							onButtonClick={onPageControllerClick(-1)}
						/>
						<span>{pageIndex + 1}</span>
						<PageController
							pageButtonType={PAGE_BUTTON_TYPE.NEXT}
							onButtonClick={onPageControllerClick(1)}
						/>
					</PageControllersContainer>
				</Fragment>
			)}
		</ActivityContainer>
	);
};

export default ActivityCards;
