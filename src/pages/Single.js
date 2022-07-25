import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import ItemsContext from '../context/items-context'

import BtnDelete from '../components/BtnDelete'

const Single = () => {
	const { id } = useParams();
	const [item, setItem] = useState({id: '', title: '', text: ''});
	const itemsCtx = useContext(ItemsContext)

	useEffect(() => {
		fetch(
			`https://react-repeat-fa651-default-rtdb.firebaseio.com/items/${id}.json`
		).then((response) => {
			return response.json();
		}).then((data) => {
			setItem(data);
		})
	}, [id])

	return (
		<div className='single'>
			<h1>Single</h1>
			<p>{ item.title }</p>
			<p>{ item.text }</p>
			<BtnDelete id={id} />
		</div>
	)
}

export default Single