import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {

  const {enrolledCourses, calculateCourseDuration, navigate} = useContext(AppContext);
  const [progressArray,setProgressArray] = useState([
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 1, totalLectures: 4},
    {lectureCompleted: 3, totalLectures: 4},
    {lectureCompleted: 4, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 10},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4}
  ])
  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
     <h1 className='font-2xl font-semibold'>My Enrollements </h1>
     <table className='md:table-auto w-full table-fixed overflow-hidden border mt-10'>
      <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
        <tr>
          <th className='px-4 py-3 font-semibold truncate'>Course</th>
          <th className='px-4 py-3 font-semibold truncate'>Duration</th>
          <th className='px-4 py-3 font-semibold truncate'>Completed</th>
          <th className='px-4 py-3 font-semibold truncate'>Status</th>
        </tr>
      </thead>
      <tbody className='text-gray-800'>
        {enrolledCourses.map((course,index)=>(
          <tr key={index} className='border-b border-gray-500/20'>
            <td className='flex items-center md:px-4 pl-2 md:pl-4 py-3 space-x-3'>
              <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28'/>
              <div className='flex-1'>
                <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / (progressArray[index].totalLectures): 0} className='bg-gray-300 rounded-full'/>
              </div>
            </td>
            <td className='px-4 py-3 max-sm:hidden'>
              {calculateCourseDuration(course)}
            </td>
            <td className='px-4 py-3 max-sm:hidden'>
              {progressArray && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}` } <span>lectures</span>
            </td>
            <td className='px-4 py-3 max-sm:text-right'>
             <button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-green-600 text-white rounded-md max-sm:text-xs' 
             onClick={()=>navigate(`/player/` + course._id)}>
              {progressArray && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? 'completed':'On Going'} </button>
            </td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
    <Footer/>
    </>
  )
}

export default MyEnrollments
