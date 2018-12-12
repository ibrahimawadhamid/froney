import React, {Component} from 'react';
import Clock from 'react-live-clock';
import Candles from "../Animations/Candles/Candles";
import {Container, Jumbotron} from "reactstrap";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1><Clock format={'hh:mm:ss'} ticking={true} timezone={'Africa/Cairo'}/></h1>
                <Jumbotron fluid>
                    <Container fluid>
                        <Candles/>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Dashboard;
