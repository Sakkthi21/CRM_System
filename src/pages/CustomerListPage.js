import React, {useEffect, useState} from 'react'
import Header from '../components/Common/Header'
import Button from '../components/Common/Button'
import Table from '../components/Common/Table'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectToken} from '../slices/authSlice'
import SearchComponent from '../components/Search'

function CustomerListPage() {
  const token = useSelector(selectToken)

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  }

  const [loading, setLoading] = useState(false)

  const [customersData, setCustomersData] = useState([])
  const [searchData, setSearchData] = useState(customersData)
  const navigate = useNavigate()

  const handleSync = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/auth/get-all-customers-details',
      )
      const data = response.data
      setCustomersData(data)
      console.log(data)
      console.log(typeof data)
    } catch (error) {
      console.error(error)
    }
  }
  // unable to use navigate function in useEffect
  // useEffect(() => {
  //   NavigateToCustomerDetailsPage();
  // }, []);

  const NavigateToCustomerDetailsPage = () => {
    navigate('/customer-details')
  }

  const handleSearch = filteredData => {
    setLoading(true)
    setSearchData(filteredData)
  }

  const handleDeleteRow = updatedCustomersData => {
    setCustomersData(updatedCustomersData)
  }

  const handleUpdateRow = newUpdatedCustomersData => {
    setCustomersData(newUpdatedCustomersData)
  }

  return (
    <>
      <Header />
      <div className="input-wrapper" style={{marginTop: '1rem'}}>
        <h1>Customer List</h1>
        <div className="command-line">
          <Button
            text={'Add Customer'}
            onClick={NavigateToCustomerDetailsPage}
          />
          <SearchComponent
            allCustomersData={customersData} // not required to pass this
            searchData={searchData} // only searchData will fullfill the purpose
            onSearch={handleSearch}
          />
          <button onClick={handleSync} className="sync-btn">
            Sync
          </button>
        </div>
        <div style={{borderTop: '2px solid var(--white)', width: '100%'}}>
          {!loading ? (
            // <Table
            //   data={customersData}
            //   onDelete={handleDeleteRow}
            //   onUpdate={handleUpdateRow}
            // />
            <Table
              data={customersData}
              handleDeletedCustomerData={handleDeleteRow}
              handleUpdatedCustomerData={handleUpdateRow}
            />
          ) : (
            <Table
              data={searchData}
              handleDeletedCustomerData={handleDeleteRow}
              handleUpdatedCustomerData={handleUpdateRow}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default CustomerListPage
