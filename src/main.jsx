import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import './index.css'
import Footer from './components/Footer'
import GiftCard from './assets/images/gift_card.jpg'
import SpecialGiftCard from './assets/images/special_gift_card.jpg'
import GiftCards from './components/GiftCard'
import GiftCardsPage from './pages/GiftCards'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <GiftCardsPage/>
    <Footer/>

  </React.StrictMode>,
)
