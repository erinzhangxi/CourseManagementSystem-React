import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
            {this.props.title}
            <span className="float-right">
             <button><i className="fa fa-trash"></i></button>
            <button><i className="fa fa-pencil"></i></button>
            </span>
            </li>
    );}}
