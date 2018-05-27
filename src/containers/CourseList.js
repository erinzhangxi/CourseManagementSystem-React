import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.instance;
    this.titleChanged = this.titleChanged.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }
  componentDidMount() {
    this.findAllCourses();
  }
  findAllCourses() {
    this.courseService
      .findAllCourses()
      .then((courses) => {
        this.setState({courses: courses});
      })
  }
  renderCourseRows() {
    let courses = null;
    if(this.state) {
      courses = this.state.courses.map((course) => {
          return <CourseRow course={course}
                            key={course.id}
                            delete={this.deleteCourse}/>
        }
      )
    }
    return (
      courses
    )
  }
  titleChanged(event) {
    this.setState({
      course: { title: event.target.value }
    });
  }
  createCourse() {
    this.courseService
      .createCourse(this.state.course)
      .then(() => { this.findAllCourses(); });
  }
  deleteCourse(courseId) {
    this.courseService
      .deleteCourse(courseId);
  }
  render() {
    return (
      <div>
        <h2>Course List</h2>
        <table className="table">
          <thead>
          <tr><th>
          <div className="container">
          <div className="row">
          <div className="col-6">
          Title
          </div>
          <div className="col-2">
          Owned By
          </div>
          <div className="col-2">
          Last modified by me
          </div>
          <div className="col-2">
          Action
          </div>
          </div>
          </div>
        </th></tr>
            <tr>
              <th><input onChange={this.titleChanged}
                         className="form-control" id="titleFld"
                         placeholder="cs101"/></th>
              <th><button onClick={this.createCourse}
                          className="btn btn-primary">
                Add</button></th>
            </tr>
          </thead>
          <tbody>
            {this.renderCourseRows()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CourseList;
