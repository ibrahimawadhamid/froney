import React, {Component} from 'react';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../assets/img/brand/froney_logo.png';
import sygnet from '../../assets/img/brand/sygnet.svg';

class DefaultHeader extends Component {
    render () {
        return(
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 89, height: 25, alt: 'Froney Logo' }}
                    minimized={{ src: sygnet, width: 30, height: 30, alt: 'Froney Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="ml-auto" navbar>
                    <NavItem className="d-md-down-none">
                        <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
                    </NavItem>
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img src={'../../assets/img/avatars/awad.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
                            <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                            <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
            </React.Fragment>
        );
    }
}

export default DefaultHeader;
