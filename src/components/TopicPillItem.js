import React from 'react';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {WidgetContainer} from "./../containers/WidgetList";

export default class TopicPillItem
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className="nav-item active">
                <div className='row'>
                    <div className='col-8'>
                        <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}/widget`}>
                            {this.props.topic.title}
                        </Link>
                    </div>

                    <div className='col-1'>
                        <button onClick={() => {this.props.delete(this.props.topic.id)}}
                                className='btn btn-danger btn-sm'>
                            <i className="fa fa-minus"/>
                        </button>
                    </div>
                </div>

            </li>
        );}}

