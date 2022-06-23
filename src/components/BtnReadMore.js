import { Link } from 'react-router-dom'

const BtnReadMore = (props) => {
	return (
		<>
			<Link to={`/single/${props.id}`}>
				<button>Read More</button>
			</Link>
		</>
	)
}

export default BtnReadMore