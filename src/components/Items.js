import BtnReadMore from './BtnReadMore'

const Items = ({items}) => {
	return (
		<div className='items'>
			{items.map((item) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<p>{item.text}</p>
					<BtnReadMore id={item.id} />
				</div>
			))}
		</div>
	)
}

export default Items