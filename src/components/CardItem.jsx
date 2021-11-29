import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import {
    MedicineBoxOutlined,
    PhoneOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "../styles/style.css"
import "../styles/card-item.css"

const CardItem = ({ role, itemObj }) => {

    if (role.toLowerCase() === "hospital") {
        return (
            <Card className="card-item">
                <Row gutter={20} className="new-row">
                    <Col>
                        <MedicineBoxOutlined className="icon-style" />
                    </Col>
                    <Col>
                        <Typography.Text className="text-bold">
                            {/* {`Ini Hospital ${itemObj.value || itemObj}`} */}
                            RS Umum Dharma Yadnya
                        </Typography.Text>
                    </Col>
                </Row>
                <Row gutter={20} className="new-row">
                    <Col>
                        <EnvironmentOutlined className="icon-style" />
                    </Col>
                    <Col>
                        <Typography.Text className="text-bold">
                            Jl. WE.Supratman 256, Denpasar
                        </Typography.Text>
                    </Col>
                </Row>
                <Row gutter={20} className="new-row">
                    <Col>
                        <PhoneOutlined className="icon-style" />
                    </Col>
                    <Col>
                        <Typography.Text className="text-bold">
                            08123456789
                        </Typography.Text>
                    </Col>
                </Row>
            </Card>
        );
    } else {
        return (
            <Card className="card-item">
                <Row gutter={20} className="new-row" justify="space-between ">
                    <Col>
                        <EnvironmentOutlined className="icon-style" />
                    </Col>
                    <Col>
                        <Typography.Text className="text-bold">
                            {itemObj.name}
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Link to={`/province/${itemObj.name.replace(' ', '-').toLowerCase()}`}>
                            <Button>
                                Detail
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Card>
        );
    }

};

export default CardItem;