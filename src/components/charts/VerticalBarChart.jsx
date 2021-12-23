import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Label,
    LabelList,
    Legend
} from "recharts";

const VerticalBarChart = ({ data,labelCustom }) => {

    return (
        <>
            <ResponsiveContainer height={350} width={"100%"}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ left: 50, right: 50 }}
                    stackOffset="expand"
                >
                    <XAxis type="number" />
                    <YAxis
                        type="category"
                        dataKey="tanggal"
                        stroke="#000000"
                        fontSize="12"
                    />
                    <Tooltip />

                    <Legend verticalAlign="bottom" align="left" height={10} width={300} />

                    <Bar dataKey="positif" fill="#dd7876">
                        <LabelList
                            dataKey="positif"
                            position="right"
                            content={labelCustom}
                        />
                    </Bar>
                    <Bar dataKey="meninggal" fill="rgb(255, 114, 94)">
                        <LabelList
                            dataKey="meninggal"
                            position="right"
                            content={labelCustom}
                        />
                    </Bar>

                    <Bar dataKey="sembuh" fill="rgb(146, 227, 169)">
                        <LabelList
                            dataKey="sembuh"
                            position="right"
                            content={labelCustom}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer >
        </ >
    );
}

export default VerticalBarChart