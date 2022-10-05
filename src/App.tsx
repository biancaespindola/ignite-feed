import { Post } from './Post';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	//passando propriedades para componentes
	return (
		<div>
			<h1>Ciao mondo!</h1>
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
