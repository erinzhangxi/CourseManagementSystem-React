import React from 'react'
import LessonTabs from './LessonTabs'
import LessonService from "../services/LessonService";
import {Route} from 'react-router-dom'
import LessonEditor from './LessonEditor'
import ModuleService from "../services/ModuleService"

const title = {
    "fontFamily":"Arial",
    "fontWeight": 'bold'
};

export default class ModuleEditor
extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        module:'',
        moduleId: '',
        courseId: '',
        moduleName:'',
        lessonId: ''};
    this.lessonService = LessonService.instance;
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.findModuleById = this.findModuleById.bind(this);
    this.moduleService = ModuleService.instance;
  }

  setCourseId(courseId) {
      this.setState( {courseId: courseId} );}
  setModuleId(moduleId) {
      this.setState({ moduleId: moduleId});}
  setLessonId(lessonId) {
      this.setState({ lessonId: lessonId});}

  componentDidMount() {
    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
    this.setLessonId(this.props.match.params.lessonId);
  }

  componentWillReceiveProps(newProps) {
      this.setCourseId(newProps.match.params.courseId);
      this.setModuleId(newProps.match.params.moduleId);
      this.setLessonId(newProps.match.params.lessonId);
      this.findModuleById(newProps.match.params.moduleId);
  }

    findModuleById(moduleId) {
      if (moduleId !== 'undefined')
            this.moduleService.findModuleById(moduleId)
                .then((module) => {
                    this.setState({module: module});
                });
    }

          render() {
            return (
              <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h4 style={title}>Module {this.props.match.params.moduleId}</h4>
              </nav>
              <LessonTabs moduleId={this.props.match.params.moduleId}
                          courseId={this.props.match.params.courseId}/>

<br/>
                  <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={LessonEditor}></Route>
              </div>
            );}}
