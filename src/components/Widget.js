import React from  'react'
import {connect} from 'react-redux'
import * as constants from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem;
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input className="form-control"
                    onChange={() => headingTextChanged(widget.id, inputElem.value)}
                    value={widget.text}
                    type="text"
                    placeholder="Enter heading text here"
                       ref={node => inputElem=node}/>
                <br/>
                <select className="form-control"
                    onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
        </div>
    )
}
const Link = ({widget, preview, headingTextChanged, linkChanged}) => {
    let inputElement;
    let inputElement1;
    return (
        <div className="">
            <div hidden={preview}>
                <h6>{widget.name}</h6>
                <textarea
                    className="form-control"
                    onChange={() => headingTextChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Link text"
                    ref={node => inputElement = node}/>
                <textarea
                    className="form-control"
                    onChange={() => linkChanged(widget.id, inputElement1.value)}
                    value={widget.href}
                    placeholder="URL"
                    ref={node => inputElement1 = node}/>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                <a href={widget.href}>{widget.text}</a>
            </div>
        </div>
    )
}

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    listTypeChanged: (widgetId, newType) =>
        actions.listTypeChanged(dispatch, widgetId, newType),
    widthChanged: (widgetId, newWidth) =>
        actions.widthChanged(dispatch, widgetId, newWidth),
    heightChanged: (widgetId, newHeight) =>
        actions.heightChanged(dispatch, widgetId, newHeight),
    linkChanged: (widgetId, newLink) =>
        actions.linkChanged(dispatch, widgetId, newLink)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

const Paragraph = () => (
    <div>
        <h2>Paragraph</h2>
        <textarea></textarea>
    </div>
)

const Image = ({widget,preview,results,iurl,search,clickImage}) => {
    let imageUrlElem;
    let searchInput;
    return (

        <div>
        <div hidden={preview}>
            <h2 style={{padding: "10px"}}>{widget.widgetType}</h2>
            <div style={{padding: "10px"}}>
                <input className="form-control" type="text" placeholder="Link Url"
                       onChange={() => iurl(widget.id, imageUrlElem.value)} ref={node => imageUrlElem = node}
                       value={widget.iurl}/><br/>
                <div className="row">
                    <div className="col-10" style={{paddingRight: "0px"}}>
                        <input placeholder="search for image ... "
                               className="form-control" type="text" ref={node => searchInput = node}/>
                    </div>
                    <div className="col-2 float-right">
                        <button className="btn" style={{background: "#4286f4"}}
                                onClick={() => search(searchInput.value)}><i className="fa fa-lg fa-search"></i>
                        </button>
                    </div>
                </div>
                <br/>
                {results !== undefined && results.length > 0 && results.map(result => (
                    <img style={{widget: "150px", height: "150px", margin: "10px"}} src={result} onClick={() => {
                        clickImage(widget.id, result)
                    }}/>
                ))}
            </div>
            <h4 style={{padding: "10px"}}>Preview</h4>
        </div>
        <div style={{padding: "10px"}}>
            {widget.widgetType === 'Image' && <img src={widget.iurl} style={{width: "300px", height: "300px"}}/>}
        </div>
    </div>
    )
}

const List = () => (
    <h2>List</h2>
)

const Widget = ({widget,topicId, preview, dispatch}) => {
    let selectElement
    return(
      <div>
            <div hidden={preview}>

                <div className="container">
                <div className="row">
                    {widget.id} {widget.widgetType}

                    <select hidden={preview}
                            value={widget.widgetType}
                            onChange={e =>
                                dispatch({
                                    type: 'SELECT_WIDGET_TYPE',
                                    id: widget.id,
                                    widgetType: selectElement.value
                                })} ref={node => selectElement = node}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                        <option>Link</option>
                    </select>
                <button hidden={preview} className="btn btn-sm btn-danger"
                        onClick={e => (
                    dispatch({type: constants.DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
                <button  hidden={!preview} className="btn btn-secondary fa fa-edit">
                </button>

                <button hidden={preview} className='btn btn-outline-info fa fa-arrow-up'
                        onClick={e => (dispatch({type: constants.MOVE_UP_WIDGET, widgetOrder: widget.widgetOrder})
                        )}></button>
                <button hidden={preview} className='btn btn-outline-info fa fa-arrow-down'
                        onClick={e => (dispatch({type: constants.MOVE_DOWN_WIDGET, widgetOrder: widget.widgetOrder})
                        )}></button>
                </div>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingCt widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphCt widget={widget}/>}
                {widget.widgetType==='List' && <ListCt widget={widget}/>}
                {widget.widgetType==='Image' && <ImageCt widget={widget}/>}
                {widget.widgetType==='Link' && <LinkCt widget={widget}/>}
            </div>
      </div>
    )
}

const imageDispatchToPropsMapper = dispatch => ({
    imageChanged: (widgetId,imageUrl)=>actions.imageChanged(widgetId,imageUrl,dispatch),
    search:(searchQuery)=> actions.search(searchQuery,dispatch),
    clickImage: (widgetId,result) => actions.clickImage(widgetId,result,dispatch)
})

export const WidgetCt = connect(stateToPropsMapper)(Widget)
export const HeadingCt = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
export const ParagraphCt = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
export const ListCt = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
export const ImageCt = connect(stateToPropsMapper, imageDispatchToPropsMapper)(Image)
export const LinkCt = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)
