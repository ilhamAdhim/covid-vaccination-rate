import { Col, Row, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import React from 'react';

import "../styles/headertips.css"

import { ReactComponent as VaccineImage } from '../assets/vaccine.svg';
const HeaderTips = () => {
    return (
        <>
            <Row className="tips-kesehatan-page">
                <Col flex="2" sm={{ span: 12 }}>
                    <Typography.Title>
                        Buat Indonesia
                        <br />
                        <span style={{ color: '#ff725e' }}> Sehat, Aman, dan Produktif </span>
                    </Typography.Title>

                    <VaccineImage width={400}/>
                </Col>
                <Col className='item' flex="2" sm={{ span: 12 }}>

                    <Typography.Title level={2}>
                        Corona Virus (COVID-19)
                    </Typography.Title>

                    <Typography.Paragraph>
                        COVID-19 adalah penyakit baru yang dapat mempengaruhi paru-paru dan saluran udara Anda. 
                        Ini disebabkan oleh virus yang disebut coronavirus. 
                        Ditemukan pada Desember 2019 di Wuhan, Hubei, China.
                    </Typography.Paragraph>

                    <ul>
                        <li>
                            <Typography.Paragraph>
                                COVID-19 adalah penyakit yang disebabkan oleh virus corona baru yang muncul di China pada Desember 2020.
                            </Typography.Paragraph>
                        </li>
                        <li>
                            <Typography.Paragraph>
                                Gejala COVID-19 meliputi batuk, demam, dan sesak napas. Gejala tersebut dapat menjadi lebih parah hingga beberapa kasus telah menyebabkan kematian.
                            </Typography.Paragraph>
                        </li>
                        <li>
                            <Typography.Paragraph>
                                COVID-19 adalah penyakit yang disebabkan oleh virus corona baru yang muncul di China pada Desember 2020.
                            </Typography.Paragraph>
                        </li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default HeaderTips;