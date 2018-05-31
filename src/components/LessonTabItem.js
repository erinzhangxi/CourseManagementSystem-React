import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class LessonTabItem extends Component {

    render() {
        return (
            <Router>
                <div>
                    <li className="nav-item">
                        <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                            {this.props.lesson.title}
                        </Link>

                        <div className="pull-right">
                            <button onClick={() =>{this.props.delete(this.props.lesson.id)}}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </li>
                </div>

            </Router>

        )}
}

export default LessonTabItem;
