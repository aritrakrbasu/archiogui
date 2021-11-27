import React from 'react'

function PageHeader({text}) {
    return (
        <div className="pageHeadingTextContainer">
            <h2 className="pageHeadingText" data={text}>{text} </h2>
        </div>
    )
}

export default PageHeader
