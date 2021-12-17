import { Card, Col, Skeleton, Typography } from 'antd';
import React from 'react';
import { uppercaseFirst } from '../utils/Common';

import '../styles/style.css'

const CaseItem = ({ caseCondition, number, isLoading }) => {
    console.log("wkowk")
    let uppercasedCondition = uppercaseFirst(caseCondition)
    let excludeCondition = ["tanggal", "created", "lastUpdate"]

    let textStyle = {
        color: uppercasedCondition === "Sembuh" ? "#92E3A9"
            : uppercasedCondition === "Dirawat" ? "#FFC727"
                : uppercasedCondition === "Meninggal" ? "#FF725E" : "#BA68C8",
        fontWeight: 'bold'
    }

    return (
        <>
            {!excludeCondition.includes(caseCondition) ?
                <Col>
                    {isLoading ?
                        <Skeleton active></Skeleton>
                        :
                        <Card className="case-item">
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

export default CaseItem;