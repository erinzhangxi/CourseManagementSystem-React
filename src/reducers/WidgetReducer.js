import * as constants from "../constants/index"

export const WidgetReducer = (state={
    widgets:[],topicId:"",preview:false}, action)=>{
    switch (action.type){

        case 'FIND_WIDGETS_TOPIC':return{
            widgets:action.widgets,
            topicId:action.topicId
        }


        case constants.ADD:return {
            widgets:[...state.widgets,
                {
                    topicId:action.topicId,
                    id:state.widgets.length+1,
                    widgetType:'Heading',
                    size:'1',
                    widgetName:'',
                    orderWidget:state.widgets.length+1
                }
            ],
            topicId:action.topicId
        }
        case constants.DELETE_WIDGET: return {
            widgets: state.widgets.filter(widget=>(
                widget.id !== action.widgetId
            )),
            topicId:action.topicId
        }

        case constants.SAVE: fetch('http://localhost:8080/api/topic/TID/widget'.replace('TID',action.topicId),{
            method:'POST',
            body:JSON.stringify(state.widgets),
            headers:{
                'content-type': 'application/json'
            }
        })
            return state;

        case constants.SET_TOPIC_ID:
            return {
                widgets: state.widgets,
                preview: state.preview,
                topicId: action.topicId
            }

        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets,
                preview: state.preview,
                topicId: state.topicId
            }

            return state;

        case constants.SELECT_WIDGET_TYPE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId

            }
        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }
        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }
        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview,
                topicId: state.topicId
            }

        case constants.IMAGE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.src;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }
        case constants.LINK_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.href;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.WIDTH_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.width = action.width;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.HEIGHT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.height = action.height;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }
        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview,
                topicId: state.topicId
            }

        default: return state;
    }
}
