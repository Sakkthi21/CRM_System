import React, {useState} from 'react'
import './styles.css'

function SearchComponent({allCustomersData, searchData, onSearch}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchCriterion, setSearchCriterion] = useState('first_name') 
  const handleSearch = () => {
    console.log(searchTerm)
    const filteredData = allCustomersData.filter(customer => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      switch (searchCriterion) {
        case 'first_name':
          return customer.first_name.toLowerCase().includes(lowerCaseSearchTerm)
        case 'last_name':
          return customer.last_name.toLowerCase().includes(lowerCaseSearchTerm)
        case 'address':
          return customer.address.toLowerCase().includes(lowerCaseSearchTerm)
        case 'city':
          return customer.city.toLowerCase().includes(lowerCaseSearchTerm)
        case 'state':
          return customer.state.toLowerCase().includes(lowerCaseSearchTerm)
        case 'email':
          return customer.email.toLowerCase().includes(lowerCaseSearchTerm)
        case 'phone':
          return customer.phone.toLowerCase().includes(lowerCaseSearchTerm)
        default:
          return true 
      }
    })
    console.log(filteredData)
    if (filteredData.length === 0) {
      setSearchTerm('')
      return alert(`customer with ${searchCriterion} ${searchTerm} not found`)
    } else {
      onSearch(filteredData)
      console.log(`Searching by ${searchCriterion}: ${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <div className="searchSection">
      <select
        value={searchCriterion}
        onChange={e => setSearchCriterion(e.target.value)}
        className="searchSelect-btn"
      >
        <option value="first_name">Search by First_name</option>
        <option value="last_name">Search by Last_name</option>
        <option value="city">Search by City</option>
        <option value="state">Search by Street</option>
        <option value="Email">Search by Email</option>
        <option value="Phone">Search by Phone</option>
      </select>

      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder={`Enter ${searchCriterion}`}
        className="search-input"
      />

      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  )
}

export default SearchComponent
