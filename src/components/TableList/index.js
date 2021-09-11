import React, { useState, useEffect } from "react";
import "./index.css";
import { Table, Button,message  } from "antd";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import DetailInfo from "../../pages/DetailInfo";
import HomePage from "../../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList, deleteTodo,deleteAllSelected } from "../../slice/todoSlice"

const TableList = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const todoList = useSelector(state => (selectTodoList(state)));
    const [selectItem, setSelectItem] = useState(null);
    const [data, setData] = useState(todoList.table_list);

    useEffect(() => {
        setData(todoList.table_list)
    }, [todoList])

    // const [data, setData] = useState(
    //      [
    //         {
    //             key: "1",
    //             description: "John Brown",
    //             category: "New York No. 1 Lake Park",
    //         },
    //         {
    //             key: "2",
    //             description: "Jim Green",
    //             category: "London No. 1 Lake Park",
    //         },
    //         {
    //             key: "3",
    //             description: "Joe Black",
    //             category: "Sidney No. 1 Lake Park",
    //         },
    //         {
    //             key: "4",
    //             description: "Disabled User",
    //             category: "Sidney No. 1 Lake Park",
    //         },
    //     ]
    // );

    const columns = [
        { title: "Description", dataIndex: "description", key: "description" },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (text, record) => (
                <span
                    onClick={(e) => { openDetails(record, e) }}
                >
                    {text}
                </span>
            ),
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (record) => (
                <span
                    onClick={() => { handleDelete(record) }}
                >
                    Delete
                </span>
            ),
        },
    ];

    const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
            console.log("selecttest",selectedRows);
            setSelectItem(selectedRows);           
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
            setSelectItem(selectedRows);
        },
    };


    const handleDelete = (record) => {
        dispatch(deleteTodo(record.id));
    };

    const openDetails = (record) => {
        <Route path={"/todo/:record.id"}><DetailInfo data={record} /></Route>
        history.push(`/todo/${record.id}`);
    }

    const deleteAll =(record)=>{
        if(selectItem==null) {
            message.error("Please select at least one item");
        }
        else {
            let select_id_arr = [];
            console.log("error",selectItem);
            //select_id_arr =selectItem.map((items)=>items.id);
            select_id_arr =selectItem.filter((items)=>items?.id).map((items)=>items.id);
            dispatch(deleteAllSelected(select_id_arr));
        }   
    }


    return (
        <div className="table_container_style">
            <Button type="primary" className="button_style" onClick={deleteAll}>Delete all selected</Button>
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={{ ...rowSelection }}
            />
        </div>
    )

};

export default TableList;