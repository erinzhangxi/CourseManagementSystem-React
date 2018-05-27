import React, {Component} from 'react';
import LessonEditor from "./../containers/LessonEditor";
import { Route, Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class LessonTabItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item btn btn-light">
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>{this.props.lesson.title}</Link>
                <div className="pull-right">
                    <button onClick={() =>{this.props.delete(this.props.lesson.id)}}>
                        <i className="fa fa-times"></i></button></div></li>

    )}
}

export default LessonTabItem;
