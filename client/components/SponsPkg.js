import React, { Component, createRef, useEffect } from 'react';



class SponsPkg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: "tmp",
			sponsFileUrl: "https://firebasestorage.googleapis.com/v0/b/circle-innovation.appspot.com/o/Circle-Official-Sponsorship-2020.pdf?alt=media"
		};
	}

	componentDidMount() {
		//   <a href={getFile.url}
		// download={getFile.saveAsFileName}></a>
		analytics.logEvent("SponsPkg Did Mount")
		var link = document.getElementById("fileLink");
		link.click()
		// window.location.replace('http://www.hellocircle.ca')
	}

	render() {

		const sponsFile = storageRef.child('Circle-Official-Sponsorship-2020.pdf');
		sponsFile.getDownloadURL().then((url) => {
			this.setState({ file: url });

			console.log(url)
		});


		return (
			<div>
				<a download="Circle-Official-Sponsorship-2020.pdf" href={this.state["sponsFileUrl"]} title="File" id="fileLink"></a>
				<h1 className="justify-content-center">Thank you for considering Circle!</h1>

			</div>
		)

	}
}

export default SponsPkg;
