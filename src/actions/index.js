import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)
export const findWidgetsForTopic = (topicId,dispatch) => (
    fetch("http://localhost:8080/api/topic/TID/widget".replace("TID",topicId))
        .then(response => (response.json()))
        .then(widgets => (dispatch(
            {   type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
                widgets:widgets
            }
        )))
)
export const add = (topicId,dispatch) => (
    dispatch({type:constants.ADD,topicId:topicId})
)


export const setTopicId = (dispatch, topicId) => {
    dispatch({
        type: constants.SET_TOPIC_ID,
        topicId: topicId
    })
}
export const save = (topicId, dispatch) => (
    dispatch({
        type:constants.SAVE,topicId:topicId
    })
)
export const imageChanged = (dispatch, widgetId, newImage) => (
    dispatch({
        type: constants.IMAGE_CHANGED,
        id: widgetId,
        src: newImage
    })
)

export const widthChanged = (dispatch, widgetId, newWidth) => (
    dispatch({
        type: constants.WIDTH_CHANGED,
        id: widgetId,
        width: newWidth
    })
)

export const linkChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_CHANGED,
        id: widgetId,
        href: newLink
    })
)

export const heightChanged = (dispatch, widgetId, newHeight) => (
    dispatch({
        type: constants.HEIGHT_CHANGED,
        id: widgetId,
        height: newHeight
    })
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType
    })
)

export const findAllWidgetsForTopic = (dispatch, topicId) => {
    fetch('http://localhost:8080/api/topic/TID/widget'.replace('TID', topicId))
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
}
export const search = (searchQuery,dispatch)=>(
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCG-dD8kckSHXcOJfE82mZzRmU5l2J0b5o&cx=017661173743464904363:okgv-u30f8q&q=QUERY".replace("QUERY",searchQuery))
        .then(response => (response.json()))
        .then(results => dispatch(
            {
                type:constants.SEARCH,
                results:results
            }
            )
        ))


export const clickImage = (widgetId,result,dispatch) =>(
    dispatch(
        {
            type:constants.IMAGE_URL,
            id:widgetId,
            imageUrl:result
        }
    )
)

