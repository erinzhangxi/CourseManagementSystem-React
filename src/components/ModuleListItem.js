import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
  
    render() {
        return (
            <li className="list-group-item">
            <Link
                className={(this.props.current === this.props.module.id) ?
                    'text-black btn btn-block btn-dark active' : 'text-black btn btn-block btn-light'}
                onClick={() => {
                    this.props.setCurrent(this.props.module.id)
                }}
                to={`/course/${this.props.course}/module/${this.props.moduleId}`}>
              {this.props.module.title}
                <span className="float-right">
             <button onClick={() =>
             {this.props.delete(this.props.module.id)}}><i className="fa fa-trash"></i></button>
            <button><i className="fa fa-pencil"></i></button>
            </span>
            </Link>

            </li>
    );}}
