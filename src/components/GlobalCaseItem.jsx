import { Card, Col, Skeleton, Typography } from 'antd';
import React from 'react';
import { uppercaseFirst } from '../utils/Common';

// import '../styles/style.css'
import '../styles/global-case-card.css'

const GlobalCaseItem = ({ caseCondition, number, isLoading }) => {
    let uppercasedCondition = uppercaseFirst(caseCondition)
    let excludeCondition = ["updated", "critical", "casesPerOneMillion", "deathsPerOneMillion", "tests", "testsPerOneMillion", "population", "oneCasePerPeople", "oneDeathPerPeople", "oneDeathPerPeople", "oneTestPerPeople", "activePerOneMillion", "recoveredPerOneMillion", "criticalPerOneMillion"]

    let textStyle = {
        color: uppercasedCondition === "Recovered" ? "#92E3A9"
            : uppercasedCondition === "Active" ? "#FFC727"
                : uppercasedCondition === "Deaths" ? "#FF725E"
                : uppercasedCondition === "Cases" ? "#BA68C8"
                : uppercasedCondition === "TodayRecovered" ? "#92E3A9"
                : uppercasedCondition === "TodayDeaths" ? "#FF725E"
                : uppercasedCondition === "TodayCases" ? "#BA68C8" : "#FFC727",
        fontWeight: 'bold'
    }

    return (
        <>
            {!excludeCondition.includes(caseCondition) ?
                <Col flex={1} style={{paddingBottom: 20}} span={24}>
                    {isLoading ?
                        <Skeleton active></Skeleton>
                        :
                        <Card className="case-item2">
                            <Typography.Text children={uppercasedCondition} style={textStyle} />
                            <hr style={{ marginBottom: '-1em', opacity: '0.4' }} />
                            <br />
                            <Typography.Text children={number?.toLocaleString()} style={textStyle} />
                        </Card>}
                </Col>
                :
                <> </>
            }
        </>
    );
};

export default GlobalCaseItem;