import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import "../styles/jumbotron-header.css"
import { ReactComponent as JumbotronImg } from '../assets/jumbotron-image.svg';

const HeaderJumbotron = () => {
    return (
        <Row id="jumbotron-header">
            <Col flex={1} sm={24}>
                <Typography.Title>
                    Stay Safe
                    <br />
                    From <span style={{ color: '#ff725e' }}> COVID-19 </span>
                </Typography.Title>

                <Typography.Paragraph style={{ fontSize: '1.2em', marginTop: '2em' }}>
                    Protect yourself & others around you knowing the facts and taking appropriate
                </Typography.Paragraph>
                <Button className="btn-cta" > Learn More</Button>
            </Col>
            <Col flex={1} sm={24}>
                <div className="svg-jumbotron">
                    <JumbotronImg />
                </div>
            </Col>
        </Row>
    );
};

export default HeaderJumbotron;