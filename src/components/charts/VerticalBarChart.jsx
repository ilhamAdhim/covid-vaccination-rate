import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Label,
    LabelList
} from "recharts";

const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
};

const VerticalBarChart = ({ data }) => {

    return (
        <div className="content c-white">
            <h1>Work in progress 🚧</h1>
            <ResponsiveContainer height={250} width={"100%"}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ left: 50, right: 50 }}
                    stackOffset="expand"
                >
                    <XAxis hide type="number" />
                    <YAxis
                        type="category"
                        dataKey="name"
                        stroke="#FFFFFF"
                        fontSize="12"
                    />
                    <Tooltip />
                    <Bar dataKey="failed" fill="#dd7876" stackId="a">
                        <LabelList
                            dataKey="failed"
                            position="center"
                            content={renderCustomizedLabel}
                        />
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default VerticalBarChart