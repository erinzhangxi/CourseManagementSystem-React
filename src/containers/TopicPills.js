import React from 'react';
import TopicService from "../services/TopicService"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TopicPillItem from "../components/TopicPillItem";


export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.topicService = TopicService.instance;
        this.setModuleId = this.setModuleId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
    }

    setLessonId(lessonId) { this.setState({lessonId:lessonId});}
    setModuleId(moduleId) { this.setState({moduleId: moduleId});}
    setCourseId(courseId) { this.setState({courseId: courseId});}
    setTopicTitle(event) {
        this.setState({topic: {
                title: event.target.value
            }});
    }
    setTopics(topics) {
        this.setState({topics: topics});
    }
    createTopic() {
        let newTopic = this.state.topic;
        this.topicService
            .createTopic(this.props.courseId, this.props.moduleId, this.props.lessonId, newTopic)
            .then(() => {
                this.findAllTopicsForLesson();
            });
    }
    deleteTopic(topicId) {
        if(window.confirm('Are you sure you want to delete?')) {
            this.topicService
                .deleteTopic(topicId)
                .then(() => {
                    this.findAllTopicsForLesson();
                });
        }
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setLessonId(this.props.lessonId);
        this.setModuleId(this.props.moduleId);
    }


    componentWillReceiveProps(newProps) {
        this.setLessonId(newProps.lessonId);
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId);
    }
    findAllTopicsForLesson() {
        let courseId = this.props.courseId;
        let moduleId = this.props.moduleId;
        let lessonId = this.props.lessonId;

        if ((courseId !== undefined) && (moduleId !== undefined) && (lessonId !== undefined)) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) => {this.setTopics(topics);});
        } else {
            this.setTopics([])
        }
    }
    renderTopics() {
        let courseId = this.props.courseId;
        let moduleId = this.props.moduleId;
        let lessonId = this.props.lessonId;
        let topics = null;

        console.log("TOPIC PILLS");
        console.log(this.state.topics);
        if (this.state) {
            topics = this.state.topics.map((topic) => {
                return <TopicPillItem key={topic.id}
                                      topic={topic}
                                      lessonId={this.props.lessonId}
                                      moduleId={this.props.moduleId}
                                      courseId={this.props.courseId}
                                      delete={this.deleteTopic}/>
            });
        }
        return (
            topics
        )
    }
    render() {
        if(this.state.topics === null) {
            return null;
        } else {
            return (
                <div>
                    <ul className="nav nav-pills justify-content-right" >
                        {this.renderTopics()}
                        <li id="addTopicFld" className="nav-item">
                            <a className="nav-link" href="localhost:3000/courses/:courseId/module/:moduleId">
                                <div className='row'>
                                    <div className='col-8'>
                                        <input className='form-control form-control-sm'
                                               id='topicTitleFld'
                                               placeholder='New Topic'
                                               value={this.state.topic.title}
                                               onChange={this.setTopicTitle}/>
                                    </div>
                                    <div className='col-1'>
                                        <button className='btn btn-success btn-sm'
                                                onClick={this.createTopic}>
                                            <i className="fa fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            )
        }
    }
}
