import React from "react";
import style from "./botao.module.scss";

interface Iprops{
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    
}
function Button({onClick, type, children} : Iprops){
    return(
        <button onClick={onClick}
         type = {type}
         className={style.botao}>
            {children}
        </button>

    )
}

export default Button;
