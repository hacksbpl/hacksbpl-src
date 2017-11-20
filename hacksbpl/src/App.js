import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler, Jumbotron, Button } from 'reactstrap';
import logo from "./logo.png";
import background from "./background.jpg";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Icon } from 'react-fa';
class App extends Component
{
    constructor()
    {
        super()
        configureAnchors({ offset: -60 })
    }
    render()
    {
        return (
            <div>
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    backgroundImage: "url(" + background + ")",
                    height: window.innerHeight,
                    width: window.innerWidth,
                    filter: "blur(5px)",
                    transform: "scale(1.5)",
                    backgroundSize: "100% auto"
                }}></div>
                <div id="body-top" style={{ height: 110, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>                    
                    <ScrollableAnchor id="welcome">
                        <h1 className="display-2" style={{ color: "white", textAlign: "center", margin: 0 }}></h1>
                    </ScrollableAnchor>        
                </div>
                <Navbar id="body-nav" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} inverse toggleable fixed="bottom" className="sticky-top">
                    <NavbarToggler />
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto" navbar style={{ paddingLeft: 125, fontSize: 20, marginTop: 15, fontFamily: "mlh" }}>
                            <NavItem><NavLink href="#about">About</NavLink></NavItem>
                            <NavItem><NavLink href="#schedule">Schedule</NavLink></NavItem>
                        </Nav>    
                        <NavbarBrand href="#welcome" navbar style={{ /*position: "fixed", top: 0, left: "calc(50% - 100px)",*/ fontSize: 75, fontFamily: "mlh", maxHeight: 75 }}>
                            <p style={{ position: "relative", display: "inline", top: -40 }}>Hack</p>
                            <img src={logo} alt="HackSB" style={{ position: "relative", width: 150, top: -42, marginLeft: -20 }} />
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar style={{ paddingRight: 125, fontSize: 20, marginTop: 15, fontFamily: "mlh" }}>
                            <NavItem><NavLink href="#faqs">FAQs</NavLink></NavItem>
                            <NavItem><NavLink href="#sponsers">Sponsors</NavLink></NavItem>
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
                <div id="body-bottom">
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: "rgba(0, 0, 0, 0.5)", height: window.innerHeight - 110 - 90, marginBottom: 0, textAlign: "center" }}>
                        <h1 className="display-3" style={{ textAlign: "center", marginTop: ((window.innerHeight - 110 - 90) / 2) - 200, color: "white" }}>HackSB Spring 2018</h1>
                        <h1 className="display-5" style={{ textAlign: "center", color: "white" }}>April 6th-7th, 2018</h1>
                        <Button outline color="danger" href="#about" style={{ borderRadius: 100 }}><Icon name="arrow-down"/></Button>
                    </Jumbotron>
                    <Jumbotron style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        <ScrollableAnchor id="about">
                            <h1 className="display-3" style={{ paddingTop: 40 }}>About</h1>
                        </ScrollableAnchor>        
                    </Jumbotron>
                    <div id="top" style={{ height: 2000 }}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
