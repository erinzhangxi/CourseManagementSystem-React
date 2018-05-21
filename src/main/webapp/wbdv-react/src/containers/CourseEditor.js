import React from 'react'
import ModuleList from './ModuleList'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'
import CourseService from "../services/CourseService";

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
    console.log("COMPONENT DID MOUNT");
    this.selectCourse
    (this.props.match.params.courseId);
    console.log(this.state.courseId);
    this.renderCourseName(this.props.match.params.courseId);
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
      .then(() => { this.renderCourseName(); });
  }

  renderCourseName(courseId) {
    console.log("render course name");
    console.log(this.state.course);
    this.courseService
      .fetchCourse(courseId)
      .then((fetchedCourse) => {
        console.log(fetchedCourse.title);
        this.setState({course: fetchedCourse});
        this.setState({courseName: fetchedCourse.title});
        return fetchedCourse.title;
      })
  }

  render() {
    return (
    <div>
    <form>
    <div className="form-group">
      <label htmlFor="courseName">Course Name: </label>
        {this.state.courseName}
        <input type="courseName"
              className="form-control"
              id="courseName"
              aria-describedby="courseNameHelp"
              placeholder="Enter course name"
              onChange={this.courseNameChange}/>
        <button type="button"
                className="btn btn-primary"
                onClick={this.updateCourseName}>Update</button>
        <small id="courseNameHelp" className="form-text text-muted">Enter the course name you want to replace with</small>
    </div>
    </form>

      <h2>Editing course: {this.state.courseId}</h2>
      <div className="row">
        <div className="col-4">
          <ModuleList2 courseId={this.state.courseId}/>
        </div>
        <div className="col-8">
          <LessonTabs/>
        </div>
      </div>
    </div>
  );}}
