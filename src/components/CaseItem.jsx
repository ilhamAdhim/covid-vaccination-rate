import { Card, Col, Typography } from 'antd';
import React from 'react';

const CaseItem = ({ caseCondition, number }) => {

    let textStyle = {
        color: caseCondition === "Sembuh" ? "#92E3A9"
            : caseCondition === "Dirawat" ? "#FFC727"
                : caseCondition === "Meninggal" ? "#FF725E" : "#BA68C8",
        fontWeight: 'bold'
    }

    return (
        <Col flex={1}>
            <Card style={{ textAlign: 'center',boxShadow: '0 0 3pt 0 #d3d3d3'  }}>
                <Typography.Text children={caseCondition} style={textStyle} />
                <hr style={{marginBottom : '-1em', opacity: '0.4'}} />
                <br />
                <Typography.Text children={number} style={textStyle} />
            </Card>
        </Col>
    );
};

export default CaseItem;