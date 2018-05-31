import * as constants from "../constants/index"

export const WidgetReducer = (state={
    widgets:[],topicId:""}, action)=>{
    switch (action.type){

        case 'FIND_WIDGETS_TOPIC':return{
            widgets:action.widgets,
            topicId:action.topicId
        }


        case 'ADD':return {
            widgets:[...state.widgets,
                {
                    text:'New Widget',
                    topicId:action.topicId,
                    widgetId:state.widgets.length+1
                }
            ],
            topicId:action.topicId
        }

        case 'DELETE': return {
            widgets: state.widgets.filter(widget=>(
                widget.id !== action.widgetId
            )),
            topicId:action.topicId
        }

        case 'SAVE': fetch('http://localhost:8080/api/topic/TID/widget/save'.replace('TID',action.topicId),{
            method:'POST',
            body:JSON.stringify(state.widgets),
            headers:{
                'content-type': 'application/json'
            }
        })
            return state;

        default: return state;
    }
}
