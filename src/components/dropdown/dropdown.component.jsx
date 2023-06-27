import { useState } from 'react';
import { ReactComponent as DropDownIcon } from '../../assets/icon/dropdown.svg';

import DropdownOption from '../dropdown-option/dropdown-option.component';

import {
	DropDownIconContainer,
	DropDownContainer,
	SelectedOptionContainer,
	DropDownList,
} from './dropdown.style';

const Dropdown = ({ options, setSearchCondition, selectedOption }) => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const dropdownClickHandler = e => {
		setIsDropDownOpen(!isDropDownOpen);
	};

	return (
		<DropDownContainer onClick={dropdownClickHandler}>
			<SelectedOptionContainer isDropDownOpen={isDropDownOpen}>
				<span>{selectedOption.value}</span>
				<DropDownIconContainer isDropDownOpen={isDropDownOpen}>
					<DropDownIcon />
				</DropDownIconContainer>
			</SelectedOptionContainer>
			{isDropDownOpen ? (
				<DropDownList>
					{options.map((option, index) => {
						const isShowSelectedOption = selectedOption.key === option.key;
						return (
							<DropdownOption
								key={option.id}
								value={option.key}
								text={option.value}
								setSearchCondition={setSearchCondition}
								isShowSelectedOption={isShowSelectedOption}
							/>
						);
					})}
				</DropDownList>
			) : null}
		</DropDownContainer>
	);
};

export default Dropdown;
