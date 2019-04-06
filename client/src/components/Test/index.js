import React from "react";


function Test(props) {

    console.log(props)

    return (
        <div>
        <button> Hello </button>
        <p>{props.name}</p>
        </div>
    )
}

export default Test;