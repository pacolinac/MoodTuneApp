import React from 'react';
import './DataTable.css';

function DataTable({ data, headers }) {
    if (!data || data.length === 0) {
        return <p>No data available.</p>;
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {headers.map((header, headerIndex) => (
                            <td key={headerIndex}>{item[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;
