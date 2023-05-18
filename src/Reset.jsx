import React from "react"

export const Reset = ({onClicked}) => {
    return (
        <div>
            <button onClick={() => { onClicked('Reset')}}>Clear</button>
        </div>
    )
}