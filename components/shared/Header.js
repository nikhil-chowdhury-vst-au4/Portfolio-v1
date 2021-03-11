import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import Link from "next/link";

const BsNavBrand = () => 
  <Link href="/">
            <a className="navbar-brand port-navbar-brand">Nikhil Chowdhury</a>
          </Link>


const BsNavLink = props => {
  const {title, href} = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginLink = () => 
<BsNavLink href ="/api/v1/login" title="Login" />

const LogoutLink = () => 
<span className = "nav-link port-navbar-link">Logout</span>

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
     return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
          </Nav>
           <Nav className= "port-navbar-link clickable" navbar>
           <LoginLink />
           </Nav>
            <Nav className= "port-navbar-link clickable" navbar>
           <LogoutLink />
           </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
