import React, {Component} from "react";
import Clock from "react-live-clock";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1><Clock format={"hh:mm:ss a"} ticking={true} timezone={"Africa/Cairo"}/></h1>
			</div>
		);
	}
}

export default Dashboard;
