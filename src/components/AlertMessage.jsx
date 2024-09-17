import React from "react";

const AlertMessage = ({message, type}) => {

    const alertClass = `alert ${type ? `alert-${type}` : 'alert-info'}`;

    return (
        <div className={alertClass} role="alert">
            {message}
        </div>
    );

}


export default AlertMessage;