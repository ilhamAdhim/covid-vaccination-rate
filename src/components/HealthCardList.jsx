import React from 'react'
import { Divider, Row, Col, Card, Typography } from 'antd';
import houseImage from '../assets/house.svg';
import usingMaskImage from '../assets/using-mask.svg';
import buildingsImage from '../assets/buildings.svg';
import remindImage from '../assets/remind.svg';

function HealthCardList() {
    return (
        <Row className="tips-kesehatan-page" style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} type="flex" align="middle">
            <Row>
                <Col flex={2} style={{display: 'inline-flex'}}>
                        <Card
                            className='card-item'
                            style={{ width: 450, margin: '16px 14px', borderRadius: 20, backgroundColor: '#FFE2E2' }}
                        >
                            <Row style={{textAlign: 'center'}}>
                                <Col style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography.Title level={5}>
                                        Tetap Berada di Rumah 
                                    </Typography.Title>
                                </Col>

                                <Col style={{marginRight: '0', marginLeft: 'auto'}}>
                                    <img src={houseImage} style={{width: 200}} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Typography.Paragraph>
                                        Tetap di rumah kecuali untuk keadaan darurat
                                    </Typography.Paragraph>
                                </Col>
                            </Row>

                        </Card>
                </Col>
                    
                <Col flex={3} style={{display: 'inline-flex'}}>

                    <Card
                            className='card-item'
                            style={{ width: 600, margin: '16px 14px', borderRadius: 20, backgroundColor: '#FFE2E2' }}
                        >
                            <Row style={{textAlign: 'center'}}>
                                <Col style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography.Title level={5}>
                                        Terapkan 5M
                                    </Typography.Title>
                                </Col>

                                <Col style={{marginRight: '0', marginLeft: 'auto'}}>
                                    <img src={usingMaskImage} style={{width: 200}} />
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

            <Row>
                <Col flex={3} style={{display: 'inline-flex'}}>
                    <Card
                            className='card-item'
                            style={{ width: 600, margin: '16px 14px', borderRadius: 20, backgroundColor: '#FFE2E2' }}
                        >
                            <Row style={{textAlign: 'center'}}>
                                <Col style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography.Title level={5}>
                                        25% Maximum
                                    </Typography.Title>
                                </Col>

                                <Col style={{marginRight: '0', marginLeft: 'auto'}}>
                                    <img src={buildingsImage} style={{width: 200}} />
                                </Col>
                            </Row>

                            <Row style={{textAlign: 'left'}}>
                                <Typography.Paragraph>
                                    Sesuai Pergub Nomor 796 Tahun 2021, 
                                    seluruh kegiatan sektor non esensial harus beroperasi dengan kapasitas maksimal 25% dengan protokol kesehatan yang ketat.
                                </Typography.Paragraph>
                            </Row>

                        </Card>
                </Col>
                    
                <Col flex={2} style={{display: 'inline-flex'}}>
                    <Card
                            className='card-item'
                            style={{ width: 450, margin: '16px 14px', borderRadius: 20, backgroundColor: '#FFE2E2' }}
                        >
                            <Row style={{textAlign: 'center'}}>
                                <Col style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography.Title level={5}>
                                        Saling Mengingatkan
                                    </Typography.Title>
                                </Col>

                                <Col style={{marginRight: '0', marginLeft: 'auto'}}>
                                    <img src={remindImage} style={{width: 200}} />
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
