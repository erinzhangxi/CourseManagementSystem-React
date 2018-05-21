import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleListItem from './components/ModuleListItem'
import ModuleList2 from './containers/ModuleList2'
import CourseList from './containers/CourseList'


ReactDOM.render(
    <div>
    <CourseList/>
{/*<ModuleList2/>*/}
{/*<Stateless message="this is a stateless component"/>*/}
    </div>,
    document.getElementById('root')
);
