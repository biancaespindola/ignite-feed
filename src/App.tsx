import { Post } from './Post';
import { useState } from 'react';

import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';

function App() {
	const [count, setCount] = useState(0);
	//passando propriedades para componentes
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<aside>sidebar</aside>
				<main>
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
				</main>
			</div>
		</div>
	);
}

export default App;
