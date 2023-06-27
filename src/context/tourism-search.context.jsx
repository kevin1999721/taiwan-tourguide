import { createContext, useState } from 'react';

export const tourismSearchContext = createContext({
	tourism: { type: '', data: null },
	setTourism: () => null,
	isSearching: false,
	setIsSearching: () => null,
});

export const TourismSearchProvider = ({ children }) => {
	const [tourism, setTourism] = useState({ type: '', data: null });
	const [isSearching, setIsSearching] = useState(false);
	const value = {
		tourism,
		setTourism,
		isSearching,
		setIsSearching,
	};
	return <tourismSearchContext.Provider value={value}>{children}</tourismSearchContext.Provider>;
};
