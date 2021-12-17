import { Button, Col, Empty, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyResult = ({ ImageSVG, description, withButton = false }) => {
    return (
        <>
            <Empty
                image={ImageSVG}
                imageStyle={{ height: '280px' }}
                description={
                    <Typography.Title level={5} style={{ marginTop: '2em' }}
                        children={description} />}
            />
            {withButton &&
                <Row justify="center">
                    <Col>
                        <Link to="/">
                            <Button style={{ textAlign: 'center' }} className="btn-cta-2nd"> Kembali </Button>
                        </Link>
                    </Col>
                </Row>
            }

        </>
    );
};

export default EmptyResult;