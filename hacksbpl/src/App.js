import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler, Jumbotron, Button, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
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
        configureAnchors({ offset: -60 });
        let self = this;
        window.addEventListener("resize", (e) =>
        {
            self.setState({ IGNOREMEFAM: "" });
        });
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
                            <NavItem><NavLink href="#sponsors">Sponsors</NavLink></NavItem>
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
                        }} href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=red" target="_blank">
                            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/red.svg" alt="Major League Hacking 2017 Hackathon Season" style={{ width: 100 }} />
                        </a>
                    </Collapse>
                </Navbar>
                <div id="body-bottom">
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", height: window.innerHeight - 110 - 90, marginBottom: 0, textAlign: "center" }}>
                        <h1 className="display-3" style={{ textAlign: "center", marginTop: ((window.innerHeight - 110 - 90) / 2) - 200, color: "white" }}>HackSB Spring 2018</h1>
                        <h1 className="display-5" style={{ textAlign: "center", color: "white" }}>April 6th-7th, 2018</h1>
                        <Button outline color="primary" href="#about" style={{ marginTop: 100, borderRadius: 100 }}><Icon name="chevron-left"/> Contact</Button>
                        <Button outline color="danger" href="#about" style={{ marginLeft: 10, marginRight: 10, marginTop: 150, borderRadius: 100 }}>Learn More <Icon name="chevron-down" /></Button>
                        <Button outline color="primary" href="#about" style={{ marginTop: 100, borderRadius: 100 }}>Register <Icon name="chevron-right"/></Button>
                    </Jumbotron>
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0.25)", color: "white", marginBottom: 0, paddingBottom: 150 }}>
                        <ScrollableAnchor id="about">
                            <h1 className="display-3" style={{ paddingTop: 60, color: "rgba(127, 183, 89, 1)" }}>About</h1>
                        </ScrollableAnchor>
                        <h1 style={{ color: "rgba(26, 167, 245, 1)", paddingTop: 50, paddingLeft: "10%", textAlign: "left" }}>
                            What is a Hackathon?
                        </h1>
                        <p className="lead" style={{ textAlign: "justify", marginLeft: "10%", width: "60%" }}>
                            <i>
                                A hackathon is an invention marathon. Programmers, designers, builders and more come together to learn, build, and share their creations over the course of a few days. Hackathons are not limited to computer science majors — anyone who has an interest in technology and is eager to learn can participate in a hackathon. </i>-MLH
                        </p>
                        <h1 style={{ color: "rgba(26, 167, 245, 1)", paddingTop: 25, marginLeft: "20%", textAlign: "left" }}>
                            HackSB?
                        </h1>
                        <p className="lead" style={{ textAlign: "justify", marginLeft: "20%", width: "50%" }}>
                            HackSB is a 24-hour hackathon for high school students. We challenge you to create, innovate, and learn something awesome. Expand your skills and meet new friends!
                        </p>
                        <h1 style={{ color: "rgba(26, 167, 245, 1)", paddingTop: 25, marginLeft: "30%", textAlign: "left" }}>
                            Where?
                        </h1>
                        <p className="lead" style={{ textAlign: "justify", marginLeft: "30%", width: "40%" }}>
                            South Brunswick Public Library:<br/><i>110 Kingston Ln, Monmouth Junction, NJ 08852</i>
                        </p>
                    </Jumbotron>
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 1)", color: "white", marginBottom: 0, paddingBottom: 125 }}>
                        <ScrollableAnchor id="schedule">
                            <h1 className="display-3" style={{ paddingTop: 60 }}>Schedule</h1>
                        </ScrollableAnchor>
                        <h1 style={{ textAlign: "center" }}>Nothing to see here. Check again soon!</h1>
                    </Jumbotron>
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0)", color: "white", marginBottom: 0, paddingBottom: 125 }}>
                        <ScrollableAnchor id="faqs">
                            <h1 className="display-3" style={{ paddingTop: 60 }}>FAQs</h1>
                        </ScrollableAnchor>
                        <Card inverse style={{ borderRadius: 0, width: 500, display: "inline-block", marginLeft: "calc(50% - 525px)" }}>
                            <CardImg width="100%" src="http://tricks-collections.com/wp-content/uploads/2015/10/business-needs-a-biometric-time-clock.jpg" />
                            <CardImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", margin: -1 }}>
                                <CardTitle>Who can attend?</CardTitle>
                                <CardText>All high school students are welcome, even if you do not attend SBHS. If you are a college student, and interested in mentoring, please contact us!</CardText>
                                <CardText><small>Please direct all mentoring inquiries to <a href="mailto:sbcompsciclub@gmail.com">sbcompsciclub@gmail.com</a></small></CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse style={{ borderRadius: 0, width: 500, display: "inline-block", marginLeft: 50 }}>
                            <CardImg width="100%" src="https://wallpaper.wiki/wp-content/uploads/2017/05/Laptop_Keypad_Closeup_Wallpaper.jpg" />
                            <CardImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", margin: -1 }}>
                                <CardTitle>Do I need any prior experience?</CardTitle>
                                <CardText>All high school students are welcome, even if you do not attend SBHS. If you are a college student, and interested in mentoring, please contact us!</CardText>
                                <CardText><small>Please direct all mentoring inquiries to <a href="mailto:sbcompsciclub@gmail.com">sbcompsciclub@gmail.com</a></small></CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse style={{ borderRadius: 0, width: 500, display: "inline-block", marginLeft: "calc(50% - 525px)", marginTop: 50 }}>
                            <CardImg width="100%" src="http://thewallpaper.co/wp-content/uploads/2016/10/Hd-Laptop-wallpapers-hd-desktop-wallpapers-amazing-images-background-photos-smart-phone-background-photos-widescreen-desktop-backgrounds-colourful-ultra-hd-2560x1600-768x480.jpg" />
                            <CardImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", margin: -1 }}>
                                <CardTitle>What should I bring?</CardTitle>
                                <CardText>All high school students are welcome, even if you do not attend SBHS. If you are a college student, and interested in mentoring, please contact us!</CardText>
                                <CardText><small>Please direct all mentoring inquiries to <a href="mailto:sbcompsciclub@gmail.com">sbcompsciclub@gmail.com</a></small></CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse style={{ borderRadius: 0, width: 500, display: "inline-block", marginLeft: 50, marginTop: 50 }}>
                            <CardImg width="100%" src="http://s2.quickmeme.com/img/fc/fc7e1b09bcb54f86aa53394b8047e95261357c74410860202c8d6f3ea2787b53.jpg" />
                            <CardImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", margin: -1 }}>
                                <CardTitle>Can I win anything?</CardTitle>
                                <CardText>All high school students are welcome, even if you do not attend SBHS. If you are a college student, and interested in mentoring, please contact us!</CardText>
                                <CardText><small>Please direct all mentoring inquiries to <a href="mailto:sbcompsciclub@gmail.com">sbcompsciclub@gmail.com</a></small></CardText>
                            </CardImgOverlay>
                        </Card>
                    </Jumbotron>
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0)", color: "white", marginBottom: 0, paddingBottom: 125 }}>
                        <ScrollableAnchor id="sponsors">
                            <h1 className="display-3" style={{ paddingTop: 60 }}>Sponsors</h1>
                        </ScrollableAnchor>
                        <h1 style={{ textAlign: "center" }}>Nothing to see here. Check again soon!</h1>
                    </Jumbotron>
                    <Jumbotron style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: 20, paddingBottom: 10, borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0.25)", color: "rgba(255, 255, 255, 0.5)", marginBottom: 0, textAlign: "center" }}>
                        <p className="lead">Copyright © 2018 HackSB Team. All rights reserved.</p>
                        <p className="lead"><i>Created by Shivan Modha</i></p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default App;
