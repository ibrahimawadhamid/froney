import React, {Component} from "react";
import {Button} from "reactstrap";

class FacebookFriends extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-6">
                <div className="card">
                    <div className="header">
                        <h2><strong>Facebook</strong> Friends
                            <Button outline color="primary" className="float-right">
                                <i className="fa fa-plus"></i>&nbsp;Add
                            </Button>
                        </h2>
                    </div>
                    <div className="body">
                        <ul className="new_friend_list list-unstyled row">
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar7.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Jackson</h6>
                                    <small className="join_date">Today</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Aubrey</h6>
                                    <small className="join_date">Yesterday</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Oliver</h6>
                                    <small className="join_date">08 Nov</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Isabella</h6>
                                    <small className="join_date">12 Dec</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Jacob</h6>
                                    <small className="join_date">12 Dec</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Matthew</h6>
                                    <small className="join_date">17 Dec</small>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FacebookFriends;
