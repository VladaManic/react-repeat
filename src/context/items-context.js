import { createContext, useState } from 'react'
import axios from 'axios'

const ItemsContext = createContext({
	items: [],
	totalItems: 0,
	getItems: () => {},
	addItem: (item) => {},
});

export function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([]);

	const getItemsHandler = () => {
		axios({
			method: 'GET',
			url: 'https://react-repeat-fa651-default-rtdb.firebaseio.com/items.json'
		}).then((res) => {
			const newItems = [];
			for(const key in res.data){
				const newItem = {
					id: key,
					...res.data[key]
				}
				newItems.push(newItem)
			}
			setCurrentItems(newItems)
		})
	}

	const addItemHandler = (currentItem) => {
		axios({
			method: 'POST',
      url: 'https://react-repeat-fa651-default-rtdb.firebaseio.com/items.json',
      data: currentItem
		})
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
	}

	const context = {
		items: currentItems,
		totalItems: currentItems.length,
		getItems: getItemsHandler,
		addItem: addItemHandler,
	};

	return <ItemsContext.Provider value={context}>
		{props.children}
	</ItemsContext.Provider>
}

export default ItemsContext;