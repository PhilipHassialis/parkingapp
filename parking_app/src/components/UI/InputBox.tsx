import type { ComponentPropsWithoutRef } from "react";

const InputBox = ({...inputProps}: ComponentPropsWithoutRef<"input">) => {
    return (
        <div className = "input-box-container">
            <input {...inputProps}  type="text"  />
        </div>
    );
}

export default InputBox;