import { useContext, useState, useEffect, Fragment } from 'react';
import { convertTourismDataField, TOURISM_TYPE } from '../../apis/tourism.api';
import { tourismSearchContext } from '../../context/tourism-search.context';

import { ReactComponent as TitleIcon } from '../../assets/icon/yellow_square.svg';
import TypeTitle from '../type-title/type-title.component';
import TourismCard from '../tourism-card/tourism-card.component';
import PageController, { PAGE_BUTTON_TYPE } from '../page-controller/page-controller.component';
import Loader from '../loader/loader.component';
import SearchFail from '../search-fail/search-fail.component';

import {
	TourismContainer,
	TourismCardsContainer,
	PageControllersContainer,
	PreviewContainer,
} from './tourism-cards.style';

const previewTitle = {
	[TOURISM_TYPE.SCENIC_SPOT]: '熱門景點',
	[TOURISM_TYPE.RESTAURANT]: '熱門美食',
	[TOURISM_TYPE.HOTEL]: '熱門住宿',
};

const TourismCards = () => {
	const { tourism, isSearching } = useContext(tourismSearchContext);
	const [pageIndex, setPageIndex] = useState(0);
	const previewCount = 20;
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
		<TourismContainer>
			<TypeTitle Icon={TitleIcon} text={previewTitle[tourism.type]} />
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
					<TourismCardsContainer>
						{previewItems.map(item => {
							const newFieldItem = convertTourismDataField(tourism.type, item);
							return <TourismCard key={newFieldItem.id} tourismItem={newFieldItem} />;
						})}
					</TourismCardsContainer>
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
		</TourismContainer>
	);
};

export default TourismCards;
