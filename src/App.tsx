import React, { useState } from 'react';

function App() {
	const [item, setItem] = useState<string>('');
	const [items, setItems] = useState<string[]>([]);

	const addTitle = () => {
		if (item) {
			setItems([...items, item]);
		}
		setItem('');
	};

	return (
		<>
			<input
				type="text"
				value={item}
				onChange={(event) => setItem(event.target.value)}
				required
			/>
			<button onClick={addTitle} type="button">
				Create Title
			</button>
			<ul>
				{items.map((itemValue) => (
					<ul key={itemValue}>{itemValue}</ul>
				))}
			</ul>
		</>
	);
}

export default App;
