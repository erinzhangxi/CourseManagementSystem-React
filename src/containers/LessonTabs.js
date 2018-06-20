import React,  {Component}  from 'react'
import LessonService from "../services/LessonService";
import LessonTabItem from './../components/LessonTabItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class LessonTabs
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: { title: '' },
            lessons: []
        };
        this.lessonService = LessonService.instance;
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.setLessons = this.setLessons.bind(this);
    }

    componentDidMount() {
        this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        if (this.props !== newProps) {
            this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        }
    }
    findAllLessonsForModule(courseId, moduleId) {
        if ((courseId !== 'undefined') && (moduleId !== 'undefined')) {
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
                this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
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
        let courseId = this.props.courseId;
        let moduleId = this.props.moduleId;
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
