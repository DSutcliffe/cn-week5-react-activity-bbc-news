import React from 'react'

function ContentWindow(props) {
    return (
        <div>
            <img src={props.source} alt={props.alt} />
            <h5> {props.headline} </h5>
        </div>
    )
}

export default ContentWindow;