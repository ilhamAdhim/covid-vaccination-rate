import React, { useEffect } from 'react';
import { Col, Row, List, Typography, Divider, Button, Spin } from 'antd';
import CardItem from './CardItem';

import { ReactComponent as SearchNotFoundSVG } from '../assets/search-not-found.svg';
import EmptyResult from './EmptyResult';

const CardList = ({ isDataLoaded, dataSource, role, sampleData = [], ...props }) => {
    useEffect(() => {
        console.log(dataSource)
    }, [dataSource]);

    // If data is loading
    if (!isDataLoaded) {
        return (
            <Row justify="center" style={{ marginTop: '2em' }}>
                <Col>
                    <Spin size="large" tip="Fetching data . . ." />
                </Col>
            </Row>
        )
    }

    // If data is empty
    if (dataSource?.length === 0 && sampleData?.length === 0) {
        return (
            <EmptyResult
                withButton={false}
                ImageSVG={<SearchNotFoundSVG />}
                description={`Kota tidak ditemukan`} />
        )
    }

    switch (role) {
        case "hospital":
            return (
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
                    dataSource={dataSource}
                    renderItem={item => (
                        <List.Item key={item?.id}>
                            <CardItem itemObj={item} role={role} />
                        </List.Item>
                    )}
                />
            )

        case "kota":
            return (
                <>

                    {sampleData?.map((item, idx) =>
                        <div key={item?.id}>
                            <Typography.Title key={item?.id} level={4} children={`${item.kota ?? 'Loading...'}`} />
                            <List key={item?.id}
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
                                <Row key={item?.id} justify="center" style={{ marginTop: '2em', marginBottom: '2em' }}>
                                    {dataSource.length === sampleData.length
                                        ? <Typography.Paragraph key={item?.id} children="Semua data sudah ditampilkan" />
                                        :
                                        <Button key={item?.id} onClick={props.loadMore}>
                                            Muat lebih
                                        </Button>
                                    }
                                </Row>
                                :
                                <Divider key={item?.id} />
                            }
                        </div>
                    )}
                </>
            )
        case "provinsi":
            return (
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={dataSource}
                    renderItem={item => (
                        <List.Item key={item?.id}>
                            <CardItem itemObj={item} role={role} />
                        </List.Item>
                    )}
                />
            )
    }

};

export default CardList;