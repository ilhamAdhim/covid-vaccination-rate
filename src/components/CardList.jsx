import { Col, Row } from 'antd';
import React from 'react';
import CardItem from './CardItem';

const CardList = ({dataSource, role}) => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(dataSource.length / 4))];

    // chunk the items into the array of rows. 
    // 1 rows 3 columns
    const listRows = rows.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));

    return (
        <div>
            {listRows.map((row, idx) => (
                <Row key={idx} justify="space-between" gutter={20}>
                    {row.map(item =>
                        <Col style={{ textAlign: 'center', paddingTop: '2em' }}
                            flex={1} key={item.id}> <CardItem itemObj={item} role={role} />
                        </Col>
                    )}
                </Row>
            ))}
        </div>
    );
};

export default CardList;