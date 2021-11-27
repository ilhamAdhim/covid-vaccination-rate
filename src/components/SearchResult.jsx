import React from 'react';
import CardList from './CardList';
import { ReactComponent as SearchProvinceSVG } from '../assets/search-province.svg';
import { Row } from 'antd';

const SearchResult = ({ isSearching, searchResult, role }) => {
    return (
        <div>
            {searchResult?.length > 0 ?
                !isSearching ?
                    <Row justify="center">
                        <SearchProvinceSVG />
                    </Row>
                    :
                    <CardList dataSource={searchResult} role={role} />

                : "Data tidak ditemukan"
            }

        </div>
    );
};

export default SearchResult;