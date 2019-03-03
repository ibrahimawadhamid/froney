import React, {Component} from "react";
import {Link} from "react-router-dom";

class Profile extends Component {
	render() {
		return (
			<div className="container-fluid well span6">
				<div className="row-fluid">
					<div className="span2">
						<img
							src="../../assets/img/avatars/awad.jpg"
							alt="Profile"
							style={{width: "100px"}}
							className="img-circle"/>
					</div>

					<div className="span8">
						<h3>Ibrahim Awad</h3>
						<h6>Email: Ibrahim.A.Hamid@gmail.com</h6>
						<h6>Country: Egypt</h6>
						<h6>Age: 27 Years</h6>
						<h6><Link to="/">More... </Link></h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
