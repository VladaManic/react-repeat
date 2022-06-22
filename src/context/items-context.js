import { createContext, useState } from 'react';

const ItemsContext = createContext({
	items: [],
	totalItems: 0
});

function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([]);

	const context = {
		items: currentItems,
		totalItems: currentItems.length,
	};

	return <ItemsContext.Provider value={context}>
		{props.children}
	</ItemsContext.Provider>
}