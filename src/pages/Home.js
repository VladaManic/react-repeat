import React, {useContext, useEffect} from 'react'
import ItemsContext from '../context/items-context'

import Items from '../components/Items'

const Home = () => {
	const itemsCtx = useContext(ItemsContext)

	useEffect(() => {
		itemsCtx.getItems()
	}, [itemsCtx])

	return (
		<div className='home'>
			<h1>Home</h1>
			<Items items={itemsCtx.items} />
		</div>
	)
}

export default Home