export function Post(props) {
	return (
		<div>
			<h2>Testando componente</h2>
			<strong>{props.author}</strong>
			<p>{props.content}</p>
		</div>
	);
}
