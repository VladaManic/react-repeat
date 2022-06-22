import { useState } from 'react'

import Items from '../components/Items'

const Home = () => {
	const [items, setItems] = useState([
    {
      id: 1,
			title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur mi quis ante laoreet, id ornare mi dapibus.',
    },
    {
      id: 2,
			title: 'Vestibulum ante',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac purus eget urna placerat tempor eget at lorem.',
    },
    {
      id: 3,
			title: 'Nullam congue',
      text: 'Nullam congue elementum risus et laoreet. Morbi consequat sapien magna, ac cursus justo convallis et.',
    },
  ])

	return (
		<div className='home'>
			<h1>Home</h1>
			<Items items={items} />
		</div>
	)
}

export default Home