import { Col, Row } from 'antd';
import React from 'react';
import CardItem from './CardItem';

const CardList = (props) => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(props.products.length / 4))];

    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) => props.products.slice(idx * 3, idx * 3 + 3));


    return (
        <div>
            {productRows.map((row, idx) => (
                <Row key={idx} justify="center" gutter={[10, 20]}>
                    {row.map(product =>
                        <Col style={{ textAlign: 'center', padding: '1em' }}
                            flex={1} key={product} > <CardItem itemObj={product} role="Hospital" />
                        </Col>
                    )}
                </Row>
            ))}
        </div>
    );
};

export default CardList;