import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class CourseRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
      <tr><td>
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
      </td></tr>
      </Router>
    )
  }
}
export default CourseRow;
