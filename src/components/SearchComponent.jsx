import React, { useEffect, useState } from 'react';

import { Divider, Input, Row, Typography } from 'antd';

import SearchResult from './SearchResult';
import { uppercaseFirst } from '../utils/Common';

import '../styles/style.css'
import '../styles/searchbar.css'

const { Search } = Input;
const SearchComponent = ({ role, dataSource }) => {
    console.log(dataSource)
    const [isSearching, setIsSearching] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([''])

    let placeholder = `Cari ${role} . . . `

    const onSearch = value => {
        if (value === '') setIsSearching(false)
        else setIsSearching(true)
        setSearchValue(value)
    }

    let roleUcFirst = uppercaseFirst(role)

    useEffect(() => {
        if (role === "provinsi")
            setSearchResult(dataSource?.provinces?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        else {
            // console.log("searching hospital")
            setSearchResult(dataSource)
        }
    }, [isSearching, searchValue, dataSource, role]);

    return (
        <>
            <Divider className="colored-divider"> {`Cari ${roleUcFirst}`} </Divider>
            <Row justify="center">
                <Search className="search-province" placeholder={placeholder} allowClear onSearch={onSearch}
                    style={{ width: '60%', padding: '2em' }} />
            </Row>

            <SearchResult role={role} isSearching={isSearching} searchResult={searchResult} />

            <Typography.Title level={5}
                style={{ textAlign: 'center', marginTop: '1em' }}>
                Mulai Cari Sekarang
            </Typography.Title>
        </>
    );
};

export default SearchComponent;