import React from 'react';
import { Link } from 'react-router-dom'

export default class TopicPillItem
    extends React.Component {

    render() {
        return (
            <li className="nav-item active">


            <Link className="nav-link"
        to={`/course/`+ this.props.courseId+ `/module/`+this.props.moduleId+ `/lesson/`+this.props.lessonId}
        role="pill"
        data-toggle="pill" >

            <div className='row'>
            <div className='col-8'>
            {this.props.topic.title}
            </div>

            <div className='col-1'>
            <button onClick={() => {this.props.delete(this.props.topic.id)}}
        className='btn btn-danger btn-sm'>
            <i className="fa fa-minus"/>
            </button>
            </div>
            </div>
    </Link>





            </li>
    );}}
