import React from "react";
import './style.less'

type OtherButtonButtonTypes = {
    value: string,
    icon: any,
    onClick?: (key: string) => void,
}

const OtherAuthButton: React.FC<OtherButtonButtonTypes> = ({value, icon, onClick = () => {}}) => {
    return (
        <div className="other-button-wrapper" onClick={() => onClick(value)}>
            <img src={icon} alt=""/>
        </div>
    )
}

export default OtherAuthButton
