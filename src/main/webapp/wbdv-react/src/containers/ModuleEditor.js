import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import LessonService from "../services/LessonService";

export default class ModuleEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {module:'',
                  moduleId: '',
                  moduleName:''};
    this.lessonService = LessonService.instance;

  }

  render() {
    return (
    <div>

      <h2>Editing Module: {this.state.courseId}</h2>
      <div className="row">
        <div className="col-4">
          Module List goes here?
        </div>
        <div className="col-8">
          <LessonTabs/>
        </div>
      </div>
    </div>
  );}}
