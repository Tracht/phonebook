import React from 'react'

/**
 * This is a generic table render function.
 * It takes title, rows headers, row data keys and he actual data as input.
 * Primary key is the defined per each row.
 */
const Table = props => {
    const dataList = props.data;
    const columns = props.columns;
    const rows = props.rowsKeys;
    const userID = props.primaryKey; 
    
    return (
        <>
        <h2>View {props.title} </h2>
        <table>
            <thead>
                <tr>
                {columns.map((col, index) => <th key={index}>{col}</th>)}
                </tr>
            </thead>
            
            {dataList && dataList.length ?
                (<>
                    <tbody>
                        {dataList.map(data => (
                            <tr key={data[userID]}>
                                {rows.map((key, index) =>
                                        <td key={index}>{data[key]}</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </>) 
            : 
                (<>
                    <tbody>
                        <tr>
                            <td colSpan={3}> No Data in {props.title}</td>
                        </tr>
                    </tbody>
                </>)
            }
        </table>
        </>
    )
}

export default Table