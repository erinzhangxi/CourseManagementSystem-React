import React, {Component} from 'react'
import ModuleList from './ModuleList'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LessonEditor from './LessonEditor'

export default class CourseManager
extends Component {
  constructor(props) {
    super(props);
    this.state = {courses: ''};
  }

  render() {
    return (
        <html>
         <Router>
          <div className="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href="#">Course Manager</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

    </ul>

  </div>
</nav>


      <Route path="/courses"
      component={CourseList}>
      </Route>
      <Route path="/course/:courseId"
      component={CourseEditor}>
      </Route>
      <Route path="/course/:courseId/modules"
      component={ModuleList}>
      </Route>
      </div>
      </Router>
      </html>
    )
  }
}
