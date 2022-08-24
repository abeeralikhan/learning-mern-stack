import { useState } from 'react';

export default function Counter(props) {
	const [ count, setCount ] = useState(0);
	// const state = useState(0);
	// console.log(state);
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Add 1</button>
		</div>
	);
}
