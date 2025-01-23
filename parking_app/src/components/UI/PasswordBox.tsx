import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type ComponentPropsWithoutRef } from "react";

const PasswordBox = ({ ...inputProps }: ComponentPropsWithoutRef<"input">) => {

    
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="password-box-container">
            <input {...inputProps} type={showPassword ? "text" : "password"}  />
            {showPassword ?
                <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }} onClick={() => setShowPassword(false)} /> :
                <FontAwesomeIcon icon={faEye} style={{ cursor: "pointer" }} onClick={() => setShowPassword(true)} />}
        </div>
    );
}

export default PasswordBox;