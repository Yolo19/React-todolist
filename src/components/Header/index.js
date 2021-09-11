import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css"

const Header = ()=>{
    let history = useHistory();

    const GotoTodoPage =()=>{
        history.push("/");
    };
    const GotoAboutPage =()=>{
        history.push("/about");
    };

    return (
        <div className="header_style">
            <a type="link" onClick={GotoTodoPage}>todo</a>
            <a type="link" onClick={GotoAboutPage}>about</a>
        </div>
    )

};

export default Header;