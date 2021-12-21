import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import "../styles/jumbotron-header.css"
import { ReactComponent as JumbotronImg } from '../assets/jumbotron-image.svg';

const HeaderJumbotron = ({onClickButton}) => {
    return (
        <Row id="jumbotron-header">
            <Col flex={1} sm={24} md={10}>
                <Typography.Title>
                    Monitor <span style={{ color: '#ff725e' }}> COVID-19 </span>
                    <br />
                    Indonesia 
                </Typography.Title>

                <Typography.Paragraph style={{ fontSize: '1.2em', marginTop: '2em' }}>
                    Detail kasus harian, prediksi kecepatan vaksinasi COVID-19
                    dan info rumah sakit di Indonesia
                </Typography.Paragraph>
                <Button className="btn-cta" onClick={onClickButton} > Cari Provinsi </Button>
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