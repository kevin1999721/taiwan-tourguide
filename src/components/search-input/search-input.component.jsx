import { Input } from './search-input.style';

const SearchInput = ({ ...inputAttributes }) => {
	return <Input type={'search'} {...inputAttributes} />;
};

export default SearchInput;
