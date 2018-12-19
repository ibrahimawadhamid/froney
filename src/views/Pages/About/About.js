import React, {Component} from "react";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

class About extends Component {
	render () {
		return (
			<div>
				<Row>
					<Col>
						<Card>
							<CardHeader>
                                About
							</CardHeader>
							<CardBody>
								<Row>
									<Col xs="12" md="6" xl="6">
										<ul>
											<li><Link to="/register">Register</Link></li>
											<li><Link to="/login">Login</Link></li>
										</ul>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default About;
