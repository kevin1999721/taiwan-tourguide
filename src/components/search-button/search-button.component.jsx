import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';

import { SearchButtonContainer } from './search-button.style';

const SearchButton = () => {
	return (
		<SearchButtonContainer>
			<SearchIcon />
		</SearchButtonContainer>
	);
};

export default SearchButton;
