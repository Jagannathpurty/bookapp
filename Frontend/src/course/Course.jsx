import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Courses from '../component/Courses'

const Course = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen">
    <Courses/>
    </div>
   <Footer/>
   </>
  )
}

export default Course
