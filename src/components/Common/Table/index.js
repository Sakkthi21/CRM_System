import React from 'react'
import './styles.css'
import Button from '../Button'
import TableRow from '../../TableRow'

function Table({data, handleDeletedCustomerData, handleUpdatedCustomerData}) {
  // const data = [
  //   {
  //     first_name: "Ankush",
  //     last_name: "kumar",
  //     address: "Hno 1",
  //     city: "Delhi",
  //     state: "Delhi",
  //     email: "ank@gmail.com",
  //     phone: "123456",
  //     action: "D/E",
  //   },
  // ];

  const handleDeleteRow = emailLinkedWithRowToBeDeleted => {
    console.log('Deleting row with Email', emailLinkedWithRowToBeDeleted)
    const updatedData = data.filter(
      row => row.email !== emailLinkedWithRowToBeDeleted,
    )
    handleDeletedCustomerData(updatedData)
  }

  const handleUpdateRow = oldEmail => {
    console.log('Update function has been made')
    const newEmail = prompt('Enter the new email:', data.email)
    if (newEmail !== null) {
      const newUpdatedData = data.map(row =>
        row.email === oldEmail ? {...row, email: newEmail} : row,
      )
      handleUpdatedCustomerData(newUpdatedData)
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          <tbody>
            {data.map((rowValue, id) => (
              <TableRow
                key={id}
                rowData={rowValue}
                onDelete={() => handleDeleteRow(rowValue.email)}
                onUpdate={() => handleUpdateRow(rowValue.email)}
              />
            ))}
          </tbody>
        }
      </table>
    </div>
  )
}

export default Table
