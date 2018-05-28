import React,  {Component}  from 'react'
import LessonService from "../services/LessonService";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LessonEditor from "./LessonEditor";
import LessonTabItem from './../components/LessonTabItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class LessonTabs
extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      moduleId: '',
      lessons: []
    };
    this.lessonService = LessonService.instance;
    this.setModuleId = this.setModuleId.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
  }
  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }
  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }
  componentDidMount() {
    this.setModuleId(this.props.moduleId);
    this.setCourseId(this.props.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.setModuleId(newProps.moduleId);
    this.setCourseId(newProps.courseId);
    this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
  }

  findAllLessonsForModule() {
    this.lessonService
    .findAllLessonsForModule(this.props.courseId, this.props.moduleId)
    .then((lessons) => {
      this.setState({lessons: lessons});
    })
  }

  deleteLesson(lessonId) {
    console.log("In delete lesson");
    this.lessonService
    .deleteLesson(lessonId)
    .then(() => {
      this.findAllLessonsForModule(this.props.moduleId, this.props.courseId )
    });
  }

  renderLessons() {
    if(this.state) {
      var lessons = this.state.lessons.map((lesson) => {
        console.log("RENDERING LESSON");
        console.log({lesson});
        return <LessonTabItem key={lesson.id}
                          lesson={lesson}
                          moduleId={this.props.moduleId}
                          courseId={this.props.courseId}
                          delete={this.deleteLesson}/>;
      });
      return (
        lessons
      )
    }}

    renderTopics() {
      return <Route path='/course/:courseId/module/:moduleId/lesson/:lessonId' component={LessonEditor}/>;
    }
    render() {
      return(
        <Router>
        <div>
        <ul className="nav nav-tabs">
        {this.renderLessons()}

        <li className="nav-item">
        <a className="nav-link" href="#"><i className="fa fa-plus"></i></a>
        </li>
        </ul>
        <br/>
        <div className='col-8'>
        {this.renderTopics()}
        </div>

        </div>
        </Router>
      );}}
