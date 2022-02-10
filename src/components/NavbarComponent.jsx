import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import "./NavbarComponent.css";
export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/">REDUX-CRUD</NavbarBrand>

          <NavbarToggler onClick={this.toggle} className="toggle-custom" />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>Email</DropdownItem>
                  <DropdownItem>Github</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>WhatsApp</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Console
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>Login</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Register</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
