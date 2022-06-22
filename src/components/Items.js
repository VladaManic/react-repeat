const Items = ({items}) => {
	return (
		<div className='items'>
			{items.map((item) => (
				<>
					<h2>{item.title}</h2>
					<p>{item.text}</p>
				</>
			))}
		</div>
	)
}

export default Items