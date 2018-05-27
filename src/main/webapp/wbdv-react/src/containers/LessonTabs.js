import React,  {Component}  from 'react'
import LessonService from "../services/LessonService";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LessonEditor from "./LessonEditor";
import LessonTabItem from './../components/LessonTabItem'

export default class LessonTabs
<<<<<<< HEAD:src/containers/LessonTabs.js
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
                  this.findAllLessonsForModule
                  (this.props.moduleId, this.props.courseId )
              });
      }

      renderLessons() {
        if(this.state) {
          console.log('THIS.STATE');
          console.log(this.state);
          var lessons = this.state.lessons.map((lesson) => {
            console.log("RENDERING LESSON");
            console.log({lesson});
              return

                {/*  <LessonTabItem key={lesson.id}
                          lesson={lesson}
                          moduleId={this.props.moduleId}
                          courseId={this.props.courseId}
                          delete={this.deleteLesson}/>
              TODO Add lesson tab item here
    */}

                  <li className="nav-item">
                    <a className="nav-link"
                          href="#">{lesson.title}
                    </a>
                  </li>

            }
          )
        }
        return (
          lessons
        )
      }

    render() {
      return(
      <div>
      <h1>this is rendering lessons</h1>
        <ul className="nav nav-tabs">

        {this.renderLessons()}

        <a className="nav-link active"
        href="#"><i className="fa fa-plus"></i></a>
=======
    extends React.Component {
    render() { return(
        <ul className="nav nav-tabs">
        <li className="nav-item"><a className="nav-link active"
        href="#">Active Tab</a></li>
        <li className="nav-item"><a className="nav-link"
        href="#">Another Tab</a></li>
>>>>>>> f07d652a7d8f1ef0a769598b4faad8216dd82e11:src/main/webapp/wbdv-react/src/containers/LessonTabs.js
        </ul>

        {/*TODO Add Lesson Editor here somewhere*/}

</div>
    );}}
