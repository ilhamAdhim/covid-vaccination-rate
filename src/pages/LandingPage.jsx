import { Divider, Row } from 'antd';
import React from 'react';
import CardItem from '../components/CardItem';
import HeaderJumbotron from '../components/HeaderJumbotron';
import SearchBar from '../components/SearchBar';

const LandingPage = props => {
    return (
        <div style={{
            padding: "2em 9em"
        }}>
            <HeaderJumbotron />

            <Divider />
            <Row>
                <SearchBar role="Hospital" />
            </Row>
            <CardItem role="Hospital" />
            <CardItem role="Province" />
        </div>
    );
};

export default LandingPage;