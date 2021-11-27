import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import {
    MedicineBoxOutlined,
    PhoneOutlined,
    CompassOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CardItem = ({ role, itemObj }) => {

    if (role === "Hospital") {
        return (
            <Card style={{ boxShadow: '0 0 3pt 0 #d3d3d3' }}>
                <Row gutter={20} style={{ marginTop: '.8em' }}>
                    <Col>
                        <MedicineBoxOutlined style={{ fontSize: '1.5em' }} />
                    </Col>
                    <Col>
                        <Typography.Text style={{ fontWeight: 'bold' }}>
                            {/* {`Ini Hospital ${itemObj.value || itemObj}`} */}
                            RS Umum Dharma Yadnya
                        </Typography.Text>
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginTop: '.8em' }}>
                    <Col>
                        <CompassOutlined style={{ fontSize: '1.5em' }} />
                    </Col>
                    <Col>
                        <Typography.Text style={{ fontWeight: 'bold' }}>
                            Jl. WE.Supratman 256, Denpasar
                        </Typography.Text>
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginTop: '.8em' }}>
                    <Col>
                        <PhoneOutlined style={{ fontSize: '1.5em' }} />
                    </Col>
                    <Col>
                        <Typography.Text style={{ fontWeight: 'bold' }}>
                            08123456789
                        </Typography.Text>
                    </Col>
                </Row>
            </Card>
        );
    } else {
        return (
            <Card style={{ boxShadow: '0 0 3pt 0 #d3d3d3' }}>
                <Row gutter={20} style={{ marginTop: '.8em' }}>
                    <Col>
                        <MedicineBoxOutlined style={{ fontSize: '1.5em' }} />
                    </Col>
                    <Col>
                        <Typography.Text style={{ fontWeight: 'bold' }}>
                            {/* {`Ini Hospital ${itemObj.value || itemObj}`} */}
                            {itemObj.name}

                            <Link to={`/province/${itemObj.name.replace(' ', '-').toLowerCase()}`}>
                                <Button>
                                    Detail
                                </Button>
                            </Link>
                        </Typography.Text>
                    </Col>
                </Row>
            </Card>
        );
    }

};

export default CardItem;