import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import styles from './style.css';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {WidgetReducer} from "./reducers/WidgetReducer"
import {WidgetContainer} from './components/Widget'


let store = createStore(WidgetReducer)

ReactDOM.render(

    <Provider store={store}>
    <CourseManager style={styles}/>
    </Provider>,
    document.getElementById('root')
);
