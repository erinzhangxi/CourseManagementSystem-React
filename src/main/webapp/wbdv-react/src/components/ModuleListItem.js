import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
            {this.props.module.title}
            <span className="float-right">
             <button onClick={() =>
           {this.props.delete(this.props.module.id)}}><i className="fa fa-trash"></i></button>
            <button><i className="fa fa-pencil"></i></button>
            </span>
            </li>
    );}}
