import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import CustomerListPage from './pages/CustomerListPage'
import CustomerDetailsPage from './pages/CustomerDetailsPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/customer-list" element={<CustomerListPage />} />
          <Route path="/customer-details" element={<CustomerDetailsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
