import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
  
    render() {
        return (
            <li className="list-group-item">
            <Link to={`/course/${this.props.course}/module/${this.props.moduleId}`}>
              {this.props.module.title}
            </Link>
            <span className="float-right">
             <button onClick={() =>
           {this.props.delete(this.props.module.id)}}><i className="fa fa-trash"></i></button>
            <button><i className="fa fa-pencil"></i></button>
            </span>
            </li>
    );}}
