import React, { useState, useContext } from 'react';
import ItemsContext from '../context/items-context';

const Add = () => {
	const itemsCtx = useContext(ItemsContext);
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const submit = (e) => {
		e.preventDefault()
		const item = {title, text}
		itemsCtx.addItem(item)
	}

	return (
		<div className='add'>
			<h1>Add</h1>
			<form onSubmit={submit}>
				<label for="title">Title</label>
				<input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
				<br/>
				<label for="textarea">Text</label>
				<textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
				<br/>
				<input type="submit" value="Send" />
			</form>
		</div>
	)
}

export default Add