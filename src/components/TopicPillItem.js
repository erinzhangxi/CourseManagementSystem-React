import React from 'react';
import { Link } from 'react-router-dom'
import App from './../containers/WidgetList'


export default class TopicPillItem
    extends React.Component {

    render() {
        return (
            <li className="nav-item active">


                <Link to={`/lesson/${this.props.lesson}/widget/${this.props.widget}`}>
                   <p>widget goes here</p>

                <App/>

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
