import React from 'react';
import { Col, Row } from 'antd'

const rowStyle = {padding :'2em', marginTop: '2em', backgroundColor :'#FF725E', color : 'white'}

const Footer = props => {
    return (
        <Row style={rowStyle} justify="space-around">
            <Col>COVID-19</Col>
            <Col>COVID-19 - © Copyright 2021. All Rights Reserved.</Col>
            <Col>Logo Sosmed</Col>
        </Row>
    );
};

export default Footer;