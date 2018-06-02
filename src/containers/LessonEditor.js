import React,  {Component} from 'react';
import TopicPills from './TopicPills'
import {Route} from 'react-router-dom'
import TopicEditor from "./TopicEditor";
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {WidgetReducer} from "../reducers/WidgetReducer";
import {WidgetContainer} from "./WidgetList";

let store = createStore(WidgetReducer);

export default class LessonEditor extends Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
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
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
    }

    render() {
        return (
            <div>
                <TopicPills moduleId={this.state.moduleId} courseId={this.state.courseId} lessonId={this.state.lessonId}/>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/" component={TopicEditor}></Route>
                    <Provider store={store}>
                        <WidgetContainer/>
                    </Provider>
                </div>
            </div>
        )}}
