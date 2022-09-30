import Test from './Test';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Ciao mondo!</h1>
			<Test />
		</div>
	);
}

export default App;
