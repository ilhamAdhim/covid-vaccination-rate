import React, { useEffect, useState } from 'react';

import { Divider, Input, Row, Typography } from 'antd';

import '../styles/searchbar.css'
import SearchResult from './SearchResult';
const { Search } = Input;

const SearchComponent = ({ role, dataSource }) => {
    const [isSearching, setIsSearching] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([''])

    let placeholder = `Cari ${role} . . . `

    const onSearch = value => {
        if (value === '') setIsSearching(false)
        else setIsSearching(true)
        setSearchValue(value)
    }

    let roleUcFirst = role.charAt(0).toUpperCase() + role.slice(1)

    useEffect(() => {
        if (role === "provinsi")
            setSearchResult(dataSource?.provinces?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        else
            console.log("searching hospital")

    }, [isSearching, searchValue, dataSource, role]);

    return (
        <>
            <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}>
                {`Cari ${roleUcFirst}`}
            </Divider>
            <Row justify="center">
                <Search className="search-province" placeholder={placeholder} allowClear onSearch={onSearch}
                    style={{ width: '60%', padding: '2em' }} />
            </Row>

            <SearchResult role={role} isSearching={isSearching} searchResult={searchResult} />

            <Typography.Paragraph
                style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>
                Mulai Cari Sekarang
            </Typography.Paragraph>
        </>
    );
};

export default SearchComponent;