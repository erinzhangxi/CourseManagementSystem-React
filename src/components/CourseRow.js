import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
  constructor(props) {
    super(props)
    this.state={id:''};
  }


  ComponentDidMount() {
    this.setState({id: this.props.course.id});
  }

  render() {
    return (

      <div className="container">
      <div className="row">
        <div className="col-6">

        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
        </div>
        <div className="col-2">
        me
        </div>
        <div className="col-2">
        {this.props.course.modified}
        </div>
        <div className="col-2">
        <span className="float-right">
         <button onClick={() =>
       {this.props.delete(this.props.course.id)}}><i className="fa fa-trash"></i></button>
        <button><i className="fa fa-pencil"></i></button>
        </span>
        </div>
        </div>
        </div>



    )
  }
}
export default CourseRow;
