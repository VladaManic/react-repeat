const Add = () => {
	return (
		<div className='add'>
			<h1>Add</h1>
			<form>
				<label for="title">Title</label>
				<input type="text" id="title" />
				<br/>
				<label for="textarea">Text</label>
				<textarea id="textarea"></textarea>
				<br/>
				<input type="submit" value="Send" />
			</form>
		</div>
	)
}

export default Add