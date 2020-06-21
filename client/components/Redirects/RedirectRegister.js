import React, {
	Component,
	createRef,
	useEffect
} from 'react';



class RedirectRegister extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		analytics.logEvent("Register Did Mount")
		document.getElementById("redirectTo").click()
		// document.getElementById("redirectTab").click()
	}

	render() {
		return (
			<div>
				{/* <a target="_blank" href="https://forms.gle/nXT8L5Q9ejrr1H259" id = "redirectTab"/> */}
				{/* <a target="" href="/" id = "redirectTo"/> */}
				<a target="" href="https://forms.gle/nXT8L5Q9ejrr1H259" id = "redirectTo"/>
				
			</div>
		)

	}
}

export default RedirectRegister;
