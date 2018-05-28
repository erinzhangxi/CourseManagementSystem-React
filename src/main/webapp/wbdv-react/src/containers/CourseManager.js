import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import ModuleEditor from './ModuleEditor'
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
      <h1>Course Manager</h1>

      <Route path="/courses"
      component={CourseList}>
      </Route>
      <Route path="/course/:courseId"
      component={CourseEditor}>
      </Route>
      <Route path="/course/:courseId/module/:moduleId"
      component={ModuleEditor}>
      </Route>

    )
  }
}
