import React, { useEffect, useState } from 'react';

import { Divider, Input, Row, Typography } from 'antd';
import { ReactComponent as SearchProvinceSVG } from '../assets/search-province.svg';

import '../styles/searchbar.css'
const { Search } = Input;

const SearchComponent = ({ role }) => {
    const [isSearching, setIsSearching] = useState(false)

    let placeholder = `Cari ${role} . . . `

    const onSearch = value => {
        if (value === '') setIsSearching(false)
        else setIsSearching(true)
        console.log(value);
    }

    let roleUcFirst = role.charAt(0).toUpperCase() + role.slice(1)

    useEffect(() => {
        console.log(isSearching)
    }, [isSearching]);

    return (
        <>
            <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}>
                {`Cari ${roleUcFirst}`}
            </Divider>
            <Row justify="center">
                <Search className="search-province" placeholder={placeholder} allowClear onSearch={onSearch}
                    style={{ width: '60%', padding: '2em' }} />
            </Row>
            <Row justify="center" align="bottom">
                <div>
                    {role === 'provinsi' && !isSearching ?
                        <SearchProvinceSVG />
                        :
                        role === 'hospital' && !isSearching ?
                            <SearchProvinceSVG />
                            :
                            <> hasilnya</>

                    }
                    <Typography.Paragraph
                        style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>
                        Mulai Cari Sekarang
                    </Typography.Paragraph>
                </div>
            </Row>
        </>
    );
};

export default SearchComponent;