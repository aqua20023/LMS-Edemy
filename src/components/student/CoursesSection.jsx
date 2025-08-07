import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = ({course}) => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium tex-grey-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-grey-500 mt-3'>Discover our top-rated courses across various categories. From coding and design <br/>to business and wellness, our courses are crafted to deliver results.</p>
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>

        {/* to display only 4 courses */}
        {allCourses.slice(0, 4).map((course,index)=> <CourseCard key={index} course={course}/>)}
      </div>

      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className='text-grey-500 border border-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection
