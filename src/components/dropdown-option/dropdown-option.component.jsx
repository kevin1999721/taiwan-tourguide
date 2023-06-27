import { Option } from './dropdown-option.style';

const DropdownOption = ({ value, text, setSearchCondition, isShowSelectedOption }) => {
	const onClickHandler = () => {
		setSearchCondition({ key: value, value: text });
	};

	return (
		<Option onClick={onClickHandler} isShowSelectedOption={isShowSelectedOption}>
			{text}
		</Option>
	);
};

export default DropdownOption;
