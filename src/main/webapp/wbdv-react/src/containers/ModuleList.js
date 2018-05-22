import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      module: { title: '' },
      modules: []
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.moduleService = ModuleService.instance;
    this.findAllModules = this.findAllModules.bind(this);
    this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);

  }
  componentDidMount() {
    console.log("COURSE ID");
    console.log(this.props.courseId);
    this.setCourseId(this.props.courseId);
  }
  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }
  setModules(modules) {
    this.setState({modules: modules})
  }
  findAllModulesForCourse(courseId) {
    this.moduleService
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
      console.log("FIND ALL MODULES FOR COURSE");
      console.log(this.state.modules);

  }

  findAllModules() {
    this.moduleService
      .findAllModules()
      .then((modules) => {
        console.log(modules);
        this.setState({modules: modules});
      })
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  createModule() {
    console.log(this.state.module);
    this.moduleService
      .createModule(this.props.courseId, this.state.module)
      .then(() => { this.findAllModules(); });
  }
  deleteModule(moduleId, courseId) {
    console.log("DELETE MODULE");
    console.log(moduleId);
    this.moduleService
      .deleteModule(moduleId);
  }
  titleChanged(event) {
    console.log(event.target.value);
    this.setState({module: {title: event.target.value}});
  }
  renderListOfModules() {
    let modules = this.state.modules.map((module) => {
      return <ModuleListItem module={module}
                            course={this.state.courseId}
                             key={module.id}
                             delete={this.deleteModule}/>
    });
    return modules;
  }
  render() {
    return (
      <div>
        <h3>Module List for course: {this.state.courseId}</h3>
        <input onChange={this.titleChanged}
               value={this.state.module.title}
               placeholder="title"
               className="form-control"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">
          <i className="fa fa-plus"></i>
        </button>
        <br/>
        <ul className="list-group">
          {this.renderListOfModules()}
        </ul>
      </div>
    );
  }
}
