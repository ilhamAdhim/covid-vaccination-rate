import React from 'react';

const CardItem = ({role}) => {
    
    if(role === "Hospital"){
        return (
                <div>
                    Ini Hospital    
                </div>
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