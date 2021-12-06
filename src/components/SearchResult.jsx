import React from 'react';

import { Col, Row, Spin, Typography } from 'antd';
import CardList from './CardList';

import { ReactComponent as SearchProvinceSVG } from '../assets/search-province.svg';

const SearchResult = ({ isSearching, dataSource, isDataLoaded, sampleData, loadMoreSample, role
    , searchResult, sampleSearchResult, loadMoreSampleSearch }) => {

    switch (role) {
        case "provinsi":
            return (
                <>
                    {!isSearching ?
                        <>
                            <Row justify="center">
                                <SearchProvinceSVG />
                            </Row>
                            <Typography.Title level={5}
                                style={{ textAlign: 'center', marginTop: '1em' }}>
                                Mulai Cari Sekarang
                            </Typography.Title>
                        </>
                        :
                        <CardList
                            role={role}
                            dataSource={searchResult}
                            isDataLoaded={isDataLoaded}
                            sampleData={sampleData}
                            loadMore={loadMoreSample} />
                    }
                </>
            )
        case "kota":
            return (
                <>
                    {!isSearching ?
                        <CardList
                            role={role}
                            dataSource={dataSource}
                            isDataLoaded={isDataLoaded}
                            sampleData={sampleData}
                            loadMore={loadMoreSample} />
                        :
                        <CardList
                            role={role}
                            dataSource={searchResult}
                            isDataLoaded={isDataLoaded}
                            sampleData={sampleSearchResult}
                            loadMore={loadMoreSampleSearch} />
                    }
                </>
            )
    }
};

export default SearchResult;