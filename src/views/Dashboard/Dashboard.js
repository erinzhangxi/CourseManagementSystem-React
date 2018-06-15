import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from './../../containers/CourseList'
import CourseEditor from './../../containers/CourseEditor'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {courses: ''};
    }

    render() {
        return (
            <Router>
                <div className="animated fadeIn">

                    <CourseList/>

                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>

                </div>
            </Router>
        )
    }
}

export default Dashboard;
