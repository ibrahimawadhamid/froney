import React, {Component} from "react";
import { VerticalTimeline }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Event from "./Event/Event";

class Events extends Component {
	render() {
		return (
			<VerticalTimeline layout="1-column">
				<Event/>
			</VerticalTimeline>
		);
	}
}

export default Events;
