import React from 'react';
import { Col, Row } from 'antd'
import {FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons'
const rowStyle = {padding :'2em', marginTop: '2em', backgroundColor :'#FF725E', color : 'white'}

const Footer = props => {
    return (
        <Row style={rowStyle} justify="space-around">
            <Col style={{ fontSize: 18, fontWeight: 700 }}>COVID-19</Col>
            <Col> © Copyright 2021. All Rights Reserved.</Col>
            <Col>
                <FacebookOutlined style={{ fontSize: 20, padding: '0 10px' }}/>
                <InstagramOutlined style={{ fontSize: 20, padding: '0 10px' }}/>
                <TwitterOutlined style={{ fontSize: 20, padding: '0 10px' }}/>
            </Col>
        </Row>
    );
};

export default Footer;