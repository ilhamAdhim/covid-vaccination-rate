import React from 'react';

import { Card, Typography} from 'antd';
import '../styles/vaccine-tips-card-item.css';
const { Meta } = Card;

const VaccineTipsCardItem = (props) => {
    return (
        <>
            <Card
                className='card-item card-item-style '
            >
                <div style={{textAlign: 'center'}}>

                <img src={props.img} className='img-card-item-style'/>

                <Typography.Title level={5}>
                    {props.title}
                </Typography.Title>
                </div>

                <div style={{textAlign: 'left'}}>
                <Typography.Paragraph>
                    {props.desc}
                </Typography.Paragraph>
                </div>

            </Card>
        </>
    )
}

export default VaccineTipsCardItem;