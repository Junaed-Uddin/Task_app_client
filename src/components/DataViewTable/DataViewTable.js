import React from 'react';

const DataViewTable = ({ data, index }) => {
    const { task, status } = data;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task}</td>
            <td>
                {
                    status === 'Active' ?
                        <span className='bg-red-500 text-white px-2 font-semibold text-sm py-1 rounded-sm'>{status}</span>
                        :
                        <span className='bg-green-500 text-white px-2 font-semibold text-sm py-1 rounded-sm'>{status}</span>
                }
            </td>
        </tr>
    );
};

export default DataViewTable;