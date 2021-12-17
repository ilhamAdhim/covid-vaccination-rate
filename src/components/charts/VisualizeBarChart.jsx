import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LabelList, Label } from 'recharts';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import VerticalBarChart from './VerticalBarChart';

const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#000000" fontWeight="Bold" />;
};


const VisualizeBarChart = ({ data }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width < 641)
            setIsSmallScreen(true)
        else
            setIsSmallScreen(false)
    }, [width]);

    return (
        <>
            {isSmallScreen ?
                <VerticalBarChart data={data} />
                :
                <BarChart data={data} width={1200} height={300} barSize={20}
                    style={{ marginTop: '4em' }}
                    margin={{ left: 50, top: 20, right: 50 }}>
                    <XAxis dataKey="tanggal" stroke="#000000" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={30} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="positif" fill="rgb(186, 104, 200)" barSize={30} >
                        <LabelList
                            dataKey="positif"
                            position="top"
                            content={renderCustomizedLabel}
                        />
                    </Bar>
                    <Bar dataKey="meninggal" fill="rgb(255, 114, 94)" barSize={30} >
                        <LabelList
                            dataKey="meninggal"
                            position="top"
                            content={renderCustomizedLabel}
                        />
                    </Bar>
                    <Bar dataKey="sembuh" fill="rgb(146, 227, 169)" barSize={30} >
                        <LabelList
                            dataKey="sembuh"
                            position="top"
                            content={renderCustomizedLabel}
                        />
                    </Bar>
                </BarChart>

            }

        </>
    );
};

export default VisualizeBarChart;