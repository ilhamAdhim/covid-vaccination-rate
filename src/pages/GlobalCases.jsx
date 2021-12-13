import React, { useEffect, useState } from 'react';
import { Button, Row, Typography } from 'antd';
import Footer from '../components/Footer';

import GlobalCaseItem from '../components/GlobalCaseItem';
import { getGlobalCOVIDStats } from '../utils/DataCRUD';

import '../styles/style.css'
import '../styles/global-cases.css'
import "../styles/jumbotron-header.css"

const GlobalCases = props => {
    const [globalCaseData, setGlobalCaseData] = useState([])
    const [isLoadingGlobal, setIsLoadingGlobal] = useState(true)

    useEffect(() => {
        getGlobalCOVIDStats().then(responseData => {
            setGlobalCaseData(responseData)
            setIsLoadingGlobal(false)
        })
    }, [])

    return (
        <>
            <div className='bg-site'>
                <div style={{ paddingTop: '1em', textAlign: 'center'}}>
                    <Typography.Title level={1} >
                        Corona Covid-19 Virus
                    </Typography.Title>
                </div>
                <div className="global-page">
                    <Row justify="space-between" gutter={20} className="new-row">
                        {Object.entries(globalCaseData).map(item =>
                            <GlobalCaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingGlobal} />
                        )}
                    </Row>
                </div>
                <div className='center-item margin-btm-text'>
                    <Typography.Paragraph level={6} style={{ fontWeight: 'bold' }}>
                        The Coronavirus (COVID-19) was first in Wuhan,Hubei,China in December 2019, the outbreak recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.
                    </Typography.Paragraph>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button className="btn-cta" href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'> Learn More</Button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GlobalCases;