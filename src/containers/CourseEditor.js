import React from 'react'
import ModuleList from './ModuleList'
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route} from 'react-router-dom'

const title = {
    "fontFamily":"Arial",
    "color": '#A9A9A9'
};

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {course:'',
            courseId: '',
            courseName:''};
        this.courseService = CourseService.instance;
        this.renderCourseName = this.renderCourseName.bind(this);
        this.selectCourse = this.selectCourse.bind(this);
        this.updateCourseName = this.updateCourseName.bind(this);
        this.courseNameChange = this.courseNameChange.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.renderCourseName(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        console.log("course editor receive new props");
        if (newProps.match.params.courseId !== null) {
            this.selectCourse(newProps.match.params.courseId);
        }
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    courseNameChange(event) {
        this.setState({
            courseName: event.target.value
        });
    }

    updateCourseName(){
        this.courseService
            .updateCourseName(this.state.courseId, this.state.courseName, this.state.course)
            .then(() => { this.renderCourseName(this.state.courseId); });
    }

    renderCourseName(courseId) {
        this.courseService
            .fetchCourse(courseId)
            .then((fetchedCourse) => {
                this.setState({course: fetchedCourse});
                this.setState({courseName: fetchedCourse.title});
                return fetchedCourse.title;
            })
    }

    render() {
        return (
                <div>
                    <div className="container-fluid">
                        <form>
                            <div className="form-group" style={title}>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <p><label htmlFor="courseName">COURSE NAME </label></p>
                                        <h4> {this.state.courseName}</h4>
                                    </div>
                                    <div className="col-4">
                                        <p>COURSE ID</p>
                                        <h4>{this.state.courseId}</h4>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="courseName"
                                           className="form-control"
                                           id="courseName"
                                           aria-describedby="courseNameHelp"
                                           placeholder="Edit course name"
                                           onChange={this.courseNameChange}/>
                                    <div className="input-group-append">

                                        <button type="button"
                                                className="btn btn-primary"
                                                onClick={this.updateCourseName}>Update</button>
                                    </div>
                                </div>

                                <small id="courseNameHelp" className="form-text text-muted">Enter the course name you want to replace with</small>
                            </div>
                        </form>
                    </div>
                        <ModuleList courseId={this.props.match.params.courseId}/>


                </div>
        );}}
