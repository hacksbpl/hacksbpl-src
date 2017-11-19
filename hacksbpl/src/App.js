import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
class App extends Component
{
    render()
    {
        return (
            <div>
                <Navbar color="primary" light toggleable fixed="bottom" className="sticky-top">
                    <NavbarBrand href="/">HackSBPL</NavbarBrand>
                    <NavbarToggler />
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem><NavLink href="/">Shivan</NavLink></NavItem>
                            <NavItem><NavLink href="/">Shivan</NavLink></NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/">Shivan</NavLink></NavItem>
                            <NavItem><NavLink href="/">Shivan</NavLink></NavItem>
                        </Nav>
                    </Collapse>    
                </Navbar>
            </div>
        );
    }
}

export default App;
