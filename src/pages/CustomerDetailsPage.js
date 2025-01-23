import React, {useState} from 'react'
import Header from '../components/Common/Header'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {selectToken} from '../slices/authSlice'

function CustomerDetailsPage() {
  const token = useSelector(selectToken)

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  }

  const [loading, setLoading] = useState(false)
  const [newCustomer, setNewCustomer] = useState({
    first_name: '',
    last_name: '',
    street: '',
    address: '',
    city: '',
    state: '',
    email: '',
    phone: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/create',
        newCustomer,
      )
      const data = response.data
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = e => {
    const {name, value} = e.target
    setNewCustomer(prevUser => ({...prevUser, [name]: value}))
  }

  return (
    <>
      <Header />
      <div className="input-wrapper" style={{marginTop: '1rem'}}>
        <h1>Customer Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="details-input">
            <input
              name="first_name"
              state={newCustomer.first_name}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="last_name"
              state={newCustomer.last_name}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              name="street"
              state={newCustomer.street}
              onChange={handleChange}
              type="text"
              placeholder="Street"
            />
            <input
              name="address"
              state={newCustomer.address}
              onChange={handleChange}
              type="text"
              placeholder="Address"
            />
            <input
              name="city"
              state={newCustomer.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
            />
            <input
              name="state"
              state={newCustomer.state}
              onChange={handleChange}
              type="text"
              placeholder="State"
            />
            <input
              name="email"
              state={newCustomer.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              name="phone"
              state={newCustomer.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
            />
          </div>
          <div>
            <button type="submit" className="details-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CustomerDetailsPage
