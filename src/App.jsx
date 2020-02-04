const NAME = "Pavankumar Mahadik";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://image-uploading-service.s3.us-west-1.amazonaws.com/1579935258989_linkedin-profile-compressed.jpg" width="300px" />
		<p>A Fullstack Web and Android Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2021. Actively seeking internships in Software Development for Summer 2020.</p>
		<a href="https://github.com/pavan-sdsu" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));