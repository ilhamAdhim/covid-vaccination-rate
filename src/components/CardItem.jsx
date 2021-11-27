import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import {
    MedicineBoxOutlined,
    PhoneOutlined,
    CompassOutlined
} from '@ant-design/icons';

const CardItem = ({ role, itemObj }) => {

    if (role === "Hospital") {
        return (
            <Card>
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
            <div>
                Ini Provinsi
            </div>
        );
    }

};

export default CardItem;