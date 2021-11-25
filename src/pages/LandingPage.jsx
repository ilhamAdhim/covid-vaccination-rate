import React from 'react';
import CardItem from '../components/CardItem';
import SearchBar from '../components/SearchBar';

const LandingPage = props => {
    return (
        <div>
            <SearchBar role="Hospital" />

            <CardItem role="Hospital"/>
            <CardItem role="Province"/>
        </div>
    );
};

export default LandingPage;