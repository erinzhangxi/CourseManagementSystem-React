import React,  {Component}  from 'react'
import LessonService from "../services/LessonService";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LessonTabItem from './../components/LessonTabItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LessonEditor from "./LessonEditor";

export default class LessonTabs
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: { title: '' },
            lessons: []
        };
        this.lessonService = LessonService.instance;
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.setLessons = this.setLessons.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        console.log("lesson tabs receive new props");
        if (this.props !== newProps) {
            this.setCourseId(newProps.courseId);
            this.setModuleId(newProps.moduleId);
            this.setLessonId(newProps.lessonId);
            this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        }
    }

    setModuleId(moduleId) { this.setState({moduleId: moduleId}); }
    setCourseId(courseId) { this.setState({courseId: courseId}); }
    setLessonId(lessonId) { this.setState({lessonId:lessonId}); }

    findAllLessonsForModule(courseId, moduleId) {
        if ((courseId != 'undefined') && (moduleId != 'undefined')) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setState({lessons: lessons});
            })} else {
            this.setLessons([]);

        }
    }
    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    createLesson() {
        let lesson = this.state.lesson;
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
    }

    deleteLesson(courseId, moduleId, lessonId) {
        if (window.confirm('Are you sure you want to delete?')) {
            this.lessonService
                .deleteLesson(courseId, moduleId, lessonId)
                .then(() => {
                    this.findAllLessonsForModule(courseId, moduleId)
                });
        }
    }

    renderLessons() {
        let lessons = null;
        let deleteLesson = this.deleteLesson;
        let courseId = this.state.courseId;
        let moduleId = this.state.moduleId;
        if(this.state) {
             lessons = this.state.lessons.map((lesson) => {
                return <LessonTabItem key={lesson.id}
                                      lesson={lesson}
                                      moduleId={moduleId}
                                      courseId={courseId}
                                      delete={deleteLesson}
                                        lessonId={lesson.id}/>;
            });
            return (
                lessons
            )
        }}

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    render() {
        return(
                <div>

                    <ul className="nav nav-tabs">
                        {this.renderLessons()}

                        <li className="nav-item">

                            <input onChange={this.titleChanged}
                                   value={this.state.lesson.title}
                                   placeholder="title"
                                   className="form-control"/>
                            <span className="float-right">
                            <a className="nav-link" href="#" onClick={this.createLesson}>
                                <i className="fa fa-plus"></i></a>
                            </span>
                        </li>

                    </ul>
                    <br/>
                    <div className='col-8'>

                    </div>

                </div>
        );}}
