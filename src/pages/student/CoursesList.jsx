import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CoursCard from '../../components/student/CourseCard'
import { useEffect } from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CoursesList = () => {

  const {navigate, allCourses} = useContext(AppContext);
  //  id is the param name in the route /courses/:id`
  const { id: input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);
 
  useEffect(()=>{
    if(allCourses && allCourses.length > 0){
      const tempCourses = allCourses.slice()
      input ? 
      setFilteredCourse(
        tempCourses.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
      )) : setFilteredCourse(tempCourses)
    }
  },[allCourses, input])

  return (
    <>
     <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
        <div>
        <h1 className='text-4xl font-semibold text-gray-800'>Courses List</h1>
        <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span> / <span>Courses List</span></p>
        </div>
        <SearchBar input={input}/>
      </div>
      {
        input && <div className='inline-flex items-center gap-4 px-4 py-2 border-mt-8-mb-8 text-gray-600'>
          <p>{input}</p>
          <img src={assets.cross_icon} className='cursor-pointer' onClick={() => navigate('/course-list')} alt="" />
        </div>
      }
      <div className='grid grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 my-6 gap-3 px-2 md:p-0'>
        {filteredCourse.map((course)=> <CoursCard key={course._id} course={course}/>)}
      </div>
      </div> 
      <Footer/>
    </>
  )
}

export default CoursesList
