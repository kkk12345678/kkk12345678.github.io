import React, { useState } from 'react';
import Counter from ".//components/Counter";

function App() {
	const [likes, setLikes] = useState(0);
	const [value, setValue] = useState('Input text');

	return (
		<div className="App">
			<Counter/>
		</div>
	);
}

export default App;
