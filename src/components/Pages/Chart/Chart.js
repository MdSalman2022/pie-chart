import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Label, Sector } from "recharts";
import "./style.css"

const data = [
    { name: "Option A", value: 200 },
    { name: "Option B", value: 200 },
    { name: "Option C", value: 200 },
    { name: "Option D", value: 200 },
    { name: "Option E", value: 200 }
];
const COLORS = ["rgb(13, 13, 99)", "skyblue", "orange", "rgb(9, 185, 33)", "rgb(206, 17, 121)"];







const Inner_data = [
    { name: "Group A", value: 340 },
    { name: "Group B", value: 330 },
    { name: "Group C", value: 170 },
    { name: "Group D", value: 330 },
    { name: "Group E", value: 170 },
];

const Inner_COLORS = ["orange", "rgb(206, 17, 121)", "skyblue", "rgb(13, 13, 99)", "rgb(9, 185, 33)"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const options = ['5%', '45%', '25%', '15%', "10%"];

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            fontSize={25}
            fontWeight={700}
        >
            {options[index]}
        </text>
    );
};
const CustomizedLabel = ({ x, y, width, value, index }) => {
    const options = ['Option A', 'Option B', 'Option C', 'Option D', "Option E"];
    return (
        <text x={x} y={y}
            fill="black"
            textAnchor={"middle"}
            dominantBaseline="central">
            {options[index]}
        </text>
    );
};
const Chart = () => {
    return (
        <div className="container">
            <div className="">
                <PieChart width={600} height={600}>
                    <Pie
                        data={data}
                        cx={300}
                        cy={300}
                        innerRadius={180}
                        outerRadius={280}
                        dataKey="value"

                        labelLine={false}
                        label={renderCustomizedLabel}
                    // label={<CustomizedLabel2 />}

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                            </Cell>
                        ))}
                    </Pie>
                    <Pie
                        data={data}
                        cx={300}
                        cy={300}
                        innerRadius={160}
                        outerRadius={180}
                        style={{ fill: '#fff' }}

                    >
                    </Pie>
                    <Pie
                        data={data}
                        cx={300}
                        cy={300}
                        innerRadius={120}
                        outerRadius={160}
                        dataKey="value"
                        stackOffset="expand"

                        label={<CustomizedLabel />}

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                            </Cell>
                        ))}
                    </Pie>
                    <Pie
                        data={Inner_data}
                        cx={300}
                        cy={300}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        shadowColor="#333"
                        shadowBlur={20}
                        shadowOffset={{ x: 0, y: 5 }}
                    >
                        {Inner_data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={Inner_COLORS[index % Inner_COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
}

export default Chart;