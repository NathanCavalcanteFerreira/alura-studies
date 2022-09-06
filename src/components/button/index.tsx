import React from "react";
import style from "./botao.module.scss";

interface Iprops{
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined
}

class Button extends React.Component <Iprops>{
    render(){
        const { type = "button" } = this.props;
        return(
            <button type = {type} className={style.botao} onClick={() => console.log("adicionado")}>
                
               {this.props.children}
            </button>
        )
    }
}

export default Button;
