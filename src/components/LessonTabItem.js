import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class LessonTabItem extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
                <div>
                    <li className="nav-item">

                        <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                            {this.props.lesson.title}
                        </Link>

                        <div className="pull-right">
                            <button onClick={() =>{this.props.delete(this.props.courseId,
                                this.props.moduleId, this.props.lessonId)}}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </li>
                </div>

        )}
}

export default LessonTabItem;
