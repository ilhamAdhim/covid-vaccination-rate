import React from 'react';
import { Col, Row } from 'antd'

const Footer = props => {
    return (
        <Row style={{padding :'2em', marginTop: '2em', backgroundColor :'#FF725E', color : 'white'}} justify="space-around">
            <Col>COVID-19</Col>
            <Col>COVID-19 - © Copyright 2021. All Rights Reserved.</Col>
            <Col>Logo Sosmed</Col>
        </Row>
    );
};

export default Footer;