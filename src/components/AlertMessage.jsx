import React from "react";
import successImg from '../assets/images/successImg.svg'
import errorImg from '../assets/images/errorImg.svg'

const AlertMessage = ({message, type}) => {

    let alertIcon;
    let alertClass;

    if(type === 'success'){
        alertIcon = <img src={successImg} />
        alertClass = 'text-success';
    } else if(type === 'error'){
        alertIcon = <img src={errorImg} />
        alertClass = 'text-danger';
    }


    return (
       <div className={`text-center ${alertClass}`}>
        
            {alertIcon}
            <p className="fw-bold text-center fs-5 p-2 m-1">{message}</p>
        </div>
    );

}


export default AlertMessage;