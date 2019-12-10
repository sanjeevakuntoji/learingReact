import React from 'react';

const Spinner = (props) => {
    return (
        <div className= "ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
}
////creating default message property if the content is not there
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;