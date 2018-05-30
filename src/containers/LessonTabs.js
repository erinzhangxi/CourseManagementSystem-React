import React,  {Component}  from 'react'
import LessonService from "../services/LessonService";
import {BrowserRouter as Router} from 'react-router-dom'
import LessonTabItem from './../components/LessonTabItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

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

    createLesson() {
        let lesson = this.state.lesson;
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, lesson)
            .then(() => {
                this.findAllLessonsForModule();
            });
    }

    deleteLesson(lessonId) {
        if (window.confirm('Are you sure you want to delete?')) {
            this.lessonService
                .deleteLesson(lessonId)
                .then(() => {
                    this.findAllLessonsForModule()
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
                console.log("RENDERING LESSON");
                console.log({lesson});
                return <LessonTabItem key={lesson.id}
                                      lesson={lesson}
                                      moduleId={moduleId}
                                      courseId={courseId}
                                      delete={deleteLesson}/>;
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

                    </div>

                </div>
            </Router>
        );}}
