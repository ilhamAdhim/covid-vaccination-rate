import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import VerticalBarChart from './VerticalBarChart';

const VisualizeBarChart = ({ data }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width < 641)
            setIsSmallScreen(true)
        else
            setIsSmallScreen(false)
    }, [width]);

    useEffect(() => {
        console.log(data)
    }, [data]);
    return (
        <>
            {isSmallScreen ?
                <VerticalBarChart data={data} type="vertical" />
                :
                <BarChart width={1200} height={300} barSize={20} data={data}
                    style={{ marginTop: '4em' }}
                    margin={{ left: 50, right: 50 }}
                >
                    <XAxis dataKey="tanggal" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={30} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="positif" fill="rgb(186, 104, 200)" barSize={30} />
                    <Bar dataKey="meninggal" fill="rgb(255, 114, 94)" barSize={30} />
                    <Bar dataKey="sembuh" fill="rgb(146, 227, 169)" barSize={30} />
                </BarChart>

            }

        </>
    );
};

export default VisualizeBarChart;