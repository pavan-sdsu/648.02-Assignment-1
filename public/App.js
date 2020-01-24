class App extends React.Component {
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"hello"
			)
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));