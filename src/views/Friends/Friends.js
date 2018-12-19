import React, {Component} from "react";
import "./Friends.css";
import LocalFriends from "./LocalFriends/LocalFriends";
import FacebookFriends from "./FacebookFriends/FacebookFriends";

class Friends extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <FacebookFriends/>
                    <LocalFriends/>
                </div>
            </div>
        );
    }
}

export default Friends;
