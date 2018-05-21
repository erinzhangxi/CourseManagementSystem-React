import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello'
import CourseManager from './containers/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Hello from './components/Hello'
import Stateless from './components/Stateless'
import ModuleListItem from './components/ModuleListItem'
import ModuleList2 from './containers/ModuleList2'
import App from './examples/App'

ReactDOM.render(
    <div>
    <CourseManager/>
{/*<ModuleList2/>*/}
{/*<Stateless message="this is a stateless component"/>*/}
    </div>,
    document.getElementById('root')
);
