import React from 'react';

import { Card, Typography} from 'antd';
const { Meta } = Card;

const HygieneCardItem = (props) => {
    return (
        <div style={{width: 300}}>
            <div style={{textAlign: 'center'}}>
                <img src={props.img} style={{width: 200}} />
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