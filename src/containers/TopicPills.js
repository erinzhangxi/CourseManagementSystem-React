import React from 'react';
import TopicService from "../services/TopicService"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TopicPillItem from "../components/TopicPillItem";

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicId: '',
            topics: [],
            topic: {title: ''}
        };

        this.setTopicId = this.setTopicId.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.topicService = TopicService.instance;
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
    }

    componentDidMount() {
        this.setTopicId(this.props.topicId);
        this.findAllTopicsForLesson(this.props.courseId, this.props.lessonId, this.props.moduleId);
    }
    componentWillReceiveProps(newProps) {
        this.setTopicId(newProps.topicId);
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId);
        this.renderTopics(newProps.courseId, newProps.moduleId, newProps.lessonId);
    }

    setTopicId(topicId) { this.setState({topicId: topicId}); }
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
                this.findAllTopicsForLesson(this.props.courseId, this.props.moduleId, this.props.lessonId);
            });
    }
    deleteTopic(topicId) {
        if(window.confirm('Are you sure you want to delete?')) {
            this.topicService
                .deleteTopic(topicId)
                .then(() => {
                    this.findAllTopicsForLesson(this.props.courseId, this.props.moduleId, this.props.lessonId);
                });
        }
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        if ((courseId != undefined) && (moduleId != undefined) && (lessonId != undefined)) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) => {this.setTopics(topics);});
        } else {
            this.setTopics([])
        }
    }
    renderTopics(courseId, moduleId, lessonId) {
        let topics;

        if (this.state) {
            topics = this.state.topics.map((topic) => {
                return <TopicPillItem key={topic.id}
                                      topic={topic}
                                      lessonId={this.props.lessonId}
                                      moduleId={this.props.moduleId}
                                      courseId={this.props.courseId}
                                      delete={this.deleteTopic}
                                     topicId={topic.id}/>
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
                    <div>
                    <ul className="nav nav-pills justify-content-right" >
                        {this.renderTopics()}
                        <li id="addTopicFld" className="nav-item">
                            <a className="nav-link" href="api/courses/:courseId/module/:moduleId">
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


                </div>
            )
        }
    }
}
