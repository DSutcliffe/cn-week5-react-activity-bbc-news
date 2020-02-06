import React from 'react'

function HeaderBar(props) {
    return (
        <div class="header">
            <h1>{props.head1}</h1>
            
            <hr></hr>
            <h4>{props.head4}</h4>
        </div>
    )
}

export default HeaderBar;