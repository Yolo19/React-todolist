import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { selectTodoList} from "../../slice/todoSlice"

const DetailInfo = (props)=>{
    const todoList = useSelector(state => (selectTodoList(state)));
    const urlId = window.location.href.split("/");;
    const id = urlId[urlId.length-1]
    const todoItem = todoList.table_list.filter(item => item.id == id);

    return (
        <div>
           
           {todoItem.map((items, key)=>
                 (
                    <div>
                    <p key ={items.key} ><span>Description: </span>{items.description}</p>
                    <p key ={items.key} ><span>Category: </span>{items.category}</p>
                    <p key ={items.key} ><span>Content: </span>{items.content}</p>
                    </div>
                )
            )}
            
        </div>
    )
};

export default DetailInfo;