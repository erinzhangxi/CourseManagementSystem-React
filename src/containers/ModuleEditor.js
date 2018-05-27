import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import LessonService from "../services/LessonService";

export default class ModuleEditor
extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        module:'',
        moduleId: '',
        courseId: '',
        moduleName:''};
    this.lessonService = LessonService.instance;
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
  }

  setCourseId(courseId) {
    this.setState(
      {courseId: courseId}
    );
  }
  setModuleId(moduleId) {
    this.setState({
      moduleId: moduleId
    });
  }

  componentDidMount() {
    this.setCourseId(
      this.props.match.params.courseId);

      this.setModuleId(
        this.props.match.params.moduleId);

        console.log("MODULEEDITOR");
        console.log(this.props.match.params.courseId);
          console.log(this.props.match.params.moduleId);
  }

      componentWillReceiveProps(newProps) {
        this.setCourseId(
          newProps.match.params.courseId);

          this.setModuleId(
            newProps.match.params.moduleId);
          }



          render() {
            return (
              <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h1>Module Editor Course {this.props.match.params.courseId} Module {this.props.match.params.moduleId}</h1>
              </nav>
              <LessonTabs moduleId={this.props.match.params.moduleId} courseId={this.props.match.params.courseId}/></div>
            );}}
