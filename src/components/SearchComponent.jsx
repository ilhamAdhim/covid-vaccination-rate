import React, { useCallback, useEffect, useState } from 'react';

import { Divider, Input, Row, } from 'antd';

import SearchResult from './SearchResult';

import { uppercaseFirst } from '../utils/Common';

import '../styles/style.css'
import '../styles/searchbar.css'

const { Search } = Input;

const SearchComponent = ({ role, dataSource, isDataLoaded, ...props }) => {

    const [isSearching, setIsSearching] = useState(false)

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [sampleSearchResult, setSampleSearchResult] = useState([])

    let placeholder = `Contoh : Jawa Timur . . .  `

    const onSearch = value => {
        if (value === '') setIsSearching(false)
        else setIsSearching(true)
        setSearchValue(value)
    }

    let roleUcFirst = uppercaseFirst(role)

    const loadMoreSampleSearch = () => {
        // get next 3 cities
        setSampleSearchResult((prev) => [...prev, ...searchResult?.sort(setSampleSearchResult).slice(prev.length, prev.length + 3)])
    }

    useEffect(() => {
        if (role === "provinsi")
            setSearchResult(dataSource?.provinces?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        else
            setSearchResult(dataSource?.filter(item => item.kota.toLowerCase().includes(searchValue.toLowerCase())))

    }, [isSearching, searchValue, dataSource, role]);

    const getSampleResult = useCallback(() => {
        setSampleSearchResult(searchResult?.slice(0, 3))
    }, [isSearching, searchResult])

    useEffect(() => {
        getSampleResult()
    }, [getSampleResult]);

    return (
        <>
            <Divider className="colored-divider"> {`Cari ${roleUcFirst}`} </Divider>
            <Row justify="center">
                <Search className="search-province" placeholder={placeholder} allowClear onSearch={onSearch}
                    />
            </Row>

            <SearchResult
                role={role}
                isSearching={isSearching}
                dataSource={dataSource}
                isDataLoaded={isDataLoaded}
                sampleData={props?.sampleData}
                loadMoreSample={props?.loadMoreSample}

                searchResult={searchResult}
                sampleSearchResult={sampleSearchResult}
                loadMoreSampleSearch={loadMoreSampleSearch}
            />
        </>
    );
};

export default SearchComponent;