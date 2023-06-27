import { TypeTitleContainer } from './type-title.style';

const TypeTitle = ({ Icon, text }) => {
	return (
		<TypeTitleContainer>
			<h1>
				<Icon />
				<span>{text}</span>
			</h1>
		</TypeTitleContainer>
	);
};

export default TypeTitle;
