import React from 'react';

function CustomizedLabel({ name, value, percent, index }) {
    return (
        <text x={0} y={0} dy={8} textAnchor="middle" fill="#333">
            {`${name} ${value} (${(percent * 100).toFixed(0)}%)`}
        </text>
    );
}

export default CustomizedLabel;