import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;

const SearchBar = ({role}) => {
    let placeholder = `Cari ${role} . . . `
    const onSearch = value => console.log(value);
    
    return (
        <div>
            <Search placeholder={placeholder} allowClear onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
};

export default SearchBar;