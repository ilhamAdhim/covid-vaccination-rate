import React from 'react';

import { Card, Typography} from 'antd';
import '../styles/vaccine-tips-card-item.css';
const { Meta } = Card;

const HygieneCardItem = (props) => {
    return (
        <div style={{width: 200}}>
            <div style={{textAlign: 'center'}}>
                <img src={props.img} className='img-card-item-style' />
            </div>
            <div style={{textAlign: 'left'}}>
                <Typography.Paragraph>
                    {props.desc}
                </Typography.Paragraph>
            </div>
        </div>
    )
}

export default HygieneCardItem;