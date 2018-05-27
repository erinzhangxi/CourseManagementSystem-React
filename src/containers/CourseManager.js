import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import LessonEditor from './LessonEditor'

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
      <Route path="/course/:courseId/module/:moduleId"
      component={ModuleEditor}>
      </Route>
      <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
        component={LessonEditor}/>


      </div>
      </Router>
    )
  }
}
