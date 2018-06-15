import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './../components/Login'
import Signup from './../components/Signup'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default class CourseManager
    extends Component {
    constructor(props) {
        super(props);
        this.state = {courses: ''};
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">

                    <Navbar inverse fluid >

                        <Navbar.Header>
                            <Navbar.Brand>
                                <a className="navbar-brand" href="/courses">Course Manager</a>
                            </Navbar.Brand>
                        </Navbar.Header>


                        <Nav pullRight>
                            <NavItem eventKey={1} href="/signup">Signup</NavItem>
                            <NavItem eventKey={2} href="/login">Already have an account? Log in herer</NavItem>
                        </Nav>


                    </Navbar>

                    <Route path="/courses/"
                           component={CourseList}>
                    </Route>

                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                    <Route exact path="/login" name="Login Page" component={Login}/>
                    <Route exact path="/signup" name="Register Page" component={Signup}/>

                </div>
            </Router>

        )
    }
}
