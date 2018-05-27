import React,  {Component} from 'react';

export default class LessonEditor extends Component {

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.setLessonId =
            this.setLessonId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId:''
        };}

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState
        ({lessonId: lessonId});
    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.setLessonId(
            this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(
            newProps.match.params.lessonId);
    }

    render() {
        return (
            <div>
            <h3>Lesson Editor</h3>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit,
                    mi et lacinia lobortis, eros dui bibendum orci, mattis ullamcorper felis ipsum eget ex.
                    Quisque eget ante urna. Cras et nulla ac tellus tempus vulputate ut sit amet ipsum. Donec id molestie arcu.
                    Ut id felis nisi. Mauris sollicitudin posuere lacinia. Vestibulum semper lacinia purus vel consectetur.
                    Phasellus finibus enim velit, et gravida quam maximus id. Fusce porta bibendum magna, quis auctor arcu cursus sit amet.
                    Phasellus non velit quis sem commodo sodales. Duis diam lorem,
                    sodales elementum odio eu, cursus tempus mauris. Nullam ac sem blandit, viverra nisi nec,
                    tempus ex. Pellentesque et felis suscipit, viverra lorem sit amet, fringilla risus.
                </h2>
            </div>
        )}}
