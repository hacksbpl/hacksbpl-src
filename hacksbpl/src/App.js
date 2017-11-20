import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import logo from "./logo.png";
import background from "./background.jpg";
class App extends Component
{
    render()
    {
        return (
            <div style={{ backgroundImage: "url(" + background + ")" }}>
                <Navbar style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }} inverse toggleable fixed="bottom" className="sticky-top">
                    <NavbarToggler />
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto" navbar style={{ paddingLeft: 125, fontSize: 20, marginTop: 15, fontFamily: "mlh" }}>
                            <NavItem><NavLink href="/">About</NavLink></NavItem>
                            <NavItem><NavLink href="/">Schedule</NavLink></NavItem>
                        </Nav>    
                        <NavbarBrand href="/" navbar style={{ fontSize: 75, fontFamily: "mlh", maxHeight: 75 }}>
                            <p style={{ position: "relative", display: "inline", top: -40 }}>Hack</p>
                            <img src={logo} alt="HackSB" style={{ position: "relative", width: 150, top: -42, marginLeft: -20 }} />
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar style={{ paddingRight: 125, fontSize: 20, marginTop: 15, fontFamily: "mlh" }}>
                            <NavItem><NavLink href="/">FAQs</NavLink></NavItem>
                            <NavItem><NavLink href="/">Sponsors</NavLink></NavItem>
                        </Nav>
                        <a id="mlh-trust-badge" style={{
                            display: "block",
                            maxWidth: 100,
                            minWidth: 60,
                            position: "fixed",
                            right: 50,
                            top: 0,
                            width: 10,
                            zIndex: 10000
                        }} href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" target="_blank">
                            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2017 Hackathon Season" style={{ width: 100 }} />
                        </a>
                    </Collapse>
                </Navbar>
                <div>
                    <div id="top" style={{ height: 2000 }}>
                        shivan
                    </div>    
                </div>
            </div>
        );
    }
}

export default App;
