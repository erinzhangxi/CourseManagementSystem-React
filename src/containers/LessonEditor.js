import React,  {Component} from 'react';
import TopicPills from './TopicPills'
import {Route} from 'react-router-dom'
import TopicEditor from "./TopicEditor";
import LessonService from "../services/LessonService";


export default class LessonEditor extends Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.lessonService = LessonService.instance;

        this.state = { courseId: '', moduleId: '', lessonId:''
        };}

    setCourseId(courseId) { this.setState({courseId: courseId});}
    setModuleId(moduleId) { this.setState({moduleId: moduleId});}
    setLessonId(lessonId) {this.setState({lessonId: lessonId});}

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        if (this.props !== newProps) {
            this.setCourseId(newProps.match.params.courseId);
            this.setModuleId(newProps.match.params.moduleId);
            this.setLessonId(newProps.match.params.lessonId);

        }
    }

    render() {
        return (
            <div>
                <TopicPills moduleId={this.state.moduleId} courseId={this.state.courseId} lessonId={this.state.lessonId}/>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/" component={TopicEditor}></Route>

                </div>
            </div>
        )}}
