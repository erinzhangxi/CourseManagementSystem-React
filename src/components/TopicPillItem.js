import React from 'react';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {WidgetContainer} from "./../containers/WidgetList";

export default class TopicPillItem
    extends React.Component {

    render() {
        return (
            <li className="nav-item active">
                <div className='row'>
                    <div className='col-8'>
                        <Link to={`/lesson/${this.props.lessonId}/widget`}>
                            <Route path="/lesson/:lessonId/widget"
                            component={WidgetContainer}>
                            </Route>
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

