import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList, addTodo} from "../../slice/todoSlice"
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
  } from "antd";

const FormLeft = ()=>{
    const dispatch = useDispatch();

    const onFinish = (e)=>{
        console.log(e);
        const newTodo = e;
        console.log(newTodo);
        dispatch(addTodo(newTodo));
    };
      
    return (
        <div className="form_container_style">
            <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 6 }}
            onFinish={onFinish}
            >
            <Form.Item name="Description" label="Description: ">
                <Input />
            </Form.Item>
        
            <Form.Item name="Category" label="Category: ">
                <Select>
                    <Select.Option value="CSS">CSS</Select.Option>
                    <Select.Option value="CSS">HTML</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name="Content" label="Content: ">
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 4 }}>
                <Button htmlType="submit">Submit</Button>
            </Form.Item>

            </Form>
        </div>
    )

};

export default FormLeft;