import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/courses">Course Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </nav>

                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                    {/*<Route path="/course/:courseId/modules"*/}
                           {/*component={ModuleList}>*/}
                    {/*</Route>*/}
                    {/*<Route path="/course/:courseId/modules/lesson/:lessonId"*/}
                           {/*component={TopicPill}>*/}
                    {/*</Route>*/}
                    {/*<Route path="/lesson/:lessonId/widget"*/}
                           {/*component={WidgetList}>*/}
                    {/*</Route>*/}
                </div>
            </Router>

        )
    }
}
