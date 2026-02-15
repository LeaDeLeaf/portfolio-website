import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './app.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
