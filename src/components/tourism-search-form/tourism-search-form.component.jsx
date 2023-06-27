import { useContext, useState } from 'react';

import { ReactComponent as MainLogo } from '../../assets/main-logo.svg';
import { fetchTourismDataWithType, TOURISM_TYPE } from '../../apis/tourism.api';
import { tourismSearchContext } from '../../context/tourism-search.context';

import SearchButton from '../search-button/search-button.component';
import Dropdown from '../dropdown/dropdown.component';
import SearchInput from '../search-input/search-input.component';
import CardShadow from '../card-shadow/card-shadow.component';

import {
	SearchFormBackground,
	SearchFormContainer,
	TitleContainer,
	Description,
	SearchInputsContainer,
	SelectDropdownContainer,
} from './tourism-search-form.style';

import taiwanCityData from '../../data/taiwan-city-county-data.json';

const optionTypes = [
	{ id: 0, key: '', value: '類別' },
	{ id: 1, key: TOURISM_TYPE.RESTAURANT, value: '美食' },
	{ id: 2, key: TOURISM_TYPE.HOTEL, value: '住宿' },
	{ id: 3, key: TOURISM_TYPE.ACTIVITY, value: '活動' },
	{ id: 4, key: TOURISM_TYPE.SCENIC_SPOT, value: '景點' },
];
const optionCities = [{ id: 0, key: '', value: '不分縣市' }].concat(taiwanCityData);

const TourismSearchForm = () => {
	const { setTourism, setIsSearching } = useContext(tourismSearchContext);
	const [searchInputValue, setSearchInputValue] = useState('');
	const [selectedTourismType, setSelectedTourismType] = useState({ key: '', value: '類別' });
	const [selectedCity, setSelectedCity] = useState({ key: '', value: '不分縣市' });

	const onSearchInputChange = e => {
		setSearchInputValue(e.target.value);
	};

	const formSubmitHandler = async e => {
		e.preventDefault();
		if (!selectedTourismType.key) {
			alert('請選擇類別 !');
			return;
		}

		setIsSearching(true);
		const data = await fetchTourismDataWithType(
			selectedTourismType.key,
			selectedCity.key,
			searchInputValue ? { $filter: `contains(Description,'${searchInputValue}')` } : {}
		);
		setIsSearching(false);

		setTourism({ type: selectedTourismType.key, data });
	};

	return (
		<SearchFormBackground>
			<SearchFormContainer>
				<TitleContainer>
					<MainLogo />
					<Description>台北、台中、台南、屏東、宜蘭……遊遍台灣</Description>
				</TitleContainer>
				<form onSubmit={formSubmitHandler}>
					<SearchInputsContainer>
						<SearchInput
							onChange={onSearchInputChange}
							value={searchInputValue}
							placeholder={'搜尋關鍵字'}
						/>
					</SearchInputsContainer>
					<SelectDropdownContainer>
						<Dropdown
							options={optionTypes}
							setSearchCondition={setSelectedTourismType}
							selectedOption={selectedTourismType}
						/>
						<Dropdown
							options={optionCities}
							setSearchCondition={setSelectedCity}
							selectedOption={selectedCity}
						/>
						<SearchButton />
					</SelectDropdownContainer>
				</form>
			</SearchFormContainer>
			<CardShadow />
		</SearchFormBackground>
	);
};

export default TourismSearchForm;
