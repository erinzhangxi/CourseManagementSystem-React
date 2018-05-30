import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from './ModuleEditor';

const title = {
    "fontFamily":"Arial",
    "color": '#A9A9A9',
    "fontWeight": 'bold'
};


{/*props: courseId*/}
export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: { title: '' },
      modules: [],
      currentModule: 0,
      courseId: this.props.courseId
    };
    this.setCourseId =
          this.setCourseId.bind(this);
    this.setCurrentModuleId = this.setCurrentModuleId.bind(this);
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.moduleService = ModuleService.instance;
    this.findAllModules = this.findAllModules.bind(this);
    this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);

  }
  setCourseId(courseId) {
       this.setState({courseId: courseId});
   }
  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }

  componentWillReceiveProps(newProps){
     this.setCourseId(newProps.courseId);
     this.findAllModulesForCourse(newProps.courseId)
 }
 setCurrentModuleId(moduleId) {
   this.setState({currentModule: moduleId});
   console.log("THIS MODULE IS CLICKED");
   console.log(moduleId);
 }

  findAllModulesForCourse() {
    this.moduleService
      .findAllModulesForCourse(this.props.courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setModules(modules) {
    this.setState({modules: modules});
  }

  findAllModules() {
    this.moduleService
      .findAllModules()
      .then((modules) => {
        this.setModules(modules);
      })
  }

  createModule() {
    this.moduleService
      .createModule(this.props.courseId, this.state.module)
        .then(() => {
        this.findAllModulesForCourse();
    });
  }
  deleteModule(moduleId, courseId) {
    if (window.confirm('Are you sure you want to delete?')) {
    this.moduleService
      .deleteModule(moduleId)
        .then(() => {
            this.findAllModulesForCourse()
        });
        }
  }
  titleChanged(event) {
    this.setState({module: {title: event.target.value}});
  }
  renderListOfModules() {
      let setCurrent = this.setCurrentModuleId;
      let current = this.currentModule;
    let modules = this.state.modules.map((module) => {
      return <div key={module.id}
              onClick={()=>this.setCurrentModuleId(module.id)}>
              <ModuleListItem module={module}
                            course={this.props.courseId}
                            moduleId={module.id}
                             key={module.id}
                             delete={this.deleteModule}
                              current={current} setCurrent={setCurrent}/></div>
    });
    return modules;
  }

  render() {
    return (
      <Router>
      <div className="row">
        <div className="col-4">
        <div>
         <p style={title}>Add a new module</p>
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
        </div>
        <div className="col-8">

          <Route path= "/course/:courseId/module/:moduleId" component={ModuleEditor}/>
        </div>
      </div>
</Router>
    );
  }
}
