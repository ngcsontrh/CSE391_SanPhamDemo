import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sell from './pages/Sell'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GiftCard from './pages/GiftCards'
import CustomerServices from './pages/CustomerServices'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/giftcards' element={<GiftCard />} />
          <Route path='/customer' element={<CustomerServices />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}
export default App