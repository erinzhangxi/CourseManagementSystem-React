import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import styles from './style.css';

ReactDOM.render(

    <div>
    <CourseManager style={styles}/>
    </div>,
    document.getElementById('root')
);
