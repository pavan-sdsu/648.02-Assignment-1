const NAME = "Pavankumar Mahadik";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://image-uploading-service.s3.us-west-1.amazonaws.com/1579935258989_linkedin-profile-compressed.jpg", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Fullstack Web and Android Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2021. Actively seeking internships in Software Development for Summer 2020."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/pavan-sdsu", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));