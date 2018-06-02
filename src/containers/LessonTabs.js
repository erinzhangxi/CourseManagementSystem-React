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
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    setLessonId(lessonId) {
        this.setState({lessonId:lessonId});
    }
    componentDidMount() {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setLessonId(newProps.lessonId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setState({lessons: lessons});
            })
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
            <Router>
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
                        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/" component={LessonEditor}></Route>
                    </div>

                </div>
            </Router>
        );}}
