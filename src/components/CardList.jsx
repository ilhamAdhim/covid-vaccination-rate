import { Col, Row, Skeleton, Typography } from 'antd';
import React from 'react';
import CardItem from './CardItem';

const CardList = ({ dataSource, role }) => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(dataSource.length / 4))];

    // chunk the items into the array of rows. 
    // 1 rows 3 columns
    const listRows = rows.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));

    switch (role) {
        case "provinsi":
            return (
                listRows.map((row, idx) => (
                    <Row key={idx} justify="space-between" gutter={20}>
                        {row.map(item =>
                            <Col style={{ textAlign: 'center', paddingTop: '2em' }}
                                key={item.id || item}> <CardItem itemObj={item} role={role} />
                            </Col>
                        )}
                    </Row>
                ))
            )
        case "city":
            return (
                <>
                    {dataSource.map(item =>
                        <>
                            <Typography.Title level={4} children={`${item.kota ?? 'Loading...'}`} />
                            {item?.rumahSakit?.map(item => <div> {item.name} </div>)}
                            <hr style={{ marginBottom: '2em', marginTop: '1em' }} />
                        </>
                    )
                    }
                </>
            )
        case "hospital":
            return (
                listRows.map((row, idx) => (
                    <Row key={idx} justify="space-between" gutter={20} role="listitem">
                        {row.map(item =>
                            <Col style={{ textAlign: 'center', paddingTop: '2em' }}
                                flex={1} key={item.id || item}>
                                <CardItem itemObj={item} role={role} />
                            </Col>
                        )}
                    </Row>
                ))
            )

    }

};

export default CardList;