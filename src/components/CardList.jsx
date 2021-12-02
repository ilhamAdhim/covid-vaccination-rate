import { Col, Row, List, Typography, Divider, Button } from 'antd';
import React from 'react';
import CardItem from './CardItem';

const CardList = ({ dataSource, role, isSearchResult, sampleData = [], ...props }) => {
    switch (role) {
        case "hospital":
            // array of N elements, where N is the number of rows needed
            const rows = [...Array(Math.ceil(dataSource.length / 4))];

            // chunk the items into the array of rows. 
            // 1 rows 3 columns
            const listRows = rows.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));
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
        case "kota":
            return (
                <>
                    {(isSearchResult ? dataSource : sampleData)?.map((item, idx) =>
                        <div key={item?.id}>
                            <Typography.Title level={4} children={`${item.kota ?? 'Loading...'}`} />
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 4,
                                    xxl: 3,
                                }}
                                dataSource={item?.rumahSakit}
                                renderItem={item => (
                                    <List.Item key={item?.id}>
                                        <CardItem itemObj={item} key={item?.id} role="hospital" />
                                    </List.Item>
                                )}
                            />
                            {idx === sampleData.length - 1 ?
                                <Row justify="center" style={{ marginTop: '2em', marginBottom: '2em' }}>
                                    {dataSource.length === sampleData.length
                                        ? <Typography.Paragraph children="Semua data sudah ditampilkan" />
                                        :
                                        <Button onClick={props.loadMore}>
                                            Muat lebih
                                        </Button>
                                    }
                                </Row>
                                :
                                <Divider />
                            }


                        </div>
                    )
                    }
                </>
            )
        case "provinsi":
            // array of N elements, where N is the number of rows needed
            const rowsProv = [...Array(Math.ceil(dataSource.length / 4))];

            // chunk the items into the array of rows. 
            // 1 rows 3 columns
            const listRowsProv = rowsProv.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));
            return (
                listRowsProv.map((row, idx) => (
                    <Row key={idx} justify="space-between" gutter={20}>
                        {row.map(item =>
                            <Col style={{ textAlign: 'center', paddingTop: '2em' }}
                                key={item.id || item}> <CardItem itemObj={item} role={role} />
                            </Col>
                        )}
                    </Row>
                ))
            )

    }

};

export default CardList;