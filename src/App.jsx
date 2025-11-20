import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Discount from './pages/Discount'

function PageWrapper({children}){
  return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}}>{children}</motion.div>
}

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path='/' element={<PageWrapper><About/></PageWrapper>} />
          <Route path='/blog' element={<PageWrapper><Blog/></PageWrapper>} />
          <Route path='/contacts' element={<PageWrapper><Contacts/></PageWrapper>} />
          <Route path='/discount' element={<PageWrapper><Discount/></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}