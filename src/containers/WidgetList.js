import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from "../actions"
import {WidgetCt} from '../components/Widget'
import ToggleButton from 'react-toggle-button'

class WidgetList extends Component {
    constructor(props) {
        super(props);

        console.log("##########WIDGET LIST CONSTRUCTORS################");
        console.log(this.props.topicId);
    }
    componentDidMount(){

    }

    componentWillReceiveProps(newProps){
        if(newProps.topicId!==this.props.topicId) {
            this.props.findWidgetsForTopic(newProps.topicId);
        }
    }
    render(){
        let input;
        return(
            <div>
                <h1> Widget List ({this.props.widgets.length}) </h1>
                <br/>
<h1>DEBUG WIDGETLIST</h1>
                <h1>{this.props.topicId}</h1>
                <h1>END</h1>
                <div className="row float-right" style={{marginRight:"10px",marginTop:"10px"}}>
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
                            style={{background:'#ea2a2a',marginTop:"10px",marginBottom:"20px"}}
                            onClick={()=>{this.props.add(this.props.topicId)}}>
                        <i className="fa fa-plus-circle"></i></button>
                </div>
            </div>
        )
    }


}

const dispatchToPropsMapper =(dispatch)=>({
    findWidgetsForTopic: (topicId) => Actions.findWidgetsForTopic(topicId,dispatch),
    save: (topicId)=> Actions.save(topicId, dispatch),
    add: (topicId) => Actions.add(topicId, dispatch),
    preview: (topicId,previewMode) => Actions.preview(topicId,previewMode,dispatch),
    setTopicId: (topicId) => Actions.setTopicId(dispatch, topicId)
})

const stateToPropsMapper = (state,ownProps) => (
    {
        topicId: ownProps.topicId,
        widgets:state.widgets,
        previewMode:state.preview
    }
)
export const WidgetContainer = connect(stateToPropsMapper,dispatchToPropsMapper)(WidgetList);