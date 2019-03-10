import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const ToDoList = (props) => {

    const columns = [{
        Header: 'Description',
        accessor: 'description'
    }, {
        Header: 'Date',
        accessor: 'date',
        sortable: false

    }, {
        Header: '',
        accessor: 'date',
        sortable: false,
        filterable: false,
        Cell: index => <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteTodo(index)}>Delete</button>
    }]

    return (
        <div>
            <ReactTable defaultPageSize={10} filterable={true} data={props.todos} columns={columns} />
        </div>
    )
}
export default ToDoList;