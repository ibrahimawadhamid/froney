import React, {Component} from "react";
import {
    Button,
    Form,
    FormGroup, Input,
    InputGroup,
    InputGroupAddon, InputGroupText,
    Modal,
    ModalBody,
    ModalHeader
} from "reactstrap";

class LocalFriends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addModalVisible: false
        };

        this.addFriendHandler = this.addFriendHandler.bind(this);
    }

    addFriendHandler = () => {
        this.setState({
            addModalVisible: !this.state.addModalVisible,
        });
    }

    render() {
        return (
            <div className="col-md-12 col-lg-6">

                <Modal isOpen={this.state.addModalVisible} toggle={this.addFriendHandler}
                       className={'modal-primary'}>
                    <ModalHeader toggle={this.addFriendHandler}>Add Local Friend</ModalHeader>
                    <ModalBody>
                        <Form action="" method="post">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" id="fullname" name="fullname" placeholder="Fullname"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" id="email1" name="email" placeholder="Email"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fa fa-photo"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="file" id="photo" name="photo" placeholder="Photo"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="form-actions">
                                <Button type="submit" size="sm" color="primary" onClick={(e) => {e.preventDefault();}}>Add</Button>
                                <Button color="warning" size="sm" onClick={this.addFriendHandler}>Cancel</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <div className="card">
                    <div className="header">
                        <h2><strong>Local</strong> Friends
                            <Button onClick={this.addFriendHandler} outline color="primary" className="float-right">
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
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Aubrey</h6>
                                    <small className="join_date">Yesterday</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png"
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
                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png"
                                         className="img-thumbnail" alt="User Image"/>
                                    <h6 className="users_name">Jacob</h6>
                                    <small className="join_date">12 Dec</small>
                                </a>
                            </li>
                            <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                <a href="">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png"
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

export default LocalFriends;
