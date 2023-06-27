import { ReactComponent as FailIcon } from '../../assets/icon/fail.svg';

import { SearchFailContainer, IconContainer, TextContainer } from './search-fail.style';

const SearchFail = () => {
	return (
		<SearchFailContainer>
			<IconContainer>
				<FailIcon />
			</IconContainer>
			<TextContainer>
				<span>Oops!</span>
				<span>很抱歉，找不到符合此搜尋相關的內容。</span>
			</TextContainer>
		</SearchFailContainer>
	);
};

export default SearchFail;
