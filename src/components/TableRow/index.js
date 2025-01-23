import React from 'react'

function TableRow({rowData, onDelete, onUpdate}) {
  const handleDelete = key => {
    onDelete(key)
  }
  const handleUpdate = () => {
    onUpdate(rowData)
  }
  return (
    <tr>
      <td>{rowData.first_name}</td>
      <td>{rowData.last_name}</td>
      <td>{rowData.address}</td>
      <td>{rowData.city}</td>
      <td>{rowData.state}</td>
      <td>{rowData.email}</td>
      <td>{rowData.phone}</td>
      <td>
        <button style={{backgroundColor: 'red'}} onClick={handleDelete}>
          Delete
        </button>
        <button style={{backgroundColor: 'orange'}} onClick={handleUpdate}>
          Update
        </button>
      </td>
    </tr>
  )
}

export default TableRow
