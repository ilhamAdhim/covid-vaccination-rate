import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import "../styles/jumbotron-header.css"
import { ReactComponent as YourSvg } from '../assets/jumbotron-image.svg';

const HeaderJumbotron = () => {
    return (
        <Row id="jumbotron-header" style={{ height: '30em' }}>
            <Col flex="2">
                <Typography.Title>
                    Stay Safe
                    <br />
                    From <span style={{ color: '#ff725e' }}> COVID-19 </span>
                </Typography.Title>

                <h2 style={{ fontSize: '1.2em', marginTop: '2em' }}>
                    Protect yourself & others around you knowing the facts and taking appropriate
                </h2>
                <Button className="btn-cta" style={{ marginTop: '2em', backgroundColor: '#FF725E', color: 'white' }}> Learn More</Button>
            </Col>
            <Col flex="2" >
                <YourSvg></YourSvg>
            </Col>
        </Row>
    );
};

export default HeaderJumbotron;