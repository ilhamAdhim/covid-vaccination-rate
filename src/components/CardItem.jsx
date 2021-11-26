import { Col } from 'antd';
import React from 'react';

const CardItem = ({role, itemObj}) => {
    
    if(role === "Hospital"){
        return (
                <>
                    {`Ini Hospital ${itemObj.value || itemObj}`}
                </>
            );
    }else{
        return (
                <div>
                    Ini Provinsi      
                </div>
            );
    }
    
};

export default CardItem;