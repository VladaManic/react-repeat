import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const BtnDelete = (props) => {
	const itemsCtx = useContext(ItemsContext);

	const Delete = () => {
		itemsCtx.deleteItem(props.id);
	}

	return (
		<button onClick={Delete}>Delete</button>
	)
}

export default BtnDelete