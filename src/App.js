import HeaderFile from './HeaderFile.js';
import Content from './Content'
import { useState } from 'react';
import AddItem from './AddItem.js';
import Footer from './Footer';
import SearchItem from './SearchItem.js'
function App() {

	const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

	// const [items, setItems] = useState('');


	// sets itemlist and saves it to local storage
	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem('shoppinglist', JSON.stringify(newItems));

	}

	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')



	const addItem = (item) => {
		// get the id at which position new item will be added
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		console.log("id:",id)
		const myNewItem = {id, checked:false,item};
		const listItems = [...items,myNewItem];
		setAndSaveItems(listItems);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('')

	}

	const handleCheck = (id) => {
		// console.log(`key: ${id}`)
		const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
		setAndSaveItems(listItems);
	}


	const handleDelete = (id) => {
		// console.log(id)
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	}

	return (
		<div className="App">
			<HeaderFile title="Grocery List" />
			<AddItem 
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem 
				search={search}
				setSearch={setSearch}
			/>
			<Content
			// items = {items}
				items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
				// setItems = {setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
