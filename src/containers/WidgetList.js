import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from "../actions"
import {WidgetCt} from '../components/Widget'
import ToggleButton from 'react-toggle-button'

class WidgetList extends Component {
    constructor(props) {

        super(props);
        this.state = {
            topicId:''
        };
        this.props.setTopicId(this.props.topic);
        this.props.findAllWidgetsForTopic(this.props.topic);
    }

    componentDidMount(){

    }

    componentWillReceiveProps(newProps){
        if(newProps.topicId!==this.props.topicId) {
            this.props.setTopicId(newProps.topic);
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }
    render(){
        let input;
        return(
            <div>
                <h3> Number of Widget(s) ({this.props.widgets.length}) </h3>
                <br/>

                <div className="row float-right">
                    <button style={{marginRight:"5px"}}
                            className="btn-success btn"
                            hidden={this.props.previewMode}
                            onClick={()=>{this.props.save(this.props.topicId)}}>Save
                    </button>
                    <ToggleButton onClick={()=>{this.props.preview(this.props.topicId,this.props.previewMode)}}
                                  value={this.props.previewMode}/>
                </div>
                <br/>
                <div className="container-fluid">
                    <ul>
                        {this.props.widgets.map(widget => (
                                <WidgetCt key={widget.id}
                                          widget={widget}
                                         topicId={this.props.topicId}
                                        preview={this.props.previewMode}/>
                            )
                        )}
                    </ul>

                    <button hidden={this.props.previewMode}
                            className="btn float-right"
                            style={{marginTop:"10px",marginBottom:"20px"}}
                            onClick={()=>{this.props.add(this.props.topicId)}}>
                        <i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }


}

const dispatchToPropsMapper =(dispatch)=>({
    findAllWidgetsForTopic: (topicId) => Actions.findAllWidgetsForTopic(dispatch,topicId),
    save: (topicId)=> Actions.save(topicId, dispatch),
    add: (topicId) => Actions.add(topicId, dispatch),
    preview: (topicId,previewMode) => Actions.preview(topicId,previewMode,dispatch),
    setTopicId: (topicId) => Actions.setTopicId(topicId, dispatch)
})

const stateToPropsMapper = (state) => (
    {
        topicId: state.topicId,
        widgets:state.widgets,
        previewMode:state.preview
    }
)
export const WidgetContainer = connect(stateToPropsMapper,dispatchToPropsMapper)(WidgetList);