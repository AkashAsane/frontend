import React from 'react'
import Navbar from '../components/Navbar'


const Homepage = () => {
  return (
    <div>
       <Navbar/>
       <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Blog Platform</h1>
        <p className="text-lg text-gray-600 mb-6">Here are some blogs you can explore</p>
      </div>
    </div>
  )
}

export default Homepage
