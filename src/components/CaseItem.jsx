import { Card, Col, Typography } from 'antd';
import React from 'react';
import { uppercaseFirst } from '../utils/Common';

const CaseItem = ({ caseCondition, number }) => {
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
                <Col flex={1}>
                    <Card style={{ textAlign: 'center', boxShadow: '0 0 3pt 0 #d3d3d3' }}>
                        <Typography.Text children={uppercasedCondition} style={textStyle} />
                        <hr style={{ marginBottom: '-1em', opacity: '0.4' }} />
                        <br />
                        <Typography.Text children={number.toLocaleString()} style={textStyle} />
                    </Card>
                </Col>
                :
                <> </>
            }
        </>
    );
};

export default CaseItem;