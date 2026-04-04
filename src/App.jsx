import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import FeatureGrid from './components/FeatureGrid'
import ComparisonTable from './components/ComparisonTable'
import AgentShowcase from './components/AgentShowcase'
import ServiceList from './components/ServiceList'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Careers from './components/Careers'
import GlobalDelivery from './components/GlobalDelivery'

function MainLayout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <ComparisonTable />
      <AgentShowcase />
      <ServiceList />
      <GlobalDelivery />
      <Portfolio />
      <Testimonials />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
