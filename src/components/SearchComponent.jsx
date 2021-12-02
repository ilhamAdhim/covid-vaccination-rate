import React, { useEffect, useState } from 'react';

import { Button, Divider, Input, Row, Typography } from 'antd';

import CardList from './CardList';
import { ReactComponent as SearchProvinceSVG } from '../assets/search-province.svg';

import { uppercaseFirst } from '../utils/Common';

import '../styles/style.css'
import '../styles/searchbar.css'

const { Search } = Input;

const SearchComponent = ({ role, dataSource, ...props }) => {
    const [isSearching, setIsSearching] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

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
            setSearchResult(dataSource?.filter(item => item.kota.toLowerCase().includes(searchValue.toLowerCase())))
        }
    }, [isSearching, searchValue, dataSource, role]);

    return (
        <>
            <Divider className="colored-divider"> {`Cari ${roleUcFirst}`} </Divider>
            <Row justify="center">
                <Search className="search-province" placeholder={placeholder} allowClear onSearch={onSearch}
                    style={{ width: '60%', padding: '2em' }} />
            </Row>

            {!isSearching ?
                role === "provinsi" ?
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
                        isSearchResult={false}
                        dataSource={dataSource}
                        sampleData={props?.sampleData}
                        loadMore={props?.loadMoreSample} />

                :
                <CardList
                    role={role}
                    isSearchResult={true}
                    dataSource={searchResult}
                />
            }
        </>
    );
};

export default SearchComponent;