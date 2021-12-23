import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    Line, LineChart, Tooltip, CartesianGrid, Legend, XAxis, YAxis, ResponsiveContainer
} from 'recharts';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const VisualizeLineChart = ({ data, isLoading }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width < 641)
            setIsSmallScreen(true)
        else
            setIsSmallScreen(false)
    }, [width]);

    if (isLoading)
        return (
            <Skeleton active />
        )
    else
        return (
            <>
                <ResponsiveContainer height={350} width={isSmallScreen ? "100%" : 1200}>
                    <LineChart data={data}
                        style={{ marginTop: '4em' }}
                        margin={isSmallScreen ? { top: 5, right: 30, left: 20, bottom: 5 } : {}}>
                        <CartesianGrid strokeDasharray="4 1" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="ratio" stroke="#8884d8" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </>
        );
};

export default VisualizeLineChart;