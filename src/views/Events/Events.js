import React, {Component} from "react";
import { VerticalTimeline }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Event from "./Event/Event";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
import {FaPlus, FaUsers} from 'react-icons/fa';

class Events extends Component {
	render() {
		return (
			<div>
                <Fab icon={<FaPlus />} event="click">
                    <Action
						text="New Event"><FaUsers/></Action>
                </Fab>
				<VerticalTimeline layout="1-column">
					<Event/>
				</VerticalTimeline>
			</div>
		);
	}
}

export default Events;
