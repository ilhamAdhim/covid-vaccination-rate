import React from 'react'
import { Row, Col, Card, Typography } from 'antd';
import houseImage from '../assets/house.svg';
import usingMaskImage from '../assets/using-mask.svg';
import buildingsImage from '../assets/buildings.svg';
import remindImage from '../assets/remind.svg';
import '../styles/health-card-list.css';

function HealthCardList() {
    return (
        <Row className="tips-kesehatan-page center-item" type="flex" align="middle">

            <Row className='card-row-flex'>
                <Col flex={2} className='card-col-flex'>
                        <Card
                            className='card-item card-item-style-2'
                        >
                            <Row className='card-row-flex-title'>
                                <Col className='center-item'>
                                    <Typography.Title level={5}>
                                        Tetap Berada di Rumah 
                                    </Typography.Title>
                                </Col>

                                <Col className='img-possition'>
                                    <img src={houseImage} />
                                </Col>
                            </Row>

                            <Row style={{textAlign: 'left'}}>
                                <Col>
                                    <Typography.Paragraph>
                                        Tetaplah di rumah dan jaga kesehatan karena virus corona dapat menular dengan mudah kepada mereka yang memiliki imun rendah.
                                    </Typography.Paragraph>
                                </Col>
                            </Row>

                        </Card>
                </Col>
                    
                <Col flex={3} className='card-col-flex'>

                    <Card
                            className='card-item card-item-style-1'
                        >
                            <Row className='card-row-flex-title'>
                                <Col className='center-item'>
                                    <Typography.Title level={5}>
                                        Terapkan 5M
                                    </Typography.Title>
                                </Col>

                                <Col className='img-possition'>
                                    <img src={usingMaskImage} />
                                </Col>
                            </Row>

                            <Row style={{textAlign: 'left'}}>
                                <Typography.Paragraph>
                                    <ul>
                                        <li>Mencuci tangan pakai sabun dan air mengalir</li>
                                        <li>Memakai masker</li>
                                        <li>Menjaga jarak</li>
                                        <li>Menjauhi kerumunan</li>
                                        <li>Membatasi mobilitas dan interaksi</li>
                                    </ul>
                                </Typography.Paragraph>
                            </Row>

                        </Card>
                </Col>
            </Row>

            <Row className='card-row-flex'>
                <Col flex={3} className='card-col-flex'>
                    <Card
                            className='card-item card-item-style-1'
                        >
                            <Row className='card-row-flex-title'>
                                <Col className='center-item'>
                                    <Typography.Title level={5}>
                                        25% Maximum
                                    </Typography.Title>
                                </Col>

                                <Col className='img-possition'>
                                    <img src={buildingsImage} />
                                </Col>
                            </Row>

                            <Row style={{textAlign: 'left'}}>
                                <Col>
                                    <Typography.Paragraph className='card-padding'>
                                        Sesuai Pergub Nomor 796 Tahun 2021, 
                                        seluruh kegiatan sektor non esensial harus beroperasi dengan kapasitas maksimal 25% dengan protokol kesehatan yang ketat.
                                    </Typography.Paragraph>
                                </Col>
                            </Row>

                        </Card>
                </Col>
                    
                <Col flex={2} className='card-col-flex'>
                    <Card
                            className='card-item card-item-style-2'
                        >
                            <Row className='card-row-flex-title'>
                                <Col className='center-item'>
                                    <Typography.Title level={5}>
                                        Saling Mengingatkan
                                    </Typography.Title>
                                </Col>

                                <Col className='img-possition'>
                                    <img src={remindImage} />
                                </Col>
                            </Row>

                            <Row style={{textAlign: 'left'}}>
                                <Typography.Paragraph>
                                    Ingatkan yang lain untuk selalu menjalankan protokol kesehatan.
                                </Typography.Paragraph>
                            </Row>

                        </Card>
                </Col>
            </Row>
        </Row>
    )
}

export default HealthCardList;
