import { Post } from './Post';
import { useState } from 'react';

import './assets/styles.css';
import { Header } from './components/Header';

function App() {
	const [count, setCount] = useState(0);
	//passando propriedades para componentes
	return (
		<div>
			<Header />
			<Post
				author="Bianca Espindola"
				content="bom dia pessoaaaal!!!!!!!!"
			/>
			<Post
				author="Bianca Espindola"
				content="tudo bem com vocês? rsrsrsrsrs"
			/>
			<Post
				author="Bianca Espindola"
				content="hoje o dia está maravilhoso"
			/>
		</div>
	);
}

export default App;
