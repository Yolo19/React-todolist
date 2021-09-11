import React from "react";
import Header from "../../components/Header";
import TableList from "../../components/TableList";
import FormLeft from "../../components/Form";
import { Row, Col } from "antd";
import "./index.css"

const HomePage = () => {

    return (
        <div className="Home_Layout">
            <Row>
                <Col span={24}><Header /></Col>
            </Row>
            <Row>
                <Col span={12}><FormLeft /></Col>
                <Col span={12}><TableList /></Col>

            </Row>
        </div>
    )

};

export default HomePage;